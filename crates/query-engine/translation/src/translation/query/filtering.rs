//! Handle filtering/where clauses translation.

use std::collections::BTreeMap;

use ndc_sdk::models;
use query_engine_sql::sql::ast;

use super::relationships;
use super::root;
use super::values;
use crate::translation::error::Error;
use crate::translation::helpers::{
    ColumnInfo, Env, RootAndCurrentTables, State, TableNameAndReference,
};
use query_engine_metadata::metadata::database;
use query_engine_sql::sql;

/// Translate a boolean expression to a SQL expression.
pub fn translate_expression(
    env: &Env,
    state: &mut State,
    root_and_current_tables: &RootAndCurrentTables,
    predicate: &models::Expression,
) -> Result<(sql::ast::Expression, Vec<sql::ast::Join>), Error> {
    match predicate {
        models::Expression::And { expressions } => {
            let mut acc_joins = vec![];
            let and_exprs = expressions
                .iter()
                .map(|expr| translate_expression(env, state, root_and_current_tables, expr))
                .try_fold(
                    sql::ast::Expression::Value(sql::ast::Value::Bool(true)),
                    |acc, expr| {
                        let (right, right_joins) = expr?;
                        acc_joins.extend(right_joins);
                        Ok(sql::ast::Expression::And {
                            left: Box::new(acc),
                            right: Box::new(right),
                        })
                    },
                )?;
            Ok((and_exprs, acc_joins))
        }
        models::Expression::Or { expressions } => {
            let mut acc_joins = vec![];
            let or_exprs = expressions
                .iter()
                .map(|expr| translate_expression(env, state, root_and_current_tables, expr))
                .try_fold(
                    sql::ast::Expression::Value(sql::ast::Value::Bool(false)),
                    |acc, expr| {
                        let (right, right_joins) = expr?;
                        acc_joins.extend(right_joins);
                        Ok(sql::ast::Expression::Or {
                            left: Box::new(acc),
                            right: Box::new(right),
                        })
                    },
                )?;
            Ok((or_exprs, acc_joins))
        }
        models::Expression::Not { expression } => {
            let (expr, joins) =
                translate_expression(env, state, root_and_current_tables, expression)?;
            Ok((sql::ast::Expression::Not(Box::new(expr)), joins))
        }
        models::Expression::BinaryComparisonOperator {
            column,
            operator,
            value,
        } if operator == "in" => {
            let mut joins = vec![];
            let typ = infer_value_type_array(env, root_and_current_tables, column)?;
            let (left, left_joins) =
                translate_comparison_target(env, state, root_and_current_tables, column)?;
            joins.extend(left_joins);

            match value {
                models::ComparisonValue::Column { column } => {
                    let (right, right_joins) =
                        translate_comparison_target(env, state, root_and_current_tables, column)?;
                    joins.extend(right_joins);

                    let right = vec![make_unnest_subquery(state, right)];

                    Ok((
                        sql::ast::Expression::BinaryArrayOperation {
                            left: Box::new(left),
                            operator: sql::ast::BinaryArrayOperator::In,
                            right,
                        },
                        joins,
                    ))
                }
                models::ComparisonValue::Scalar { value: json_value } => match json_value {
                    serde_json::Value::Array(values) => {
                        let right = values
                            .iter()
                            .map(|value| {
                                let (right, right_joins) = translate_comparison_value(
                                    env,
                                    state,
                                    root_and_current_tables,
                                    models::ComparisonValue::Scalar {
                                        value: value.clone(),
                                    },
                                    &typ,
                                )?;
                                joins.extend(right_joins);
                                Ok(right)
                            })
                            .collect::<Result<Vec<sql::ast::Expression>, Error>>()?;

                        Ok((
                            sql::ast::Expression::BinaryArrayOperation {
                                left: Box::new(left),
                                operator: sql::ast::BinaryArrayOperator::In,
                                right,
                            },
                            joins,
                        ))
                    }
                    _ => Err(Error::TypeMismatch(json_value.clone(), typ)),
                },
                models::ComparisonValue::Variable { .. } => {
                    let (right, right_joins) = translate_comparison_value(
                        env,
                        state,
                        root_and_current_tables,
                        value.clone(),
                        &typ,
                    )?;
                    joins.extend(right_joins);

                    let right = Box::new(make_jsonbarrayelements_subquery(state, right));

                    Ok((
                        sql::ast::Expression::BinaryOperation {
                            left: Box::new(left),
                            operator: sql::ast::BinaryOperator("in".to_string()),
                            right,
                        },
                        joins,
                    ))
                }
            }
        }
        models::Expression::BinaryComparisonOperator {
            column,
            operator,
            value,
        } => {
            let mut joins = vec![];
            let left_typ = get_comparison_target_type(env, root_and_current_tables, column)?;
            let (left, left_joins) =
                translate_comparison_target(env, state, root_and_current_tables, column)?;
            joins.extend(left_joins);

            // eq is a built-in operator, so we define it here in case we need it.
            let eq_op = query_engine_metadata::metadata::ComparisonOperator {
                operator_name: "=".into(),
                argument_type: left_typ.clone(),

                is_infix: true,
            };
            let op = if operator == "eq" {
                &eq_op
            } else {
                env.lookup_comparison_operator(&left_typ, operator)?
            };
            let (right, right_joins) = translate_comparison_value(
                env,
                state,
                root_and_current_tables,
                value.clone(),
                &op.argument_type,
            )?;
            joins.extend(right_joins);

            if op.is_infix {
                Ok((
                    sql::ast::Expression::BinaryOperation {
                        left: Box::new(left),
                        operator: sql::ast::BinaryOperator(op.operator_name.clone()),
                        right: Box::new(right),
                    },
                    joins,
                ))
            } else {
                Ok((
                    sql::ast::Expression::FunctionCall {
                        function: sql::ast::Function::Unknown(op.operator_name.clone()),
                        args: vec![left, right],
                    },
                    joins,
                ))
            }
        }

        models::Expression::Exists {
            in_collection,
            predicate,
        } => match predicate {
            None => Ok((sql::helpers::true_expr(), vec![])),
            Some(predicate) => Ok((
                translate_exists_in_collection(
                    env,
                    state,
                    root_and_current_tables,
                    in_collection.clone(),
                    predicate,
                )?,
                vec![],
            )),
        },
        models::Expression::UnaryComparisonOperator { column, operator } => match operator {
            models::UnaryComparisonOperator::IsNull => {
                let (value, joins) =
                    translate_comparison_target(env, state, root_and_current_tables, column)?;

                Ok((
                    sql::ast::Expression::UnaryOperation {
                        expression: Box::new(value),
                        operator: sql::ast::UnaryOperator::IsNull,
                    },
                    joins,
                ))
            }
        },
    }
}

/// Given a vector of PathElements and the table alias for the table the
/// expression is over, we return a join in the form of:
///
///   INNER JOIN LATERAL
///   (
///     SELECT *
///     FROM
///       <table of path[0]> AS <fresh name>
///     WHERE
///       <table 0 join condition>
///       AND <predicate of path[0]>
///     AS <fresh name>
///   )
///   INNER JOIN LATERAL
///   (
///     SELECT *
///     FROM
///        <table of path[1]> AS <fresh name>
///     WHERE
///        <table 1 join condition on table 0>
///        AND <predicate of path[1]>
///   ) AS <fresh name>
///   ...
///   INNER JOIN LATERAL
///   (
///       SELECT *
///       FROM
///          <table of path[m]> AS <fresh name>
///       WHERE
///          <table m join condition on table m-1>
///          AND <predicate of path[m]>
///   ) AS <fresh name>
///
/// and the aliased table name under which the sought colum can be found, i.e.
/// the last drawn fresh name. Or, in the case of an empty paths vector, simply
/// the alias that was input.
///
fn translate_comparison_pathelements(
    env: &Env,
    state: &mut State,
    root_and_current_tables: &RootAndCurrentTables,
    path: &[models::PathElement],
) -> Result<(TableNameAndReference, Vec<sql::ast::Join>), Error> {
    let mut joins = vec![];
    let RootAndCurrentTables { current_table, .. } = root_and_current_tables;

    let final_ref = path.iter().try_fold(
        current_table.clone(),
        |current_table_ref,
         models::PathElement {
             relationship,
             predicate,
             arguments,
         }| {
            // get the relationship table
            let relationship_name = &relationship;
            let relationship = env.lookup_relationship(relationship_name)?;

            // new alias for the target table
            let target_table_alias: sql::ast::TableAlias = state
                .make_boolean_expression_table_alias(
                    &relationship.target_collection.clone().to_string(),
                );

            let arguments = relationships::make_relationship_arguments(
                relationships::MakeRelationshipArguments {
                    caller_arguments: arguments.clone(),
                    relationship_arguments: relationship.arguments.clone(),
                },
            )?;

            // create a from clause and get a reference of inner query.
            let (table, from_clause) = root::make_from_clause_and_reference(
                &relationship.target_collection,
                &arguments,
                env,
                state,
                Some(target_table_alias.clone()),
            )?;

            // build a SELECT querying this table with the relevant predicate.
            let mut select = sql::helpers::simple_select(vec![]);
            select.from = Some(from_clause);

            select.select_list = sql::ast::SelectList::SelectStar;

            let new_root_and_current_tables = RootAndCurrentTables {
                root_table: root_and_current_tables.root_table.clone(),
                current_table: TableNameAndReference {
                    reference: table.reference.clone(),
                    name: table.name.clone(),
                },
            };
            // relationship-specfic filter
            let (rel_cond, rel_joins) = match predicate {
                None => (sql::helpers::true_expr(), vec![]),
                Some(predicate) => {
                    translate_expression(env, state, &new_root_and_current_tables, predicate)?
                }
            };

            // relationship where clause
            let cond = relationships::translate_column_mapping(
                env,
                &current_table_ref,
                &table.reference,
                rel_cond,
                relationship,
            )?;

            select.where_ = sql::ast::Where(cond);

            select.joins = rel_joins;

            joins.push(sql::ast::Join::InnerJoinLateral(
                sql::ast::InnerJoinLateral {
                    select: Box::new(select),
                    alias: target_table_alias,
                },
            ));
            Ok(new_root_and_current_tables.current_table)
        },
    )?;

    Ok((final_ref, joins))
}

/// translate a comparison target.
fn translate_comparison_target(
    env: &Env,
    state: &mut State,
    root_and_current_tables: &RootAndCurrentTables,
    column: &models::ComparisonTarget,
) -> Result<(sql::ast::Expression, Vec<sql::ast::Join>), Error> {
    match column {
        models::ComparisonTarget::Column { name, path } => {
            let (table_ref, joins) =
                translate_comparison_pathelements(env, state, root_and_current_tables, path)?;

            // get the unrelated table information from the metadata.
            let collection_info = env.lookup_collection(&table_ref.name)?;
            let ColumnInfo { name, .. } = collection_info.lookup_column(name)?;

            Ok((
                sql::ast::Expression::ColumnReference(sql::ast::ColumnReference::TableColumn {
                    table: table_ref.reference.clone(),
                    name,
                }),
                joins,
            ))
        }

        // Compare a column from the root table.
        models::ComparisonTarget::RootCollectionColumn { name } => {
            let RootAndCurrentTables { root_table, .. } = root_and_current_tables;
            // get the unrelated table information from the metadata.
            let collection_info = env.lookup_collection(&root_table.name)?;

            // find the requested column in the tables columns.
            let ColumnInfo { name, .. } = collection_info.lookup_column(name)?;

            Ok((
                sql::ast::Expression::ColumnReference(sql::ast::ColumnReference::TableColumn {
                    table: root_table.reference.clone(),
                    name,
                }),
                vec![],
            ))
        }
    }
}

/// translate a comparison value.
fn translate_comparison_value(
    env: &Env,
    state: &mut State,
    root_and_current_tables: &RootAndCurrentTables,
    value: models::ComparisonValue,
    typ: &database::ScalarType,
) -> Result<(sql::ast::Expression, Vec<sql::ast::Join>), Error> {
    match value {
        models::ComparisonValue::Column { column } => {
            translate_comparison_target(env, state, root_and_current_tables, &column)
        }
        models::ComparisonValue::Scalar { value: json_value } => Ok((
            values::translate_json_value(
                state,
                &json_value,
                &database::Type::ScalarType(typ.clone()),
            )?,
            vec![],
        )),
        models::ComparisonValue::Variable { name: var } => Ok((
            values::translate_variable(
                state,
                env.get_variables_table()?,
                var.clone(),
                &database::Type::ScalarType(typ.clone()),
            ),
            vec![],
        )),
    }
}

/// Translate an EXISTS clause into a SQL subquery of the following form:
///
/// > EXISTS (SELECT 1 as 'one' FROM <table> AS <alias> WHERE <predicate>)
pub fn translate_exists_in_collection(
    env: &Env,
    state: &mut State,
    root_and_current_tables: &RootAndCurrentTables,
    in_collection: models::ExistsInCollection,
    predicate: &models::Expression,
) -> Result<sql::ast::Expression, Error> {
    match in_collection {
        models::ExistsInCollection::Unrelated {
            collection,
            arguments,
        } => {
            let arguments = relationships::make_relationship_arguments(
                relationships::MakeRelationshipArguments {
                    caller_arguments: BTreeMap::new(),
                    relationship_arguments: arguments,
                },
            )?;

            // create a from clause and get a reference of inner query.
            let (table, from_clause) =
                root::make_from_clause_and_reference(&collection, &arguments, env, state, None)?;

            // CockroachDB doesn't like empty selects, so we do "SELECT 1 as 'one' ..."
            let column_alias = sql::helpers::make_column_alias("one".to_string());

            let select_cols = vec![(
                column_alias.clone(),
                sql::ast::Expression::Value(sql::ast::Value::Int8(1)),
            )];

            // build a SELECT querying this table with the relevant predicate.
            let mut select = sql::helpers::simple_select(select_cols);
            select.from = Some(from_clause);

            let new_root_and_current_tables = RootAndCurrentTables {
                root_table: root_and_current_tables.root_table.clone(),
                current_table: TableNameAndReference {
                    reference: table.reference.clone(),
                    name: table.name.clone(),
                },
            };

            let (expr, expr_joins) =
                translate_expression(env, state, &new_root_and_current_tables, predicate)?;
            select.where_ = sql::ast::Where(expr);

            select.joins = expr_joins;

            // > EXISTS (SELECT 1 as 'one' FROM <table> AS <alias> WHERE <predicate>)
            Ok(sql::ast::Expression::Exists {
                select: Box::new(select),
            })
        }
        // We get a relationship name in exists, query the target table directly,
        // and build a WHERE clause that contains the join conditions and the specified
        // EXISTS condition.
        models::ExistsInCollection::Related {
            relationship,
            arguments,
        } => {
            // get the relationship table
            let relationship = env.lookup_relationship(&relationship)?;

            let arguments = relationships::make_relationship_arguments(
                relationships::MakeRelationshipArguments {
                    caller_arguments: arguments,
                    relationship_arguments: relationship.arguments.clone(),
                },
            )?;

            // create a from clause and get a reference of inner query.
            let (table, from_clause) = root::make_from_clause_and_reference(
                &relationship.target_collection,
                &arguments,
                env,
                state,
                None,
            )?;

            // CockroachDB doesn't like empty selects, so we do "SELECT 1 as 'one' ..."
            let column_alias = sql::helpers::make_column_alias("one".to_string());

            let select_cols = vec![(
                column_alias.clone(),
                sql::ast::Expression::Value(sql::ast::Value::Int8(1)),
            )];

            // build a SELECT querying this table with the relevant predicate.
            let mut select = sql::helpers::simple_select(select_cols);
            select.from = Some(from_clause);

            let new_root_and_current_tables = RootAndCurrentTables {
                root_table: root_and_current_tables.root_table.clone(),
                current_table: TableNameAndReference {
                    reference: table.reference.clone(),
                    name: table.name.clone(),
                },
            };

            // exists condition
            let (exists_cond, exists_joins) =
                translate_expression(env, state, &new_root_and_current_tables, predicate)?;

            // relationship where clause
            let cond = relationships::translate_column_mapping(
                env,
                &root_and_current_tables.current_table,
                &table.reference,
                exists_cond,
                relationship,
            )?;

            select.where_ = sql::ast::Where(cond);

            select.joins = exists_joins;

            // > EXISTS (SELECT 1 as 'one' FROM <table> AS <alias> WHERE <predicate>)
            Ok(sql::ast::Expression::Exists {
                select: Box::new(select),
            })
        }
    }
}

/// Infer the type of the ComparisonValue column from the operator and the ComparisonTarget.
/// For array operators.
fn infer_value_type_array(
    env: &Env,
    root_and_current_tables: &RootAndCurrentTables,
    column: &models::ComparisonTarget,
) -> Result<database::ScalarType, Error> {
    get_comparison_target_type(env, root_and_current_tables, column)
}

/// Extract the scalar type of a comparison target
fn get_comparison_target_type(
    env: &Env,
    root_and_current_tables: &RootAndCurrentTables,
    column: &models::ComparisonTarget,
) -> Result<database::ScalarType, Error> {
    match column {
        models::ComparisonTarget::RootCollectionColumn { name } => {
            let column = env
                .lookup_collection(&root_and_current_tables.root_table.name)?
                .lookup_column(name)?;

            match column.r#type {
                database::Type::ScalarType(scalar_type) => Ok(scalar_type),
                database::Type::ArrayType(_) | database::Type::CompositeType(_) => {
                    Err(Error::NonScalarTypeUsedInOperator {
                        r#type: column.r#type,
                    })
                }
            }
        }
        models::ComparisonTarget::Column { name, path } => match path.last() {
            None => {
                let column = env
                    .lookup_collection(&root_and_current_tables.current_table.name)?
                    .lookup_column(name)?;

                match column.r#type {
                    database::Type::ScalarType(scalar_type) => Ok(scalar_type),
                    database::Type::ArrayType(_) | database::Type::CompositeType(_) => {
                        Err(Error::NonScalarTypeUsedInOperator {
                            r#type: column.r#type,
                        })
                    }
                }
            }
            Some(last) => {
                let column = env
                    .lookup_collection(
                        &env.lookup_relationship(&last.relationship)?
                            .target_collection,
                    )?
                    .lookup_column(name)?;
                match column.r#type {
                    database::Type::ScalarType(scalar_type) => Ok(scalar_type),
                    database::Type::ArrayType(_) | database::Type::CompositeType(_) => {
                        Err(Error::NonScalarTypeUsedInOperator {
                            r#type: column.r#type,
                        })
                    }
                }
            }
        },
    }
}

/// Make a select a subquery expression from an expression.
fn make_unnest_subquery(state: &mut State, expression: ast::Expression) -> ast::Expression {
    let subquery_alias = state.make_table_alias("in_subquery".to_string());
    let subquery_reference = sql::ast::TableReference::AliasedTable(subquery_alias.clone());
    let subquery_from = ast::From::Unnest {
        expression,
        column: sql::helpers::make_column_alias("value".to_string()),
        alias: subquery_alias,
    };
    let mut subquery = sql::helpers::simple_select(vec![sql::helpers::make_column(
        subquery_reference,
        ast::ColumnName("value".to_string()),
        sql::helpers::make_column_alias("value".to_string()),
    )]);
    subquery.from = Some(subquery_from);
    ast::Expression::CorrelatedSubSelect(Box::new(subquery))
}

fn make_jsonbarrayelements_subquery(
    state: &mut State,
    expression: ast::Expression,
) -> ast::Expression {
    // make the variable we select a subquery
    let subquery_alias = state.make_table_alias("in_subquery".to_string());
    let subquery_reference = sql::ast::TableReference::AliasedTable(subquery_alias.clone());
    let subquery_from = ast::From::JsonbArrayElements {
        expression,
        column: sql::helpers::make_column_alias("value".to_string()),
        alias: subquery_alias,
    };
    let mut subquery = sql::helpers::simple_select(vec![sql::helpers::make_column(
        subquery_reference,
        ast::ColumnName("value".to_string()),
        sql::helpers::make_column_alias("value".to_string()),
    )]);
    subquery.from = Some(subquery_from);
    ast::Expression::CorrelatedSubSelect(Box::new(subquery))
}

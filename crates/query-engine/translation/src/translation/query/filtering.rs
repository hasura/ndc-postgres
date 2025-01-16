//! Handle filtering/where clauses translation.

use std::collections::BTreeMap;

use ndc_models as models;
use query_engine_metadata::metadata;
use query_engine_sql::sql::helpers::where_exists_select;

use super::relationships;
use super::root;
use super::values;
use super::variables;
use crate::translation::error::Error;
use crate::translation::error::UnsupportedCapabilities;
use crate::translation::helpers::{
    wrap_in_field_path, ColumnInfo, CompositeTypeInfo, Env, FieldPath, State, TableScope,
    TableSource, TableSourceAndReference,
};
use query_engine_metadata::metadata::database;
use query_engine_sql::sql;
use std::collections::VecDeque;

/// Translate a boolean expression to a SQL expression.
pub fn translate(
    env: &Env,
    state: &mut State,
    current_table_scope: &TableScope,
    predicate: &models::Expression,
) -> Result<sql::ast::Expression, Error> {
    // Fetch the filter expression and the relevant joins.
    let (filter_expression, joins) =
        translate_expression_with_joins(env, state, current_table_scope, predicate)?;

    let mut joins = VecDeque::from(joins);
    let filter = match joins.pop_front() {
        // When there are no joins, the expression will suffice.
        None => filter_expression,
        // When there are joins, wrap in an EXISTS query.
        Some(first) => where_exists_select(
            {
                let (select, alias) = first.get_select_and_alias();
                sql::ast::From::Select { select, alias }
            },
            joins.into(),
            sql::ast::Where(filter_expression),
        ),
    };

    Ok(filter)
}

/// Translate a boolean expression to a SQL expression and also provide all of the joins necessary
/// for the execution.
pub fn translate_expression_with_joins(
    env: &Env,
    state: &mut State,
    current_table_scope: &TableScope,
    predicate: &models::Expression,
) -> Result<(sql::ast::Expression, Vec<sql::ast::Join>), Error> {
    match predicate {
        models::Expression::And { expressions } => {
            let mut acc_joins = vec![];
            let and_exprs = expressions
                .iter()
                .map(|expr| translate_expression_with_joins(env, state, current_table_scope, expr))
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
                .map(|expr| translate_expression_with_joins(env, state, current_table_scope, expr))
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
                translate_expression_with_joins(env, state, current_table_scope, expression)?;
            Ok((sql::ast::Expression::Not(Box::new(expr)), joins))
        }
        models::Expression::BinaryComparisonOperator {
            column,
            operator,
            value,
        } => {
            let left_typ = get_comparison_target_type(env, current_table_scope, column)?;
            let op = env.lookup_comparison_operator(&left_typ, operator)?;
            if op.operator_kind == metadata::OperatorKind::In {
                let mut joins = vec![];
                let (left, left_joins) =
                    translate_comparison_target(env, state, current_table_scope, column)?;
                joins.extend(left_joins);

                match value {
                    models::ComparisonValue::Column {
                        path,
                        name,
                        arguments: _,
                        field_path,
                        scope,
                    } => {
                        let scoped_table = current_table_scope.scoped_table(scope)?;
                        let (table_ref, right_joins) =
                            translate_comparison_pathelements(env, state, scoped_table, path)?;

                        let collection_info = env.lookup_fields_info(&table_ref.source)?;
                        let ColumnInfo { name, .. } = collection_info.lookup_column(name)?;

                        let right = wrap_in_field_path(
                            &field_path.into(),
                            sql::ast::Expression::ColumnReference(
                                sql::ast::ColumnReference::TableColumn {
                                    table: table_ref.reference.clone(),
                                    name,
                                },
                            ),
                        );

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
                            // The expression on the left is definitely not IN an empty list of values
                            if values.is_empty() {
                                Ok((sql::helpers::false_expr(), joins))
                            } else {
                                let right = values
                                    .iter()
                                    .map(|value| {
                                        let (right, right_joins) = translate_comparison_value(
                                            env,
                                            state,
                                            current_table_scope,
                                            &models::ComparisonValue::Scalar {
                                                value: value.clone(),
                                            },
                                            &database::Type::ScalarType(left_typ.clone()),
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
                        }
                        _ => Err(Error::TypeMismatch(json_value.clone(), left_typ)),
                    },
                    models::ComparisonValue::Variable { .. } => {
                        let array_type = database::Type::ArrayType(Box::new(
                            database::Type::ScalarType(left_typ),
                        ));
                        let (right, right_joins) = translate_comparison_value(
                            env,
                            state,
                            current_table_scope,
                            value,
                            &array_type,
                        )?;
                        joins.extend(right_joins);

                        let right = Box::new(make_unnest_subquery(state, right));

                        Ok((
                            sql::ast::Expression::BinaryOperation {
                                left: Box::new(left),
                                operator: sql::ast::BinaryOperator(op.operator_name.clone()),
                                right,
                            },
                            joins,
                        ))
                    }
                }
            } else {
                let mut joins = vec![];
                let (left, left_joins) =
                    translate_comparison_target(env, state, current_table_scope, column)?;
                joins.extend(left_joins);

                let (right, right_joins) = translate_comparison_value(
                    env,
                    state,
                    current_table_scope,
                    value,
                    &database::Type::ScalarType(op.argument_type.clone()),
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
                    current_table_scope,
                    in_collection.clone(),
                    predicate,
                )?,
                vec![],
            )),
        },
        models::Expression::UnaryComparisonOperator { column, operator } => match operator {
            models::UnaryComparisonOperator::IsNull => {
                let (value, joins) =
                    translate_comparison_target(env, state, current_table_scope, column)?;

                Ok((
                    sql::ast::Expression::UnaryOperation {
                        expression: Box::new(value),
                        operator: sql::ast::UnaryOperator::IsNull,
                    },
                    joins,
                ))
            }
        },
        models::Expression::ArrayComparison { .. } => Err(Error::CapabilityNotSupported(
            UnsupportedCapabilities::ArrayComparison,
        )),
    }
}

/// Given a vector of PathElements and the table alias for the table the
/// expression is over, we return a join in the form of:
///
/// > FULL OUTER JOIN LATERAL (
/// >   SELECT <LAST-FRESH-NAME>.* FROM (
/// >     (
/// >       SELECT *
/// >       FROM
/// >         <table of path[0]> AS <fresh name>
/// >       WHERE
/// >         <table 0 join condition>
/// >         AND <predicate of path[0]>
/// >       AS <fresh name>
/// >     )
/// >     INNER JOIN LATERAL
/// >     (
/// >       SELECT *
/// >       FROM
/// >          <table of path[1]> AS <fresh name>
/// >       WHERE
/// >          <table 1 join condition on table 0>
/// >          AND <predicate of path[1]>
/// >     ) AS <fresh name>
/// >     ...
/// >     INNER JOIN LATERAL
/// >     (
/// >         SELECT *
/// >         FROM
/// >            <table of path[m]> AS <fresh name>
/// >         WHERE
/// >            <table m join condition on table m-1>
/// >            AND <predicate of path[m]>
/// >     ) AS <LAST-FRESH-NAME>
/// >   ) AS <fresh name>
/// > )
///
/// and the aliased table name under which the sought column can be found, i.e.
/// the last drawn fresh name. Or, in the case of an empty paths vector, simply
/// the alias that was input.
fn translate_comparison_pathelements(
    env: &Env,
    state: &mut State,
    current_table: &TableSourceAndReference,
    path: &[models::PathElement],
) -> Result<(TableSourceAndReference, Vec<sql::ast::Join>), Error> {
    let mut joins = vec![];

    let final_ref = path.iter().try_fold(
        current_table.clone(),
        |current_table_ref,
         models::PathElement {
             relationship,
             predicate,
             arguments,
             field_path: _,
         }| {
            // get the relationship table
            let relationship_name = &relationship;
            let relationship = env.lookup_relationship(relationship_name)?;

            // new alias for the target table
            let target_table_alias: sql::ast::TableAlias =
                state.make_boolean_expression_table_alias(relationship.target_collection.as_str());

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

            // for the purposes of named scopes, PathElement functions as a root, much like Query
            let new_current_table_scope = TableScope::new(table.clone());

            // relationship-specfic filter
            let (rel_cond, rel_joins) = match predicate {
                None => (sql::helpers::true_expr(), vec![]),
                Some(predicate) => translate_expression_with_joins(
                    env,
                    state,
                    &new_current_table_scope,
                    predicate,
                )?,
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

            Ok(table)
        },
    )?;

    let mut joins: VecDeque<_> = joins.into();
    match joins.pop_front() {
        None => Ok((final_ref, vec![])),

        // If we are fetching a nested column (we have joins), we wrap them in a select that fetches
        // columns from the last table in the chain.
        Some(first) => {
            let mut outer_select = sql::helpers::simple_select(vec![]);
            outer_select.select_list = sql::ast::SelectList::SelectStarFrom(final_ref.reference);
            let (select, alias) = first.get_select_and_alias();
            outer_select.from = Some(sql::ast::From::Select { select, alias });
            outer_select.joins = joins.into();

            let alias = state
                .make_boolean_expression_table_alias(final_ref.source.name_for_alias().as_str());
            let reference = sql::ast::TableReference::AliasedTable(alias.clone());

            Ok((
                TableSourceAndReference {
                    reference,
                    source: final_ref.source,
                },
                // We use a full outer join so even if one of the sides does not contain rows,
                // We can still select values.
                // See a more elaborated explanation: https://github.com/hasura/ndc-postgres/pull/463#discussion_r1601884534
                vec![sql::ast::Join::FullOuterJoinLateral(
                    sql::ast::FullOuterJoinLateral {
                        select: Box::new(outer_select),
                        alias,
                    },
                )],
            ))
        }
    }
}

/// translate a comparison target.
fn translate_comparison_target(
    env: &Env,
    _state: &mut State,
    current_table_scope: &TableScope,
    column: &models::ComparisonTarget,
) -> Result<(sql::ast::Expression, Vec<sql::ast::Join>), Error> {
    match column {
        models::ComparisonTarget::Column {
            name,
            field_path,
            arguments: _,
        } => {
            let (table_ref, joins) = (current_table_scope.current_table().clone(), vec![]);

            // get the unrelated table information from the metadata.
            let collection_info = env.lookup_fields_info(&table_ref.source)?;
            let ColumnInfo { name, .. } = collection_info.lookup_column(name)?;

            Ok((
                wrap_in_field_path(
                    &field_path.into(),
                    sql::ast::Expression::ColumnReference(sql::ast::ColumnReference::TableColumn {
                        table: table_ref.reference.clone(),
                        name,
                    }),
                ),
                joins,
            ))
        }
        ndc_models::ComparisonTarget::Aggregate { .. } => Err(Error::CapabilityNotSupported(
            UnsupportedCapabilities::FilterByAggregate,
        )),
    }
}

/// translate a comparison value.
fn translate_comparison_value(
    env: &Env,
    state: &mut State,
    current_table_scope: &TableScope,
    value: &models::ComparisonValue,
    typ: &database::Type,
) -> Result<(sql::ast::Expression, Vec<sql::ast::Join>), Error> {
    match value {
        models::ComparisonValue::Column {
            path,
            name,
            arguments: _,
            field_path,
            scope,
        } => {
            let table_source_and_reference = current_table_scope.scoped_table(scope)?;

            let (table_ref, joins) =
                translate_comparison_pathelements(env, state, table_source_and_reference, path)?;

            // get the unrelated table information from the metadata.
            let collection_info = env.lookup_fields_info(&table_ref.source)?;
            let ColumnInfo { name, .. } = collection_info.lookup_column(name)?;

            Ok((
                wrap_in_field_path(
                    &field_path.into(),
                    sql::ast::Expression::ColumnReference(sql::ast::ColumnReference::TableColumn {
                        table: table_ref.reference.clone(),
                        name,
                    }),
                ),
                joins,
            ))
        }
        models::ComparisonValue::Scalar { value: json_value } => {
            Ok((values::translate(env, state, json_value, typ)?, vec![]))
        }
        models::ComparisonValue::Variable { name: var } => Ok((
            variables::translate(env, state, env.get_variables_table()?, var, typ)?,
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
    current_table_scope: &TableScope,
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
                column_alias,
                sql::ast::Expression::Value(sql::ast::Value::Int4(1)),
            )];

            // build a SELECT querying this table with the relevant predicate.
            let mut select = sql::helpers::simple_select(select_cols);
            select.from = Some(from_clause);

            let new_current_table_scope = current_table_scope.new_from_scope(table);

            let (expr, expr_joins) =
                translate_expression_with_joins(env, state, &new_current_table_scope, predicate)?;
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
            field_path: _,
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
                column_alias,
                sql::ast::Expression::Value(sql::ast::Value::Int4(1)),
            )];

            // build a SELECT querying this table with the relevant predicate.
            let mut select = sql::helpers::simple_select(select_cols);
            select.from = Some(from_clause);

            let new_current_table_scope = current_table_scope.new_from_scope(table.clone());

            // exists condition
            let (exists_cond, exists_joins) =
                translate_expression_with_joins(env, state, &new_current_table_scope, predicate)?;

            // relationship where clause
            let cond = relationships::translate_column_mapping(
                env,
                current_table_scope.current_table(),
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
        // Filter by a predicate related to columns inside an array field.
        models::ExistsInCollection::NestedCollection {
            column_name,
            arguments,
            field_path,
        } => {
            if !arguments.is_empty() {
                Err(Error::CapabilityNotSupported(
                    UnsupportedCapabilities::FieldArguments,
                ))?;
            }
            let table = current_table_scope.current_table();

            // Get the table information from the metadata.
            let collection_fields_info = env.lookup_fields_info(&table.source)?;

            // The initial column we start with, it's reference, and it's source.
            let column_info = collection_fields_info.lookup_column(&column_name)?;
            let column_expr =
                sql::ast::Expression::ColumnReference(sql::ast::ColumnReference::AliasedColumn {
                    table: table.reference.clone(),
                    column: sql::helpers::make_column_alias(column_info.name.0),
                });

            let source = {
                let (collection_name, FieldPath(mut field_path)) =
                    table.source.collection_name_and_field_path();
                field_path.push(column_name.clone());
                TableSource::NestedField {
                    collection_name,
                    type_name: underlying_type_name(column_info.r#type),
                    field_path: FieldPath(field_path),
                }
            };
            // Walk over the fields and construct a select expression over the fields
            // E.g. `institution.staff.last_name`
            // And the source, to be used to fetch information about the fields it contains.
            let (select_expression, source) = field_path.iter().try_fold(
                (column_expr, source),
                |(expression, source), nested_field| {
                    let collection_fields_info = env.lookup_fields_info(&source)?;

                    let column_info = collection_fields_info.lookup_column(nested_field)?;

                    let source = {
                        let (collection_name, FieldPath(mut field_path)) =
                            table.source.collection_name_and_field_path();
                        field_path.push(column_name.clone());
                        TableSource::NestedField {
                            collection_name,
                            type_name: underlying_type_name(column_info.r#type),
                            field_path: FieldPath(field_path),
                        }
                    };

                    Ok((
                        sql::ast::Expression::NestedFieldSelect {
                            expression: Box::new(expression),
                            nested_field: sql::ast::NestedField(column_info.name.0),
                        },
                        source,
                    ))
                },
            )?;

            // Create an alias for the source which we will use as a reference.
            let alias = state.make_table_alias(source.name_for_alias());

            // Define a from clause from the field selection expression.
            let from_source = sql::ast::From::Unnest {
                expression: select_expression,
                alias: alias.clone(),
                columns: vec![],
            };

            // Define a new root and current table structure pointing the current table
            // at the nested field.
            let new_current_table_scope =
                current_table_scope.new_from_scope(TableSourceAndReference {
                    reference: sql::ast::TableReference::AliasedTable(alias),
                    source,
                });

            // Translate the predicate inside the exists.
            let (exists_cond, exists_joins) =
                translate_expression_with_joins(env, state, &new_current_table_scope, predicate)?;

            // Construct the `where exists` expression.
            Ok(sql::helpers::where_exists_select(
                from_source,
                exists_joins,
                sql::ast::Where(exists_cond),
            ))
        }
        ndc_models::ExistsInCollection::NestedScalarCollection {
            column_name: _,
            arguments: _,
            field_path: _,
        } => Err(Error::CapabilityNotSupported(
            UnsupportedCapabilities::NestedScalarCollection,
        )),
    }
}

/// Extract the scalar type of a comparison target
fn get_comparison_target_type(
    env: &Env,
    current_table_scope: &TableScope,
    column: &models::ComparisonTarget,
) -> Result<models::ScalarTypeName, Error> {
    match column {
        // models::ComparisonTarget::RootCollectionColumn { name, field_path } => {
        //     let column = env
        //         .lookup_fields_info(&root_and_current_tables.root_table.source)?
        //         .lookup_column(name)?;

        //     let mut field_path = match field_path {
        //         None => VecDeque::new(),
        //         Some(field_path) => field_path.iter().collect(),
        //     };
        //     get_column_scalar_type_name(env, &column.r#type, &mut field_path)
        // }
        models::ComparisonTarget::Column {
            name,
            field_path,
            arguments: _,
        } => {
            let mut field_path = match field_path {
                None => VecDeque::new(),
                Some(field_path) => field_path.iter().collect(),
            };
            let column = env
                .lookup_fields_info(&current_table_scope.current_table().source)?
                .lookup_column(name)?;

            get_column_scalar_type_name(env, &column.r#type, &mut field_path)
        }
        ndc_models::ComparisonTarget::Aggregate { path, aggregate } => {
            match aggregate {
                ndc_models::Aggregate::StarCount {} | ndc_models::Aggregate::ColumnCount { .. } => {
                    Ok("int8".into())
                }
                ndc_models::Aggregate::SingleColumn {
                    column,
                    arguments: _,
                    field_path,
                    function,
                } => {
                    // figure out column type, then get type for that aggregate from metadata
                    let mut field_path = match field_path {
                        None => VecDeque::new(),
                        Some(field_path) => field_path.iter().collect(),
                    };

                    let scalar_type_name = match path.last() {
                        None => {
                            let column = env
                                .lookup_fields_info(&current_table_scope.current_table().source)?
                                .lookup_column(column)?;

                            get_column_scalar_type_name(env, &column.r#type, &mut field_path)?
                        }
                        Some(last) => {
                            let column = env
                                .lookup_fields_info(&TableSource::Collection(
                                    env.lookup_relationship(&last.relationship)?
                                        .target_collection
                                        .clone(),
                                ))?
                                .lookup_column(column)?;

                            get_column_scalar_type_name(env, &column.r#type, &mut field_path)?
                        }
                    };

                    let scalar_type = env.metadata.scalar_types.0.get(&scalar_type_name);

                    let aggregate_function = scalar_type
                        .ok_or(Error::ScalarTypeNotFound(scalar_type_name.clone()))?
                        .aggregate_functions
                        .get(function)
                        .ok_or(Error::MissingAggregateFunctionForScalar {
                            scalar: scalar_type_name,
                            function: function.to_owned(),
                        })?;

                    Ok(aggregate_function.return_type.clone().into())
                }
            }
        }
    }
}

/// Extract the scalar type name of a column down their nested field path.
/// Will error if path do not lead to a scalar type.
fn get_column_scalar_type_name(
    env: &Env,
    typ: &database::Type,
    field_path: &mut VecDeque<&models::FieldName>,
) -> Result<models::ScalarTypeName, Error> {
    let field = field_path.pop_front();
    match typ {
        database::Type::ScalarType(scalar_type) => match field {
            None => Ok(scalar_type.clone()),
            // todo: what about json?
            Some(field) => Err(Error::ColumnNotFoundInCollection(
                field.clone(),
                scalar_type.as_str().into(),
            )),
        },
        database::Type::ArrayType(_) => Err(Error::NonScalarTypeUsedInOperator {
            r#type: typ.clone(),
        }),
        database::Type::CompositeType(composite_type) => match field {
            None => Err(Error::NonScalarTypeUsedInOperator {
                r#type: database::Type::CompositeType(composite_type.clone()),
            }),
            // If a composite type has a field, try to extract its type.
            Some(field) => {
                let composite_type = env.lookup_composite_type(composite_type)?;
                match composite_type {
                    CompositeTypeInfo::CompositeType { info, name } => {
                        let typ = &info
                            .fields
                            .get(field)
                            .ok_or(Error::ColumnNotFoundInCollection(
                                field.clone(),
                                name.as_str().into(),
                            ))?
                            .r#type;
                        get_column_scalar_type_name(env, typ, field_path)
                    }
                    CompositeTypeInfo::Table { info, name } => {
                        let typ = &info
                            .columns
                            .get(field)
                            .ok_or(Error::ColumnNotFoundInCollection((*field).clone(), name))?
                            .r#type;
                        get_column_scalar_type_name(env, typ, field_path)
                    }
                }
            }
        },
    }
}

/// Make a select a subquery expression from an expression.
fn make_unnest_subquery(
    state: &mut State,
    expression: sql::ast::Expression,
) -> sql::ast::Expression {
    let subquery_alias = state.make_table_alias("in_subquery".to_string());
    let subquery_reference = sql::ast::TableReference::AliasedTable(subquery_alias.clone());
    let subquery_from = sql::ast::From::Unnest {
        expression,
        columns: vec![sql::helpers::make_column_alias("value".to_string())],
        alias: subquery_alias,
    };
    let mut subquery = sql::helpers::simple_select(vec![sql::helpers::make_column(
        subquery_reference,
        sql::ast::ColumnName("value".to_string()),
        sql::helpers::make_column_alias("value".to_string()),
    )]);
    subquery.from = Some(subquery_from);
    sql::ast::Expression::CorrelatedSubSelect(Box::new(subquery))
}

/// Fetch the ndc-spec model type name referenced by this database type.
fn underlying_type_name(typ: database::Type) -> models::TypeName {
    match typ {
        database::Type::ScalarType(scalar_type) => scalar_type.into(),
        database::Type::CompositeType(typ) => typ,
        database::Type::ArrayType(typ) => underlying_type_name(*typ),
    }
}

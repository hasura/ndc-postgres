use ndc_sdk::models;

use super::error::Error;
use super::filtering;
use super::helpers::{Env, RootAndCurrentTables, State, TableNameAndReference};
use super::relationships;
use super::root;
use query_engine_sql::sql;

/// Convert the order by fields from a QueryRequest to a SQL ORDER BY clause and potentially
/// JOINs when we order by relationship fields.
pub fn translate_order_by(
    env: &Env,
    state: &mut State,
    root_and_current_tables: &RootAndCurrentTables,
    order_by: &Option<models::OrderBy>,
) -> Result<(sql::ast::OrderBy, Vec<sql::ast::Join>), Error> {
    let mut joins: Vec<sql::ast::Join> = vec![];

    // For each order_by field, extract the relevant field name, direction, and join table (if relevant).
    match order_by {
        None => Ok((sql::ast::OrderBy { elements: vec![] }, vec![])),
        Some(models::OrderBy { elements }) => {
            let order_by_parts = elements
                .iter()
                .map(|order_by| {
                    let target = match &order_by.target {
                        models::OrderByTarget::Column { name, path } => translate_order_by_target(
                            env,
                            state,
                            root_and_current_tables,
                            (name, path),
                            None,
                            &mut joins,
                        ),

                        models::OrderByTarget::SingleColumnAggregate {
                            column,
                            function,
                            path,
                        } => translate_order_by_target(
                            env,
                            state,
                            root_and_current_tables,
                            (column, path),
                            Some(function.clone()),
                            &mut joins,
                        ),
                        models::OrderByTarget::StarCountAggregate { path } => {
                            let (column_alias, select) = translate_order_by_star_count_aggregate(
                                env,
                                state,
                                root_and_current_tables,
                                path,
                            )?;

                            // Give it a nice unique alias.
                            let table_alias = state.make_order_by_count_table_alias(
                                &root_and_current_tables.current_table.name,
                            );

                            // Build a join ...
                            let new_join = sql::ast::LeftOuterJoinLateral {
                                select: Box::new(select),
                                alias: table_alias.clone(),
                            };

                            // ... push it to the accumulated joins.
                            joins.push(sql::ast::Join::LeftOuterJoinLateral(new_join));

                            // Build an alias to query the column from this select.
                            let column_name = sql::ast::Expression::ColumnReference(
                                sql::ast::ColumnReference::AliasedColumn {
                                    table: sql::ast::TableReference::AliasedTable(table_alias),
                                    column: column_alias,
                                },
                            );

                            // return the column to order by (from our fancy join)
                            Ok(column_name)
                        }
                    }?;
                    let direction = match order_by.order_direction {
                        models::OrderDirection::Asc => sql::ast::OrderByDirection::Asc,
                        models::OrderDirection::Desc => sql::ast::OrderByDirection::Desc,
                    };
                    Ok(sql::ast::OrderByElement { target, direction })
                })
                .collect::<Result<Vec<sql::ast::OrderByElement>, Error>>()?;

            Ok((
                sql::ast::OrderBy {
                    elements: order_by_parts,
                },
                joins,
            ))
        }
    }
}

/// a StarCountAggregate allows us to express stuff like "order albums by number of tracks they have",
/// ie order by a COUNT(*) over the items of an array relationship
fn translate_order_by_star_count_aggregate(
    env: &Env,
    state: &mut State,
    root_and_current_tables: &RootAndCurrentTables,
    path: &[models::PathElement],
) -> Result<(sql::ast::ColumnAlias, sql::ast::Select), Error> {
    // we can only do one level of star count aggregate atm
    if path.len() > 1 {
        Err(Error::NotSupported(
            "star count for nested relationships".to_string(),
        ))
    } else {
        Ok(())
    }?;

    match path.get(0) {
        Some(path_element) => {
            // examine the path elements' relationship.
            let relationship = env.lookup_relationship(&path_element.relationship)?;

            let target_collection_alias =
                state.make_table_alias(relationship.target_collection.clone());

            let (table, from_clause) = from_for_path_element(
                env,
                state,
                relationship,
                &target_collection_alias,
                &path_element.arguments,
            )?;

            // make a very basic select COUNT(*) as "Count" FROM
            // <nested-table> WHERE <join-conditions>
            let column_alias = sql::helpers::make_column_alias("count".to_string());

            let select_cols = sql::ast::SelectList::SelectList(vec![(
                column_alias.clone(),
                sql::ast::Expression::Count(sql::ast::CountType::Star),
            )]);

            // build a select query from this table where join condition.
            let select = select_for_path_element(
                env,
                state,
                root_and_current_tables,
                relationship,
                &path_element.predicate,
                select_cols,
                (table, from_clause),
            )?;

            // return the column to order by (from our fancy join)
            Ok((column_alias, select))
        }
        None => Err(Error::NotSupported(
            "order by star count aggregates".to_string(),
        )),
    }
}

/// Translate an order by target and add additional JOINs to the wrapping SELECT
/// and return the expression used for the sort by the wrapping SELECT.
fn translate_order_by_target(
    env: &Env,
    state: &mut State,
    root_and_current_tables: &RootAndCurrentTables,
    (column, path): (&str, &Vec<models::PathElement>),
    // we expect function to be derived derived from the schema we publish by v3-engine,
    // so no sql injection shenanigans should be possible.
    function: Option<String>,
    joins: &mut Vec<sql::ast::Join>,
) -> Result<sql::ast::Expression, Error> {
    let column_or_relationship_select = translate_order_by_target_for_column(
        env,
        state,
        root_and_current_tables,
        column.to_string(),
        path,
        function,
    )?;

    match column_or_relationship_select {
        // The column is from the source table, we just need to query it directly.
        ColumnOrSelect::Column(column_name) => {
            Ok(sql::ast::Expression::ColumnReference(column_name))
        }

        // The column is from a relationship table, we need to join with this select query.
        ColumnOrSelect::Select { column, select } => {
            // Give it a nice unique alias.
            let table_alias =
                state.make_order_by_table_alias(&root_and_current_tables.current_table.name);

            // Build a join and push it to the accumulated joins.
            let new_join = sql::ast::LeftOuterJoinLateral {
                select: Box::new(select),
                alias: table_alias.clone(),
            };

            joins.push(sql::ast::Join::LeftOuterJoinLateral(new_join));

            // Build an alias to query the column from this select.
            let column_name =
                sql::ast::Expression::ColumnReference(sql::ast::ColumnReference::AliasedColumn {
                    table: sql::ast::TableReference::AliasedTable(table_alias),
                    column,
                });

            Ok(column_name)
        }
    }
}

/// Used as the return type of `translate_order_by_target_for_column`.
enum ColumnOrSelect {
    /// Column represents a target column that is reference from the outer select.
    Column(sql::ast::ColumnReference),
    /// Select represents a select query which contain the requested column.
    Select {
        column: sql::ast::ColumnAlias,
        select: sql::ast::Select,
    },
}

/// Generate a SELECT query representing querying the requested column from a table
/// (potentially a nested one using joins). The requested column if the path is empty,
/// or a select query describing how to reach the column.
fn translate_order_by_target_for_column(
    env: &Env,
    state: &mut State,
    root_and_current_tables: &RootAndCurrentTables,
    column_name: String,
    path: &[models::PathElement],
    function: Option<String>,
) -> Result<ColumnOrSelect, Error> {
    // We want to build a select query where "Track" is the root table, and "Artist"."Name"
    // is the column we need for the order by. Our query will look like this:
    //
    // > ( SELECT "Artist"."Name" AS "Name" -- wanted column, might be wrapped with <function> if one is supplied
    // >   FROM
    // >     ( SELECT "Album"."ArtistId" ---- required for the next join condition
    // >       FROM "Album" AS "Album"
    // >       WHERE "Track"."AlbumId" = "Album"."AlbumId" --- requires 'AlbumId' from 'Track'
    // >     ) AS "Album"
    // >   LEFT OUTER JOIN LATERAL
    // >     ( SELECT "Artist"."Name" AS "Name" ---- the wanted column for the order by
    // >       FROM "Artist" AS "Artist" ---- the last relationship table
    // >       WHERE ("Album"."ArtistId" = "Artist"."ArtistId") ---- requires 'ArtistId' from 'Album'
    // >     ) AS "Artist" ON ('true')
    // > )
    //
    // Note that "Track" will be supplied by the caller of this function.

    // We will add joins according to the path element.
    let mut joins: Vec<sql::ast::LeftOuterJoinLateral> = vec![];

    // Loop through relationships,
    // building up new joins and replacing the selected column for the order by.
    // for each step in the loop we peek at the required columns (used as keys in the join),
    // from the next join, we need to select these.
    let last_table = path.iter().enumerate().try_fold(
        root_and_current_tables.current_table.clone(),
        |last_table, (index, path_element)| {
            process_path_element_for_order_by_target_for_column(
                (env, state),
                root_and_current_tables,
                &column_name,
                path,
                &function,
                &mut joins,
                (last_table, (index, path_element)),
            )
        },
    )?;

    if path.is_empty() {
        // if there were no relationship columns, we don't need to build a query, just return the column.
        let table = env.lookup_collection(&root_and_current_tables.current_table.name)?;
        let selected_column = table.lookup_column(&column_name)?;

        let selected_column_name = sql::ast::ColumnReference::AliasedColumn {
            table: root_and_current_tables.current_table.reference.clone(),
            // we are going to deliberately use the table column name and not an alias we get from
            // the query request because this is internal to the sorting mechanism.
            column: sql::helpers::make_column_alias(selected_column.name.0.clone()),
        };
        Ok(ColumnOrSelect::Column(selected_column_name))
    }
    // If there was a relationship column, build a wrapping select query selecting the wanted column
    // for the order by, and build a select of all the joins to select from.
    else {
        // order by columns
        let table = env.lookup_collection(&last_table.name)?;
        let selected_column = table.lookup_column(&column_name)?;

        let selected_column_name = sql::ast::ColumnReference::AliasedColumn {
            table: last_table.reference,
            // we are going to deliberately use the table column name and not an alias we get from
            // the query request because this is internal to the sorting mechanism.
            column: sql::helpers::make_column_alias(selected_column.name.0.clone()),
        };

        // if we got a function, we wrap the required column with
        // a function call.
        let selected_column_expr = match function {
            None => sql::ast::Expression::ColumnReference(selected_column_name.clone()),
            Some(func) => sql::ast::Expression::FunctionCall {
                function: sql::ast::Function::Unknown(func),
                args: vec![sql::ast::Expression::ColumnReference(
                    selected_column_name.clone(),
                )],
            },
        };

        // wrapping select
        let selected_column_alias = sql::helpers::make_column_alias(column_name.to_string());
        let mut select = sql::helpers::simple_select(vec![(
            selected_column_alias.clone(),
            selected_column_expr,
        )]);

        // build an inner select from the joins by selecting from the first table
        let inner_join = joins.remove(0);
        let inner_select = inner_join.select;
        let inner_alias = inner_join.alias;

        // we start from the first table
        select.from = Some(sql::ast::From::Select {
            select: inner_select,
            alias: inner_alias,
        });

        // and add the joins
        select.joins = joins
            .into_iter()
            .map(sql::ast::Join::LeftOuterJoinLateral)
            .collect::<Vec<sql::ast::Join>>();

        // and return the requested column alias and the inner select.
        Ok(ColumnOrSelect::Select {
            column: selected_column_alias,
            select,
        })
    }
}

/// This function is used when looping through relationships,
/// building up new joins and replacing the selected column for the order by.
/// for each step in the loop we peek at the required columns (used as keys in the join),
/// from the next join, we need to select these.
fn process_path_element_for_order_by_target_for_column(
    (env, state): (&Env, &mut State),
    root_and_current_tables: &RootAndCurrentTables,
    target_column_name: &str,
    path: &[models::PathElement],
    aggregate_function_for_arrays: &Option<String>,
    // to get the information about this path element we need to select from the relevant table
    // and join with the previous table. We add a new join to this list of joins.
    joins: &mut Vec<sql::ast::LeftOuterJoinLateral>,
    // the table we are joining with, the current path element and its index.
    (last_table, (index, path_element)): (TableNameAndReference, (usize, &models::PathElement)),
) -> Result<TableNameAndReference, Error> {
    // examine the path elements' relationship.
    let relationship = env.lookup_relationship(&path_element.relationship)?;

    match relationship.relationship_type {
        models::RelationshipType::Array if aggregate_function_for_arrays.is_none() => Err(
            Error::NotSupported("order by an array relationship".to_string()),
        ),
        models::RelationshipType::Array => Ok(()),
        models::RelationshipType::Object => Ok(()),
    }?;

    let target_collection_alias =
        state.make_order_path_part_table_alias(&relationship.target_collection);

    let (table, from_clause) = from_for_path_element(
        env,
        state,
        relationship,
        &target_collection_alias,
        &path_element.arguments,
    )?;

    // find the required columns by peeking into the next path element.
    // if this is the last path element, then we select the column required by the order by.
    let select_cols = match path.get(index + 1) {
        Some(path_element) => {
            let relationship = env.lookup_relationship(&path_element.relationship)?;
            relationship
                .column_mapping
                .keys()
                .map(|source_col| {
                    let collection = env.lookup_collection(&table.name)?;
                    let selected_column = collection.lookup_column(source_col)?;
                    // we are going to deliberately use the table column name and not an alias we get from
                    // the query request because this is internal to the sorting mechanism.
                    let selected_column_alias =
                        sql::helpers::make_column_alias(selected_column.name.0.clone());
                    // we use the real name of the column as an alias as well.
                    Ok((
                        selected_column_alias.clone(),
                        sql::ast::Expression::ColumnReference(
                            sql::ast::ColumnReference::AliasedColumn {
                                table: table.reference.clone(),
                                column: selected_column_alias,
                            },
                        ),
                    ))
                })
                .collect::<Result<Vec<(sql::ast::ColumnAlias, sql::ast::Expression)>, Error>>()
        }
        None => {
            let target_collection = env.lookup_collection(&relationship.target_collection)?;
            let selected_column = target_collection.lookup_column(target_column_name)?;
            // we are going to deliberately use the table column name and not an alias we get from
            // the query request because this is internal to the sorting mechanism.
            let selected_column_alias =
                sql::helpers::make_column_alias(selected_column.name.0.clone());
            // we use the real name of the column as an alias as well.
            Ok(vec![(
                selected_column_alias.clone(),
                sql::ast::Expression::ColumnReference(sql::ast::ColumnReference::AliasedColumn {
                    table: table.reference.clone(),
                    column: selected_column_alias,
                }),
            )])
        }
    }?;

    // build a select query from this table where join condition and predicate.
    let select = select_for_path_element(
        env,
        state,
        &RootAndCurrentTables {
            root_table: root_and_current_tables.root_table.clone(),
            current_table: last_table,
        },
        relationship,
        &path_element.predicate,
        sql::ast::SelectList::SelectList(select_cols),
        (table.clone(), from_clause),
    )?;

    // build a join from it, and
    let join = sql::ast::LeftOuterJoinLateral {
        select: Box::new(select),
        alias: target_collection_alias,
    };

    // add the join to our pile'o'joins
    joins.push(join);

    // return the required columns for this table's join and the last table we found.
    Ok(table)
}

/// Create a from clause and a table reference from a path element's relationship.
fn from_for_path_element(
    env: &Env,
    state: &mut State,
    relationship: &models::Relationship,
    target_collection_alias: &sql::ast::TableAlias,
    arguments: &std::collections::BTreeMap<String, models::RelationshipArgument>,
) -> Result<(TableNameAndReference, sql::ast::From), Error> {
    let arguments =
        relationships::make_relationship_arguments(relationships::MakeRelationshipArguments {
            caller_arguments: arguments.clone(),
            relationship_arguments: relationship.arguments.clone(),
        })?;

    root::make_from_clause_and_reference(
        &relationship.target_collection,
        &arguments,
        env,
        state,
        Some(target_collection_alias.clone()),
    )
}

/// Build a 'SELECT' query for a `PathElement` using the relationship of the path element,
/// the predicate, the from clause and the select list.
fn select_for_path_element(
    env: &Env,
    state: &mut State,
    root_and_current_tables: &RootAndCurrentTables,
    relationship: &models::Relationship,
    predicate: &models::Expression,
    select_list: sql::ast::SelectList,
    (join_table, from_clause): (TableNameAndReference, sql::ast::From),
) -> Result<sql::ast::Select, Error> {
    // build a select query from this table where join condition.
    let mut select = sql::helpers::simple_select(vec![]);
    select.select_list = select_list;

    // generate a condition for the predicate.
    let predicate_tables = RootAndCurrentTables {
        root_table: root_and_current_tables.root_table.clone(),
        current_table: join_table,
    };
    let (predicate_expr, predicate_joins) =
        filtering::translate_expression(env, state, &predicate_tables, predicate)?;

    // generate a condition for this join.
    let join_condition = relationships::translate_column_mapping(
        env,
        &root_and_current_tables.current_table,
        &predicate_tables.current_table.reference,
        sql::helpers::empty_where(),
        relationship,
    )?;

    select.where_ = sql::ast::Where(sql::ast::Expression::And {
        left: Box::new(join_condition),
        right: Box::new(predicate_expr),
    });

    select.from = Some(from_clause);
    select.joins = predicate_joins;
    Ok(select)
}

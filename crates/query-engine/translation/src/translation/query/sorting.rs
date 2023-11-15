use multimap::MultiMap;
use std::collections::hash_map::DefaultHasher;
use std::hash::{Hash, Hasher};

use ndc_sdk::models;

use super::error::Error;
use super::filtering;
use super::helpers::{CollectionInfo, Env, RootAndCurrentTables, State, TableNameAndReference};
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
            let element_groups = group_elements(elements);
            let order_by_parts = element_groups
                .iter()
                .map(|element_group| {
                    translate_order_by_target(
                        env,
                        state,
                        root_and_current_tables,
                        element_group,
                        &mut joins,
                    )
                })
                .collect::<Result<Vec<Vec<(usize, sql::ast::OrderByElement)>>, Error>>()?;
            let mut order_by_parts = order_by_parts.into_iter().flatten().collect::<Vec<_>>();
            order_by_parts.sort_by_key(|(index, _)| *index);

            Ok((
                sql::ast::OrderBy {
                    elements: order_by_parts
                        .into_iter()
                        .map(|(_, order_by_element)| order_by_element)
                        .collect(),
                },
                joins,
            ))
        }
    }
}

#[derive(Debug)]
enum OrderByElementGroup {
    Columns {
        path: Vec<models::PathElement>,
        columns: Vec<GroupedOrderByElement<Column>>,
    },
    Aggregates {
        path: Vec<models::PathElement>,
        aggregates: Vec<GroupedOrderByElement<Aggregate>>,
    },
}
#[derive(Debug)]
struct GroupedOrderByElement<T> {
    index: usize,
    direction: models::OrderDirection,
    element: T,
}
#[derive(Debug)]
struct Column(String);
#[derive(Debug)]
enum Aggregate {
    CountStarAggregate,
    SingleColumnAggregate { column: String, function: String },
}

impl OrderByElementGroup {
    fn path(&self) -> &Vec<models::PathElement> {
        match &self {
            Self::Columns { path, .. } => path,
            Self::Aggregates { path, .. } => path,
        }
    }
}

fn group_elements(elements: &[models::OrderByElement]) -> Vec<OrderByElementGroup> {
    // We need to jump through some hoops to group path elements because serde_json::Value
    // does not have Ord or Hash instances.
    let mut column_element_groups: MultiMap<
        u64,
        (
            usize,
            Vec<models::PathElement>,
            models::OrderDirection,
            Column,
        ),
    > = MultiMap::new();

    let mut aggregate_element_groups: MultiMap<
        u64,
        (
            usize,
            Vec<models::PathElement>,
            models::OrderDirection,
            Aggregate,
        ),
    > = MultiMap::new();

    for (i, element) in elements.iter().enumerate() {
        match &element.target {
            models::OrderByTarget::Column { path, name } => {
                let mut s = DefaultHasher::new();
                format!("{:?}", path).hash(&mut s);
                let hash = s.finish();
                column_element_groups.insert(
                    hash,
                    (
                        i,
                        path.clone(),
                        element.order_direction,
                        Column(name.to_string()),
                    ),
                )
            }
            models::OrderByTarget::StarCountAggregate { path, .. } => {
                let mut s = DefaultHasher::new();
                format!("{:?}", path).hash(&mut s);
                let hash = s.finish();
                aggregate_element_groups.insert(
                    hash,
                    (
                        i,
                        path.clone(),
                        element.order_direction,
                        Aggregate::CountStarAggregate,
                    ),
                )
            }
            models::OrderByTarget::SingleColumnAggregate {
                path,
                column,
                function,
            } => {
                let mut s = DefaultHasher::new();
                format!("{:?}", path).hash(&mut s);
                let hash = s.finish();
                aggregate_element_groups.insert(
                    hash,
                    (
                        i,
                        path.clone(),
                        element.order_direction,
                        Aggregate::SingleColumnAggregate {
                            column: column.to_string(),
                            function: function.to_string(),
                        },
                    ),
                )
            }
        }
    }

    let mut element_vecs = vec![];
    for (_, vec) in column_element_groups {
        element_vecs.push(OrderByElementGroup::Columns {
            path: vec.get(0).unwrap().1.clone(),
            columns: vec
                .into_iter()
                .map(|(index, _, direction, column)| GroupedOrderByElement {
                    index,
                    direction,
                    element: column,
                })
                .collect::<Vec<_>>(),
        });
    }
    for (_, vec) in aggregate_element_groups {
        element_vecs.push(OrderByElementGroup::Aggregates {
            path: vec.get(0).unwrap().1.clone(),
            aggregates: vec
                .into_iter()
                .map(|(index, _, direction, aggregate)| GroupedOrderByElement {
                    index,
                    direction,
                    element: aggregate,
                })
                .collect::<Vec<_>>(),
        });
    }

    element_vecs
}

/// Translate an order by target and add additional JOINs to the wrapping SELECT
/// and return the expression used for the sort by the wrapping SELECT.
fn translate_order_by_target(
    env: &Env,
    state: &mut State,
    root_and_current_tables: &RootAndCurrentTables,
    element_group: &OrderByElementGroup,
    joins: &mut Vec<sql::ast::Join>,
) -> Result<Vec<(usize, sql::ast::OrderByElement)>, Error> {
    let column_or_relationship_select = build_select_and_joins_for_order_by_group(
        env,
        state,
        root_and_current_tables,
        element_group,
    )?;

    match column_or_relationship_select {
        // The column is from the source table, we just need to query it directly.
        ColumnsOrSelect::Columns(columns) => Ok(columns
            .into_iter()
            .map(|(i, direction, column_name)| {
                (
                    i,
                    sql::ast::OrderByElement {
                        target: sql::ast::Expression::ColumnReference(column_name.clone()),
                        direction: match direction {
                            models::OrderDirection::Asc => sql::ast::OrderByDirection::Asc,
                            models::OrderDirection::Desc => sql::ast::OrderByDirection::Desc,
                        },
                    },
                )
            })
            .collect()),

        // The column is from a relationship table, we need to join with this select query.
        ColumnsOrSelect::Select { columns, select } => {
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
            let columns = columns
                .into_iter()
                .map(|(i, direction, column)| {
                    (
                        i,
                        sql::ast::OrderByElement {
                            target: sql::ast::Expression::ColumnReference(
                                sql::ast::ColumnReference::AliasedColumn {
                                    table: sql::ast::TableReference::AliasedTable(
                                        table_alias.clone(),
                                    ),
                                    column: column.clone(),
                                },
                            ),
                            direction: match direction {
                                models::OrderDirection::Asc => sql::ast::OrderByDirection::Asc,
                                models::OrderDirection::Desc => sql::ast::OrderByDirection::Desc,
                            },
                        },
                    )
                })
                .collect();

            Ok(columns)
        }
    }
}

/// Used as the return type of `translate_order_by_target_for_column`.
enum ColumnsOrSelect {
    /// Column represents a target column that is reference from the outer select.
    Columns(Vec<(usize, models::OrderDirection, sql::ast::ColumnReference)>),
    /// Select represents a select query which contain the requested column.
    Select {
        columns: Vec<(usize, models::OrderDirection, sql::ast::ColumnAlias)>,
        select: sql::ast::Select,
    },
}

/// Generate a SELECT query representing querying the requested column from a table
/// (potentially a nested one using joins). The requested column if the path is empty,
/// or a select query describing how to reach the column.
fn build_select_and_joins_for_order_by_group(
    env: &Env,
    state: &mut State,
    root_and_current_tables: &RootAndCurrentTables,
    element_group: &OrderByElementGroup,
) -> Result<ColumnsOrSelect, Error> {
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

    let path = element_group.path();

    if path.is_empty() {
        // if there were no relationship columns, we don't need to build a query, just return the column.
        let table = env.lookup_collection(&root_and_current_tables.current_table.name)?;
        let columns =
            translate_targets(table, &root_and_current_tables.current_table, element_group)?
                .into_iter()
                .map(|column| {
                    (
                        column.index,
                        column.direction,
                        sql::ast::ColumnReference::AliasedColumn {
                            table: root_and_current_tables.current_table.reference.clone(),
                            column: column.alias,
                        },
                    )
                })
                .collect();
        Ok(ColumnsOrSelect::Columns(columns))
    }
    // If there was a relationship column, build a wrapping select query selecting the wanted column
    // for the order by, and build a select of all the joins to select from.
    else {
        // Loop through relationships,
        // building up new joins and replacing the selected column for the order by.
        // for each step in the loop we peek at the required columns (used as keys in the join),
        // from the next join, we need to select these.
        let (last_table, cols) = path.iter().enumerate().try_fold(
            (
                root_and_current_tables.current_table.clone(),
                PathElementSelectColumns::RelationshipColumns(vec![]),
            ),
            |(last_table, _), (index, path_element)| {
                process_path_element_for_order_by_targets(
                    (env, state),
                    root_and_current_tables,
                    element_group,
                    &mut joins,
                    (last_table, (index, path_element)),
                )
            },
        )?;

        match cols {
            PathElementSelectColumns::RelationshipColumns(_) => Err(Error::InternalError(
                "Unexpected sorting traversal ended with relationship columns".to_string(),
            )),
            PathElementSelectColumns::OrderBySelectExpressions(exprs) => {
                let mut select = sql::helpers::simple_select(
                    exprs
                        .iter()
                        .map(|column| {
                            (
                                column.alias.clone(),
                                sql::ast::Expression::ColumnReference(
                                    sql::ast::ColumnReference::AliasedColumn {
                                        table: last_table.reference.clone(),
                                        column: column.alias.clone(),
                                    },
                                ),
                            )
                        })
                        .collect(),
                );

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
                Ok(ColumnsOrSelect::Select {
                    columns: exprs
                        .into_iter()
                        .map(|column| (column.index, column.direction, column.alias))
                        .collect(),
                    select,
                })
            }
        }
    }
}

enum PathElementSelectColumns {
    /// Columns selected from an intermediate path table.
    RelationshipColumns(Vec<OrderByRelationshipColumn>),
    /// Expressions selected from the target order by table.
    OrderBySelectExpressions(Vec<OrderBySelectExpression>),
}
impl PathElementSelectColumns {
    fn aliases_and_expressions(&self) -> Vec<(sql::ast::ColumnAlias, sql::ast::Expression)> {
        match self {
            PathElementSelectColumns::RelationshipColumns(vec) => vec
                .iter()
                .map(|column| (column.alias.clone(), column.expression.clone()))
                .collect(),
            PathElementSelectColumns::OrderBySelectExpressions(vec) => vec
                .iter()
                .map(|column| (column.alias.clone(), column.expression.clone()))
                .collect(),
        }
    }
}
/// Expressions selected from the target order by table.
struct OrderBySelectExpression {
    index: usize,
    direction: models::OrderDirection,
    alias: sql::ast::ColumnAlias,
    expression: sql::ast::Expression,
}
struct OrderByRelationshipColumn {
    alias: sql::ast::ColumnAlias,
    expression: sql::ast::Expression,
}

/// This function is used when looping through relationships,
/// building up new joins and replacing the selected columns for the order by.
/// for each step in the loop we peek at the required columns (used as keys in the join),
/// from the next join, we need to select these.
fn process_path_element_for_order_by_targets(
    (env, state): (&Env, &mut State),
    root_and_current_tables: &RootAndCurrentTables,
    element_group: &OrderByElementGroup,
    // to get the information about this path element we need to select from the relevant table
    // and join with the previous table. We add a new join to this list of joins.
    joins: &mut Vec<sql::ast::LeftOuterJoinLateral>,
    // the table we are joining with, the current path element and its index.
    (last_table, (index, path_element)): (TableNameAndReference, (usize, &models::PathElement)),
) -> Result<(TableNameAndReference, PathElementSelectColumns), Error> {
    // examine the path elements' relationship.
    let relationship = env.lookup_relationship(&path_element.relationship)?;

    //match relationship.relationship_type {
    //    models::RelationshipType::Array if aggregate_function_for_arrays.is_none() => Err(
    //        Error::NotSupported("order by an array relationship".to_string()),
    //    ),
    //    models::RelationshipType::Array => Ok(()),
    //    models::RelationshipType::Object => Ok(()),
    //}?;

    let target_collection_alias =
        state.make_order_path_part_table_alias(&relationship.target_collection);

    let (table, from_clause) = from_for_path_element(
        env,
        state,
        relationship,
        &target_collection_alias,
        &path_element.arguments,
    )?;

    let path = element_group.path();

    // find the required columns by peeking into the next path element.
    // if this is the last path element, then we select the column required by the order by.
    let select_cols = match path.get(index + 1) {
        Some(path_element) => {
            let relationship = env.lookup_relationship(&path_element.relationship)?;
            let columns = relationship
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
                    Ok(OrderByRelationshipColumn {
                        alias: selected_column_alias.clone(),
                        expression: sql::ast::Expression::ColumnReference(
                            sql::ast::ColumnReference::AliasedColumn {
                                table: table.reference.clone(),
                                column: selected_column_alias,
                            },
                        ),
                    })
                })
                .collect::<Result<Vec<OrderByRelationshipColumn>, Error>>()?;
            Ok(PathElementSelectColumns::RelationshipColumns(columns))
        }
        None => {
            let target_collection = env.lookup_collection(&relationship.target_collection)?;
            Ok(PathElementSelectColumns::OrderBySelectExpressions(
                translate_targets(target_collection, &table, element_group)?,
            ))
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
        sql::ast::SelectList::SelectList(select_cols.aliases_and_expressions()),
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
    Ok((table, select_cols))
}

fn translate_targets(
    target_collection: CollectionInfo,
    table: &TableNameAndReference,
    element_group: &OrderByElementGroup,
) -> Result<Vec<OrderBySelectExpression>, Error> {
    match element_group {
        OrderByElementGroup::Columns { columns, .. } => {
            let columns = columns
                .iter()
                .map(|element| {
                    let Column(target_column_name) = &element.element;
                    let selected_column = target_collection.lookup_column(target_column_name)?;
                    // we are going to deliberately use the table column name and not an alias we get from
                    // the query request because this is internal to the sorting mechanism.
                    let selected_column_alias =
                        sql::helpers::make_column_alias(selected_column.name.0.clone());
                    // we use the real name of the column as an alias as well.
                    Ok::<OrderBySelectExpression, Error>(OrderBySelectExpression {
                        index: element.index,
                        direction: element.direction,
                        alias: selected_column_alias.clone(),
                        expression: sql::ast::Expression::ColumnReference(
                            sql::ast::ColumnReference::AliasedColumn {
                                table: table.reference.clone(),
                                column: selected_column_alias,
                            },
                        ),
                    })
                })
                .collect::<Result<Vec<_>, Error>>()?;

            Ok(columns)
        }
        OrderByElementGroup::Aggregates { aggregates, .. } => {
            let aggregates = aggregates
                .iter()
                .map(|element| {
                    match &element.element {
                        Aggregate::CountStarAggregate => {
                            let column_alias = sql::helpers::make_column_alias("count".to_string());
                            Ok(OrderBySelectExpression {
                                index: element.index,
                                direction: element.direction,
                                alias: column_alias.clone(),
                                expression: sql::ast::Expression::Count(sql::ast::CountType::Star),
                            })
                        }
                        Aggregate::SingleColumnAggregate { column, function } => {
                            let selected_column = target_collection.lookup_column(column)?;
                            // we are going to deliberately use the table column name and not an alias we get from
                            // the query request because this is internal to the sorting mechanism.
                            let selected_column_alias =
                                sql::helpers::make_column_alias(selected_column.name.0.clone());
                            // we use the real name of the column as an alias as well.
                            Ok(OrderBySelectExpression {
                                index: element.index,
                                direction: element.direction,
                                alias: selected_column_alias.clone(),
                                expression: sql::ast::Expression::FunctionCall {
                                    function: sql::ast::Function::Unknown(function.clone()),
                                    args: vec![sql::ast::Expression::ColumnReference(
                                        sql::ast::ColumnReference::AliasedColumn {
                                            table: table.reference.clone(),
                                            column: selected_column_alias,
                                        },
                                    )],
                                },
                            })
                        }
                    }
                })
                .collect::<Result<Vec<_>, Error>>()?;

            Ok(aggregates)
        }
    }
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

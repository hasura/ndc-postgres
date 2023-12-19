//! Translate Order By clauses.
use multimap::MultiMap;
use std::collections::hash_map::DefaultHasher;
use std::hash::{Hash, Hasher};

use ndc_sdk::models;

use super::filtering;
use super::relationships;
use super::root;
use crate::translation::error::Error;
use crate::translation::helpers::{
    CollectionInfo, Env, RootAndCurrentTables, State, TableNameAndReference,
};
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
    // skip if there's no order by clause.
    match order_by {
        None => Ok((sql::ast::OrderBy { elements: vec![] }, vec![])),
        Some(models::OrderBy { elements }) => {
            // Group order by elements by their paths, and translate each group
            // to result order by columns (and their indices in the order by list) and joins
            // containing selecting these columns from the relevant paths.
            let element_groups = group_elements(elements);
            let order_by_parts = element_groups
                .iter()
                .map(|element_group| {
                    translate_order_by_target_group(
                        env,
                        state,
                        root_and_current_tables,
                        element_group,
                        &mut joins,
                    )
                })
                .collect::<Result<Vec<Vec<(usize, sql::ast::OrderByElement)>>, Error>>()?;
            // flatten the result columns and sort by their indices in the order by list.
            let mut order_by_columns = order_by_parts.into_iter().flatten().collect::<Vec<_>>();
            order_by_columns.sort_by_key(|(index, _)| *index);

            // Discard the indices, construct an order by clause, and accompanied joins.
            Ok((
                sql::ast::OrderBy {
                    elements: order_by_columns
                        .into_iter()
                        .map(|(_, order_by_element)| order_by_element)
                        .collect(),
                },
                joins,
            ))
        }
    }
}

/// Group columns or aggregates with the same path element.
/// Columns and aggregates need to be separated because they return
/// different amount on rows.
#[derive(Debug)]
enum OrderByElementGroup<'a> {
    Columns {
        path: &'a [models::PathElement],
        columns: Vec<GroupedOrderByElement<Column>>,
    },
    Aggregates {
        path: &'a [models::PathElement],
        aggregates: Vec<GroupedOrderByElement<Aggregate>>,
    },
}

/// A column or aggregate element with their index in the order by list
/// and their order by direction.
#[derive(Debug)]
struct GroupedOrderByElement<T> {
    index: usize,
    direction: models::OrderDirection,
    element: T,
}

/// A column to select from a table used in an order by.
#[derive(Debug)]
struct Column(String);

/// An aggregate operation to select from a table used in an order by.
#[derive(Debug)]
enum Aggregate {
    CountStarAggregate,
    SingleColumnAggregate { column: String, function: String },
}

impl OrderByElementGroup<'_> {
    /// Extract the path component of a group.
    fn path(&self) -> &[models::PathElement] {
        match &self {
            Self::Columns { path, .. } => path,
            Self::Aggregates { path, .. } => path,
        }
    }
}

/// Group order by elements with the same path. Separate columns and aggregates
/// because they each return different amount of rows.
fn group_elements(elements: &[models::OrderByElement]) -> Vec<OrderByElementGroup> {
    // We need to jump through some hoops to group path elements because serde_json::Value
    // does not have Ord or Hash instances. So we use u64 as a key derived from hashing the
    // string representation of a path.
    let hash_path = |path: &[models::PathElement]| {
        let mut s = DefaultHasher::new();
        format!("{:?}", path).hash(&mut s);
        s.finish()
    };

    let mut column_element_groups: MultiMap<
        u64, // path hash
        (
            usize,                  // index
            &[models::PathElement], // path
            models::OrderDirection, // order by direction
            Column,                 // column
        ),
    > = MultiMap::new();

    let mut aggregate_element_groups: MultiMap<
        u64, // path hash
        (
            usize,                  // index
            &[models::PathElement], // path
            models::OrderDirection, // order by direction
            Aggregate,              // column
        ),
    > = MultiMap::new();

    // for each element, insert them to their respective group according to their kind and path.
    for (i, element) in elements.iter().enumerate() {
        match &element.target {
            models::OrderByTarget::Column { path, name } => column_element_groups.insert(
                hash_path(path),
                (i, path, element.order_direction, Column(name.to_string())),
            ),
            models::OrderByTarget::StarCountAggregate { path, .. } => aggregate_element_groups
                .insert(
                    hash_path(path),
                    (
                        i,
                        path,
                        element.order_direction,
                        Aggregate::CountStarAggregate,
                    ),
                ),
            models::OrderByTarget::SingleColumnAggregate {
                path,
                column,
                function,
            } => aggregate_element_groups.insert(
                hash_path(path),
                (
                    i,
                    path,
                    element.order_direction,
                    Aggregate::SingleColumnAggregate {
                        column: column.to_string(),
                        function: function.to_string(),
                    },
                ),
            ),
        }
    }

    // Ignore the hash that was only used to group the paths and construct an OrderByElementGroup.
    let mut element_vecs = vec![];
    for (_, vec) in column_element_groups {
        element_vecs.push(OrderByElementGroup::Columns {
            // if it's here, there's at least one.
            path: vec.get(0).unwrap().1,
            columns: vec
                .into_iter()
                .map(|(index, _, direction, element)| GroupedOrderByElement {
                    index,
                    direction,
                    element,
                })
                .collect::<Vec<_>>(),
        });
    }
    // Ignore the hash that was only used to group the paths and construct an OrderByElementGroup.
    for (_, vec) in aggregate_element_groups {
        element_vecs.push(OrderByElementGroup::Aggregates {
            // if it's here, there's at least one.
            path: vec.get(0).unwrap().1,
            aggregates: vec
                .into_iter()
                .map(|(index, _, direction, element)| GroupedOrderByElement {
                    index,
                    direction,
                    element,
                })
                .collect::<Vec<_>>(),
        });
    }

    element_vecs
}

/// Translate an order by group and add additional JOINs to the wrapping SELECT
/// and return the order by elements which capture the references to the expressions
/// used for the sort by the wrapping SELECTs, together with their place in the order by list.
fn translate_order_by_target_group(
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

/// Used as the return type of `build_select_and_joins_for_order_by_group`.
/// Represents the direct references to the requested columns (if path is empty),
/// or a select query describing how to reach the columns.
enum ColumnsOrSelect {
    /// Columns represents target columns that are referenced from the current table.
    Columns(Vec<(usize, models::OrderDirection, sql::ast::ColumnReference)>),
    /// Select represents a select query which contain the requested columns.
    Select {
        columns: Vec<(usize, models::OrderDirection, sql::ast::ColumnAlias)>,
        select: sql::ast::Select,
    },
}

/// Generate a SELECT query representing querying the requested columns/aggregates from a table
/// (potentially a nested one using joins).
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
        match element_group {
            OrderByElementGroup::Aggregates { .. } => {
                // Cannot do an aggregation over an empty path. Must be a relationship.
                Err(Error::EmptyPathForOrderByAggregate)
            }
            OrderByElementGroup::Columns { .. } => {
                // If the path is empty, we don't need to build a query, just return the columns.
                let table = env.lookup_collection(&root_and_current_tables.current_table.name)?;
                let columns = translate_targets(
                    table,
                    &root_and_current_tables.current_table,
                    element_group,
                )?
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
        }
    }
    // If we query a relationship, build a wrapping select query selecting the requested columns/aggregates
    // for the order by, and build a select of all the joins to select from.
    else {
        // Loop through relationships,
        // building up new joins and replacing the requested columns for the order by.
        // for each step in the loop we peek at the required columns (used as keys in the join)
        // from the next join, we need to select these.
        let (last_table, cols) = path.iter().enumerate().try_fold(
            (
                root_and_current_tables.current_table.clone(),
                // this is a dummy value that will be ignored, since we only care about returning
                // the columns from the last table.
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
                // We've made an error. The last table should return the order by select expressions.
                "Unexpected sorting traversal ended with relationship columns".to_string(),
            )),
            PathElementSelectColumns::OrderBySelectExpressions(exprs) => {
                // We grab the reference and alias part of the order by select expressions
                // to build the inner select, and apply the aggregates if needed.
                let mut select = sql::helpers::simple_select(
                    exprs
                        .iter()
                        .map(|select_expr| {
                            (select_expr.alias.clone(), {
                                let column = sql::ast::Expression::ColumnReference(
                                    sql::ast::ColumnReference::AliasedColumn {
                                        table: last_table.reference.clone(),
                                        column: select_expr.alias.clone(),
                                    },
                                );

                                // apply an aggregate function if needed.
                                match &select_expr.aggregate {
                                    None => column,
                                    Some(function) => sql::ast::Expression::FunctionCall {
                                        function: function.clone(),
                                        args: vec![column],
                                    },
                                }
                            })
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

                // and return the requested column aliases and the inner select.
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

/// Used in 'process_path_element_for_order_by_targets' to create select lists for intermediate tables
/// in the join process and the last table, while keeping additional required information about the
/// columns in the last table.
enum PathElementSelectColumns {
    /// Columns selected from an intermediate path table.
    RelationshipColumns(Vec<OrderByRelationshipColumn>),
    /// Expressions selected from the target order by table.
    OrderBySelectExpressions(Vec<OrderBySelectExpression>),
}
impl PathElementSelectColumns {
    /// Extract the parts to be used when selecting these expressions from their table.
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
/// An expression selected from the target order by table.
struct OrderBySelectExpression {
    index: usize,
    direction: models::OrderDirection,
    alias: sql::ast::ColumnAlias,
    expression: sql::ast::Expression,
    aggregate: Option<sql::ast::Function>,
}
/// An expression selected from an intermediate relationship table.
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

    let target_collection_alias =
        state.make_order_path_part_table_alias(&relationship.target_collection);

    let (table, from_clause) = from_clause_for_path_element(
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
            // check that the group we are about to sort by is not a group of columns
            // where the relationship is an array relationship.
            // Because it means trying sorting by multiple rows?
            match element_group {
                OrderByElementGroup::Columns { .. } => match relationship.relationship_type {
                    models::RelationshipType::Array => {
                        Err(Error::MissingAggregateForArrayRelationOrdering)
                    }
                    models::RelationshipType::Object => Ok(()),
                },
                OrderByElementGroup::Aggregates { .. } => Ok(()),
            }?;

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

/// Take an element group and convert all of the elements we want to select
/// to aliases and expressions, along with their order by direction and their index
/// in the order by list.
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
                        aggregate: None,
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
                                expression: sql::ast::Expression::Value(sql::ast::Value::Int8(1)),
                                aggregate: Some(sql::ast::function_count()),
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
                                expression: sql::ast::Expression::ColumnReference(
                                    sql::ast::ColumnReference::AliasedColumn {
                                        table: table.reference.clone(),
                                        column: selected_column_alias,
                                    },
                                ),
                                aggregate: Some(sql::ast::Function {
                                    function_name: function.clone(),
                                    is_infix: false,
                                }),
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
fn from_clause_for_path_element(
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

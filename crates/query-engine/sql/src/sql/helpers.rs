//! Helpers for building sql::ast types in certain shapes and patterns.

use std::collections::BTreeMap;

use super::ast::*;
use super::string;

/// Used as input to helpers to construct SELECTs which return 'rows' and/or 'aggregates' results.
pub enum SelectSet {
    Rows(Select),
    Aggregates(Select),
    RowsAndAggregates(Select, Select),
}

// Empty clauses //

/// An empty `WITH` clause.
pub fn empty_with() -> With {
    With {
        common_table_expressions: vec![],
    }
}

/// Add a `WITH` clause to a select.
pub fn wrap_with(with: With, mut select: Select) -> Select {
    select.with = with;
    select
}

/// An empty `WHERE` clause.
pub fn empty_where() -> Expression {
    Expression::Value(Value::Bool(true))
}

/// An empty `GROUP BY` clause.
pub fn empty_group_by() -> GroupBy {
    GroupBy {}
}

/// An empty `ORDER BY` clause.
pub fn empty_order_by() -> OrderBy {
    OrderBy { elements: vec![] }
}

/// Empty `LIMIT` and `OFFSET` clauses.
pub fn empty_limit() -> Limit {
    Limit {
        limit: None,
        offset: None,
    }
}

/// A `true` expression.
pub fn true_expr() -> Expression {
    Expression::Value(Value::Bool(true))
}

/// A `false` expression.
pub fn false_expr() -> Expression {
    Expression::Value(Value::Bool(false))
}

// Aliasing //

/// Generate a column expression refering to a specific table.
pub fn make_column(
    table: TableReference,
    name: ColumnName,
    alias: ColumnAlias,
) -> (ColumnAlias, Expression) {
    (
        alias,
        Expression::ColumnReference(ColumnReference::TableColumn { table, name }),
    )
}
/// Create column aliases using this function so we build everything in one place.
pub fn make_column_alias(name: String) -> ColumnAlias {
    ColumnAlias { name }
}

// SELECTs //

/// Build a simple select with a select list and the rest are empty.
pub fn simple_select(select_list: Vec<(ColumnAlias, Expression)>) -> Select {
    Select {
        with: empty_with(),
        select_list: SelectList::SelectList(select_list),
        from: None,
        joins: vec![],
        where_: Where(empty_where()),
        group_by: empty_group_by(),
        order_by: empty_order_by(),
        limit: empty_limit(),
    }
}

/// Build a simple select *
pub fn star_select(from: From) -> Select {
    Select {
        with: empty_with(),
        select_list: SelectList::SelectStar,
        from: Some(from),
        joins: vec![],
        where_: Where(empty_where()),
        group_by: empty_group_by(),
        order_by: empty_order_by(),
        limit: empty_limit(),
    }
}

/// Do we want to aggregate results or return a single row?
pub enum ResultsKind {
    AggregateResults,
    ObjectResults,
}

/// given a set of rows and aggregate queries, combine them into one Select.
///
/// ```sql
/// SELECT row_to_json(<output_table_alias>) AS <output_column_alias>
/// FROM (
///   WITH <with>
///   SELECT *
///     FROM (
///       SELECT coalesce(json_agg(row_to_json(<row_table_alias>)), '[]') AS <row_column_alias>
///         FROM (<row_select>) AS <row_table_alias>
///     ) AS <row_column_alias>
///     CROSS JOIN (
///       SELECT coalesce(row_to_json(<aggregate_table_alias>), '[]') AS <aggregate_column_alias>
///       FROM (<aggregate_select>) AS <aggregate_table_alias>
///     ) AS <aggregate_table_alias>
/// ) AS <output_table_alias>
/// ```
///
/// The `row_select` and `aggregate_set` will not be included if they are not relevant
pub fn select_rowset_without_variables(
    return_results: ResultsKind,
    (output_table_alias, output_column_alias): (TableAlias, ColumnAlias),
    (row_table_alias, row_column_alias): (TableAlias, ColumnAlias),
    (aggregate_table_alias, aggregate_column_alias): (TableAlias, ColumnAlias),
    select_set: SelectSet,
) -> Select {
    let row = vec![(output_column_alias, {
        let output =
            Expression::RowToJson(TableReference::AliasedTable(output_table_alias.clone()));
        match return_results {
            ResultsKind::AggregateResults => wrap_in_json_agg(output),
            ResultsKind::ObjectResults => output,
        }
    })];

    let mut final_select = simple_select(row);

    let wrap_row =
        |row_sel| select_rows_as_json(row_sel, row_column_alias, row_table_alias.clone());

    let wrap_aggregate = |aggregate_sel| {
        select_row_as_json_with_default(
            aggregate_sel,
            aggregate_column_alias,
            aggregate_table_alias.clone(),
        )
    };

    match select_set {
        SelectSet::Rows(row_select) => {
            let select_star = star_select(From::Select {
                alias: row_table_alias.clone(),
                select: Box::new(wrap_row(row_select)),
            });
            final_select.from = Some(From::Select {
                alias: output_table_alias,
                select: Box::new(select_star),
            })
        }
        SelectSet::Aggregates(aggregate_select) => {
            let select_star = star_select(From::Select {
                alias: aggregate_table_alias.clone(),
                select: Box::new(wrap_aggregate(aggregate_select)),
            });
            final_select.from = Some(From::Select {
                alias: output_table_alias,
                select: Box::new(select_star),
            })
        }
        SelectSet::RowsAndAggregates(row_select, aggregate_select) => {
            let mut select_star = star_select(From::Select {
                alias: row_table_alias.clone(),
                select: Box::new(wrap_row(row_select)),
            });

            select_star.joins = vec![Join::CrossJoin(CrossJoin {
                select: Box::new(wrap_aggregate(aggregate_select)),
                alias: aggregate_table_alias.clone(),
            })];

            final_select.from = Some(From::Select {
                alias: output_table_alias,
                select: Box::new(select_star),
            })
        }
    }
    final_select
}

/// Given a set of rows, a set of aggregate queries and a variables from clause & table reference,
/// combine them into one Select.
pub fn select_rowset(
    output_table: (TableAlias, ColumnAlias),
    row_table: (TableAlias, ColumnAlias),
    aggregate_table: (TableAlias, ColumnAlias),
    variables: Option<(From, TableReference)>,
    output_agg_table_alias: TableAlias,
    with: With,
    select_set: SelectSet,
) -> Select {
    match variables {
        None => wrap_with(
            with,
            select_rowset_without_variables(
                ResultsKind::AggregateResults,
                output_table,
                row_table,
                aggregate_table,
                select_set,
            ),
        ),
        Some(variables) => select_rowset_with_variables(
            with,
            output_table,
            row_table,
            aggregate_table,
            variables,
            output_agg_table_alias,
            select_set,
        ),
    }
}

/// Given a set of rows, a set of aggregate queries and a variables from clause & table reference,
/// combine them into one Select.
///
/// ```sql
/// SELECT coalesce(json_agg(<output_agg_table_alias>.<output_column_alias>), '[]') AS <output_column_alias>
/// FROM
///   ( SELECT row_to_json(<output_table_alias>) AS <output_column_alias>
///     FROM
///       <variables_table>
///     CROSS JOIN LATERAL
///       (
///         WITH <with>
///         SELECT
///           *
///         FROM
///           (
///             SELECT
///               coalesce(json_agg(row_to_json(<row_table_alias>)), '[]') AS <row_column_alias>
///             FROM (<row_select>) AS <row_table_alias>
///           ) AS <row_table_alias>
///         CROSS JOIN
///           (
///             SELECT
///               coalesce(row_to_json(<aggregate_table_alias>), '[]') AS <aggregate_column_alias>
///             FROM (<aggregate_select>) AS <aggregate_table_alias>
///           ) AS <aggregate_table_alias>
///       ) AS <output_table_alias>
///       ORDER BY <variables_table_reference>."%variable_order"
///     ) AS <output_agg_table_alias>
/// ```
///
/// The `row_select` and `aggregate_set` will not be included if they are not relevant.
///
/// Note that we separate the `json_agg` and `row_to_json` to different selects so we can order
/// the json rows by the variable order before aggregating them.
pub fn select_rowset_with_variables(
    with: With,
    (output_table_alias, output_column_alias): (TableAlias, ColumnAlias),
    (row_table_alias, row_column_alias): (TableAlias, ColumnAlias),
    (aggregate_table_alias, aggregate_column_alias): (TableAlias, ColumnAlias),
    (variables_table, variables_table_reference): (From, TableReference),
    output_agg_table_alias: TableAlias,
    select_set: SelectSet,
) -> Select {
    let row = vec![(
        output_column_alias.clone(),
        Expression::RowToJson(TableReference::AliasedTable(output_table_alias.clone())),
    )];

    let mut final_select = simple_select(row);

    let wrap_row =
        |row_sel| select_rows_as_json(row_sel, row_column_alias, row_table_alias.clone());

    let wrap_aggregate = |aggregate_sel| {
        select_row_as_json_with_default(
            aggregate_sel,
            aggregate_column_alias,
            aggregate_table_alias.clone(),
        )
    };

    let order_by = OrderBy {
        elements: vec![OrderByElement {
            target: Expression::ColumnReference(ColumnReference::AliasedColumn {
                table: variables_table_reference,
                column: make_column_alias(VARIABLE_ORDER_FIELD.to_string()),
            }),
            direction: OrderByDirection::Asc,
        }],
    };

    final_select.from = Some(variables_table);

    match select_set {
        SelectSet::Rows(row_select) => {
            let mut select_star = star_select(From::Select {
                alias: row_table_alias.clone(),
                select: Box::new(wrap_row(row_select)),
            });

            select_star.with = with;

            final_select.joins = vec![Join::CrossJoinLateral(CrossJoin {
                select: Box::new(select_star),
                alias: output_table_alias,
            })];
        }
        SelectSet::Aggregates(aggregate_select) => {
            let mut select_star = star_select(From::Select {
                alias: aggregate_table_alias.clone(),
                select: Box::new(wrap_aggregate(aggregate_select)),
            });

            select_star.with = with;

            final_select.joins = vec![Join::CrossJoinLateral(CrossJoin {
                select: Box::new(select_star),
                alias: output_table_alias,
            })];
        }
        SelectSet::RowsAndAggregates(row_select, aggregate_select) => {
            let mut select_star = star_select(From::Select {
                alias: row_table_alias.clone(),
                select: Box::new(wrap_row(row_select)),
            });

            select_star.with = with;

            final_select.joins = vec![
                Join::CrossJoinLateral(CrossJoin {
                    select: Box::new(select_star),
                    alias: output_table_alias,
                }),
                Join::CrossJoin(CrossJoin {
                    select: Box::new(wrap_aggregate(aggregate_select)),
                    alias: aggregate_table_alias.clone(),
                }),
            ];
        }
    }

    final_select.order_by = order_by;

    let output_agg_row = vec![(
        output_column_alias.clone(),
        wrap_in_json_agg(Expression::ColumnReference(
            ColumnReference::AliasedColumn {
                table: TableReference::AliasedTable(output_agg_table_alias.clone()),
                column: output_column_alias,
            },
        )),
    )];

    let output_from = From::Select {
        alias: output_agg_table_alias.clone(),
        select: Box::new(final_select),
    };

    let mut final_select = simple_select(output_agg_row);
    final_select.from = Some(output_from);

    final_select
}

/// Given a set of rows and aggregate queries, combine them into one Select.
///
/// ```sql
/// SELECT row_to_json(<output_table_alias>) AS <output_column_alias>
/// FROM (
///   SELECT *
///     FROM (
///       SELECT coalesce(json_agg(row_to_json(<row_table_alias>)), '[]') AS <row_column_alias>
///         FROM (<row_select>) AS <row_table_alias>
///     ) AS <row_column_alias>
///     CROSS JOIN (
///       <aggregate_select>
///     ) AS <aggregate_table_alias>
/// ) AS <output_table_alias>
/// ```
pub fn select_mutation_rowset(
    (output_table_alias, output_column_alias): (TableAlias, ColumnAlias),
    (row_table_alias, row_column_alias): (TableAlias, ColumnAlias),
    aggregate_table_alias: TableAlias,
    row_select: Select,
    aggregate_select: Option<Select>,
) -> Select {
    let row = vec![(
        output_column_alias,
        Expression::RowToJson(TableReference::AliasedTable(output_table_alias.clone())),
    )];

    let mut final_select = simple_select(row);

    let wrap_row = |row_sel| {
        select_rows_as_json_for_mutation(row_sel, row_column_alias, row_table_alias.clone())
    };

    let mut select_star = star_select(From::Select {
        alias: row_table_alias.clone(),
        select: Box::new(wrap_row(row_select)),
    });

    match aggregate_select {
        None => {}
        Some(aggregate_select) => {
            select_star.joins = vec![Join::CrossJoin(CrossJoin {
                select: Box::new(aggregate_select),
                alias: aggregate_table_alias.clone(),
            })];
        }
    }

    final_select.from = Some(From::Select {
        alias: output_table_alias,
        select: Box::new(select_star),
    });

    final_select
}

/// Wrap a query that returns multiple rows in the following format:
///
/// ```sql
/// SELECT
///   coalesce(json_agg(row_to_json(<table_alias>)), '[]') AS <column_alias>
/// FROM <query> as <table_alias>
/// ```
///
/// - `row_to_json` takes a row and converts it to a json object.
/// - `json_agg` aggregates the json objects to a json array.
/// - `coalesce(<thing>, <otherwise>)` returns `<thing>` if it is not null, and `<otherwise>` if it is null.
pub fn select_rows_as_json(
    row_select: Select,
    column_alias: ColumnAlias,
    table_alias: TableAlias,
) -> Select {
    let expression = Expression::FunctionCall {
        function: Function::Coalesce,
        args: vec![
            Expression::FunctionCall {
                function: Function::JsonAgg,
                args: vec![Expression::RowToJson(TableReference::AliasedTable(
                    table_alias.clone(),
                ))],
            },
            Expression::Value(Value::EmptyJsonArray),
        ],
    };
    let mut select = simple_select(vec![(column_alias, expression)]);
    select.from = Some(From::Select {
        select: Box::new(row_select),
        alias: table_alias,
    });
    select
}

/// Wrap a query that returns multiple rows in the following format:
///
/// ```sql
/// SELECT
///   json_build_object('__value', coalesce(json_agg(row_to_json(<table_alias>)), '[]')) AS <column_alias>
/// FROM <query> as <table_alias>
/// ```
///
/// - `row_to_json` takes a row and converts it to a json object.
/// - `json_agg` aggregates the json objects to a json array.
/// - `coalesce(<thing>, <otherwise>)` returns `<thing>` if it is not null, and `<otherwise>` if it is null.
/// - `json_build_object('__value', <thing>)` wraps `<thing>` in an object as a value to the key '__value'
/// as expected in ndc-spec:
/// <https://hasura.github.io/ndc-spec/specification/mutations/procedures.html#requirements>
pub fn select_rows_as_json_for_mutation(
    row_select: Select,
    column_alias: ColumnAlias,
    table_alias: TableAlias,
) -> Select {
    let expression = Expression::FunctionCall {
        function: Function::Coalesce,
        args: vec![
            Expression::FunctionCall {
                function: Function::JsonAgg,
                args: vec![Expression::RowToJson(TableReference::AliasedTable(
                    table_alias.clone(),
                ))],
            },
            Expression::Value(Value::EmptyJsonArray),
        ],
    };
    let wrapped_expression = Expression::FunctionCall {
        function: Function::JsonBuildArray,
        args: vec![Expression::JsonBuildObject(BTreeMap::from([(
            "__value".to_string(),
            Box::new(expression),
        )]))],
    };
    let mut select = simple_select(vec![(column_alias, wrapped_expression)]);
    select.from = Some(From::Select {
        select: Box::new(row_select),
        alias: table_alias,
    });
    select
}

/// Wrap a query that returns a single row in the following:
///
/// ```sql
/// SELECT
///   coalesce(row_to_json(<table_alias>), '{}'::json)) AS <column_alias>
/// FROM <query> as <table_alias>
/// ```
///
/// - `row_to_json` takes a row and converts it to a json object.
/// - `coalesce(<thing>, <otherwise>)` returns `<thing>` if it is not null, and `<otherwise>` if it is null.
///
pub fn select_row_as_json_with_default(
    select: Select,
    column_alias: ColumnAlias,
    table_alias: TableAlias,
) -> Select {
    let expression = Expression::FunctionCall {
        function: Function::Coalesce,
        args: vec![
            Expression::RowToJson(TableReference::AliasedTable(table_alias.clone())),
            Expression::Value(Value::EmptyJsonArray),
        ],
    };
    let mut final_select = simple_select(vec![(column_alias, expression)]);
    final_select.from = Some(From::Select {
        select: Box::new(select),
        alias: table_alias,
    });
    final_select
}

/// Create a FROM clause for variables.
///
/// Something of the form:
///
/// ```sql
/// FROM
///   json_to_recordset(cast('[{"%variable_order": 1, "%variables": {"search": "%Good%", ...}}]' as json))
///     AS "%0_variables"("%variable_order" int, "%variables" jsonb)
/// ```
pub fn from_variables(alias: TableAlias) -> From {
    let expression = Expression::Value(Value::Variable(VARIABLES_OBJECT_PLACEHOLDER.to_string()));
    let columns: Vec<(ColumnAlias, ScalarType)> = vec![
        (
            make_column_alias(VARIABLE_ORDER_FIELD.to_string()),
            ScalarType("int".to_string()),
        ),
        (
            make_column_alias(VARIABLES_FIELD.to_string()),
            ScalarType("jsonb".to_string()),
        ),
    ];

    From::JsonbToRecordset {
        expression,
        alias,
        columns,
    }
}

/// Wrap an expression in `coalesce(json_agg(<expr>), '[]')`.
fn wrap_in_json_agg(expression: Expression) -> Expression {
    Expression::FunctionCall {
        function: Function::Coalesce,
        args: vec![
            Expression::FunctionCall {
                function: Function::JsonAgg,
                args: vec![expression],
            },
            Expression::Value(Value::EmptyJsonArray),
        ],
    }
}

/// This name will be used as a placeholder for a postgres parameter to which the
/// user variables sets will be passed.
pub const VARIABLES_OBJECT_PLACEHOLDER: &str = "%VARIABLES_OBJECT_PLACEHOLDER";

/// SQL field name to be used for ordering results with multiple variable sets.
pub const VARIABLE_ORDER_FIELD: &str = "%variable_order";

/// SQL field name to be used for keeping the values of variable sets.
pub const VARIABLES_FIELD: &str = "%variables";

pub fn begin(
    isolation_level: transaction::IsolationLevel,
    transaction_mode: transaction::TransactionMode,
) -> Vec<string::Statement> {
    vec![{
        let mut sql = string::SQL::new();
        transaction::Begin {
            isolation_level,
            transaction_mode,
        }
        .to_sql(&mut sql);
        string::Statement(sql)
    }]
}

pub fn commit() -> Vec<string::Statement> {
    vec![{
        let mut sql = string::SQL::new();
        transaction::Commit {}.to_sql(&mut sql);
        string::Statement(sql)
    }]
}

pub fn transaction_rollback() -> string::Statement {
    let mut sql = string::SQL::new();
    transaction::Rollback {}.to_sql(&mut sql);
    string::Statement(sql)
}

//! Simple constant expressions folding.
//! We won't work very hard here because we assume PostgreSQL has
//! similar rewrites.
use crate::sql::ast::*;

/// Normalize all expressions in select.
pub fn normalize_select(mut select: Select) -> Select {
    // with
    select.with.common_table_expressions = select
        .with
        .common_table_expressions
        .into_iter()
        .map(normalize_cte)
        .collect();

    // select list
    select.select_list = normalize_select_list(select.select_list);

    // from
    select.from = select.from.map(normalize_from);

    // joins
    select.joins = select.joins.into_iter().map(normalize_join).collect();

    // where
    select.where_ = Where(normalize_expr(select.where_.0));

    // order by
    select.order_by.elements = select
        .order_by
        .elements
        .into_iter()
        .map(normalize_order_by_element)
        .collect();

    // return modified select
    select
}

/// Normalize all expressions in a select list.
pub fn normalize_select_list(select_list: SelectList) -> SelectList {
    match select_list {
        SelectList::SelectListComposite(select_list1, select_list2) => {
            SelectList::SelectListComposite(
                Box::new(normalize_select_list(*select_list1)),
                Box::new(normalize_select_list(*select_list2)),
            )
        }
        SelectList::SelectStar => SelectList::SelectStar,
        SelectList::SelectStarFrom(table) => SelectList::SelectStarFrom(table),
        SelectList::Select1 => SelectList::Select1,
        SelectList::SelectStarComposite(exp) => {
            SelectList::SelectStarComposite(normalize_expr(exp))
        }
        SelectList::SelectList(vec) => SelectList::SelectList(
            vec.into_iter()
                .map(|(alias, expr)| (alias, normalize_expr(expr)))
                .collect(),
        ),
    }
}

/// Normalize the select in the join.
pub fn normalize_join(join: Join) -> Join {
    match join {
        Join::LeftOuterJoinLateral(LeftOuterJoinLateral { select, alias }) => {
            Join::LeftOuterJoinLateral(LeftOuterJoinLateral {
                select: Box::new(normalize_select(*select)),
                alias,
            })
        }
        Join::InnerJoinLateral(InnerJoinLateral { select, alias }) => {
            Join::InnerJoinLateral(InnerJoinLateral {
                select: Box::new(normalize_select(*select)),
                alias,
            })
        }
        Join::FullOuterJoinLateral(FullOuterJoinLateral { select, alias }) => {
            Join::FullOuterJoinLateral(FullOuterJoinLateral {
                select: Box::new(normalize_select(*select)),
                alias,
            })
        }
        Join::CrossJoinLateral(CrossJoin { select, alias }) => Join::CrossJoinLateral(CrossJoin {
            select: Box::new(normalize_select(*select)),
            alias,
        }),
        Join::CrossJoin(CrossJoin { select, alias }) => Join::CrossJoin(CrossJoin {
            select: Box::new(normalize_select(*select)),
            alias,
        }),
    }
}

/// Normalize a from select.
fn normalize_from(from: From) -> From {
    match from {
        From::Select { select, alias } => From::Select {
            alias,
            select: Box::new(normalize_select(*select)),
        },
        from => from,
    }
}

/// Normalize the expression in an OrderByElement.
pub fn normalize_order_by_element(mut element: OrderByElement) -> OrderByElement {
    element.target = normalize_expr(element.target);
    element
}

/// Normalize the expression in a common table expression.
pub fn normalize_cte(mut cte: CommonTableExpression) -> CommonTableExpression {
    cte.select = match cte.select {
        CTExpr::Select(select) => CTExpr::Select(normalize_select(select)),
        CTExpr::RawSql(raw_sqls) => CTExpr::RawSql(
            raw_sqls
                .into_iter()
                .map(|raw_sql| match raw_sql {
                    RawSql::RawText(string) => RawSql::RawText(string),
                    RawSql::Expression(expr) => RawSql::Expression(normalize_expr(expr)),
                })
                .collect(),
        ),
        CTExpr::Delete(delete) => CTExpr::Delete(normalize_delete(delete)),
        CTExpr::Insert(insert) => CTExpr::Insert(normalize_insert(insert)),
        CTExpr::Update(update) => CTExpr::Update(normalize_update(update)),
    };
    cte
}

/// Normalize everything in a Delete
fn normalize_delete(mut delete: Delete) -> Delete {
    delete.where_ = Where(normalize_expr(delete.where_.0));
    delete.from = normalize_from(delete.from);
    delete.returning = Returning(normalize_select_list(delete.returning.0));

    delete
}

/// Normalize everything in an Insert
fn normalize_insert(mut insert: Insert) -> Insert {
    insert.from = normalize_insert_from(insert.from);
    insert.returning = Returning(normalize_select_list(insert.returning.0));

    insert
}

/// Normalize everything in an InsertFrom
fn normalize_insert_from(from: InsertFrom) -> InsertFrom {
    match from {
        InsertFrom::Select(select) => InsertFrom::Select(normalize_select(select)),
        InsertFrom::Values(values) => InsertFrom::Values(
            values
                .into_iter()
                .map(|values| {
                    values
                        .into_iter()
                        .map(normalize_insert_expression)
                        .collect()
                })
                .collect(),
        ),
    }
}

/// Normalize everything in an Update
fn normalize_update(mut update: Update) -> Update {
    update.set = update
        .set
        .into_iter()
        .map(|(column, value)| (column, normalize_insert_expression(value)))
        .collect();

    update.where_ = Where(normalize_expr(update.where_.0));

    update.returning = Returning(normalize_select_list(update.returning.0));

    update
}

fn normalize_insert_expression(expr: MutationValueExpression) -> MutationValueExpression {
    match expr {
        MutationValueExpression::Expression(expression) => {
            MutationValueExpression::Expression(normalize_expr(expression))
        }
        MutationValueExpression::Default => MutationValueExpression::Default,
    }
}

/// Constant expressions folding. Remove redundant expressions.
/// This is the main work. The other parts are just trying to apply
/// this rewrite to their Expressions.
pub fn normalize_expr(expr: Expression) -> Expression {
    match expr {
        // 'true' as a unit element for 'And'
        Expression::And { left, right } => {
            let oleft = match normalize_expr(*left) {
                Expression::Value(Value::Bool(true)) => None,
                e => Some(e),
            };
            let oright = match normalize_expr(*right) {
                Expression::Value(Value::Bool(true)) => None,
                e => Some(e),
            };
            match (oleft, oright) {
                (Some(left), Some(right)) => Expression::And {
                    left: Box::new(left),
                    right: Box::new(right),
                },
                (Some(left), None) => left,
                (None, Some(right)) => right,
                // both expressions are None (true), so and of two trues is true.
                (None, None) => Expression::Value(Value::Bool(true)),
            }
        }
        // 'false' as a unit element for 'Or'
        Expression::Or { left, right } => {
            // none means false, some means expression
            let oleft = match normalize_expr(*left) {
                Expression::Value(Value::Bool(false)) => None,
                e => Some(e),
            };
            let oright = match normalize_expr(*right) {
                Expression::Value(Value::Bool(false)) => None,
                e => Some(e),
            };
            match (oleft, oright) {
                (Some(left), Some(right)) => Expression::Or {
                    left: Box::new(left),
                    right: Box::new(right),
                },
                (Some(left), None) => left,
                (None, Some(right)) => right,
                // both expressions are None (false), so or of two falses is false.
                (None, None) => Expression::Value(Value::Bool(false)),
            }
        }
        // fold the expressions in the select.
        Expression::Exists { select } => Expression::Exists {
            select: Box::new(normalize_select(*select)),
        },
        // reverse not on literal bool.
        Expression::Not(expr) => match normalize_expr(*expr) {
            Expression::Value(Value::Bool(false)) => Expression::Value(Value::Bool(true)),
            Expression::Value(Value::Bool(true)) => Expression::Value(Value::Bool(false)),
            expr => Expression::Not(Box::new(expr)),
        },
        // Apply inner
        Expression::BinaryOperation {
            left,
            operator,
            right,
            // Apply inner
        } => Expression::BinaryOperation {
            left: Box::new(normalize_expr(*left)),
            operator,
            right: Box::new(normalize_expr(*right)),
        },
        // Apply inner
        Expression::BinaryArrayOperation {
            left,
            operator,
            right,
        } => Expression::BinaryArrayOperation {
            left: Box::new(normalize_expr(*left)),
            operator,
            right: right.into_iter().map(normalize_expr).collect(),
        },
        // Apply inner
        Expression::UnaryOperation {
            expression,
            operator,
        } => Expression::UnaryOperation {
            expression: Box::new(normalize_expr(*expression)),
            operator,
        },
        // Apply inner
        Expression::FunctionCall { function, args } => Expression::FunctionCall {
            function,
            args: args.into_iter().map(normalize_expr).collect(),
        },
        // Apply inner
        Expression::JsonBuildObject(object) => Expression::JsonBuildObject(
            object
                .into_iter()
                .map(|(key, expr)| (key, normalize_expr(expr)))
                .collect(),
        ),
        // Apply inner
        Expression::Cast {
            expression,
            r#type: scalar_type,
        } => Expression::Cast {
            expression: Box::new(normalize_expr(*expression)),
            r#type: scalar_type,
        },
        // Apply inner
        Expression::ArrayConstructor(array) => {
            Expression::ArrayConstructor(array.into_iter().map(normalize_expr).collect())
        }
        // Apply inner
        Expression::CorrelatedSubSelect(select) => {
            Expression::CorrelatedSubSelect(Box::new(normalize_select(*select)))
        }
        // Apply inner
        Expression::NestedFieldSelect {
            expression,
            nested_field,
        } => Expression::NestedFieldSelect {
            expression: Box::new(normalize_expr(*expression)),
            nested_field,
        },
        // Nothing to do.
        Expression::RowToJson(_)
        | Expression::ColumnReference(_)
        | Expression::Value(_)
        | Expression::Count(_) => expr,
    }
}

/// Tests
#[cfg(test)]
mod tests {
    use super::normalize_expr;
    use crate::sql::ast::*;

    fn expr_false() -> Expression {
        Expression::Value(Value::Bool(false))
    }

    fn expr_true() -> Expression {
        Expression::Value(Value::Bool(true))
    }

    fn expr_seven() -> Expression {
        Expression::Value(Value::Int4(7))
    }

    fn expr_and(left: Expression, right: Expression) -> Expression {
        Expression::And {
            left: Box::new(left),
            right: Box::new(right),
        }
    }

    fn expr_or(left: Expression, right: Expression) -> Expression {
        Expression::Or {
            left: Box::new(left),
            right: Box::new(right),
        }
    }

    fn expr_not(expr: Expression) -> Expression {
        Expression::Not(Box::new(expr))
    }

    fn expr_eq(left: Expression, right: Expression) -> Expression {
        Expression::BinaryOperation {
            left: Box::new(left),
            operator: BinaryOperator("=".to_string()),
            right: Box::new(right),
        }
    }

    #[test]
    fn true_and_true_is_true() {
        let left_side = expr_true();
        let right_side = expr_true();
        let expr = expr_and(left_side, right_side);
        assert_eq!(normalize_expr(expr), expr_true());
    }

    #[test]
    fn false_or_false_is_false() {
        let left_side = expr_false();
        let right_side = expr_false();
        let expr = expr_or(left_side, right_side);
        assert_eq!(normalize_expr(expr), expr_false());
    }

    #[test]
    fn true_and_false_is_false() {
        let left_side = expr_true();
        let right_side = expr_false();
        let expr = expr_and(left_side, right_side);
        assert_eq!(normalize_expr(expr), expr_false());
    }

    #[test]
    fn false_or_true_is_true() {
        let left_side = expr_false();
        let right_side = expr_true();
        let expr = expr_or(left_side, right_side);
        assert_eq!(normalize_expr(expr), expr_true());
    }

    #[test]
    fn left_is_true() {
        let left_side = expr_true();
        let right_side = expr_eq(expr_seven(), expr_seven());
        let expr = expr_and(left_side, right_side.clone());
        assert_eq!(normalize_expr(expr), right_side);
    }

    #[test]
    fn right_is_true() {
        let left_side = expr_eq(expr_seven(), expr_seven());
        let right_side = expr_true();
        let expr = expr_and(left_side.clone(), right_side);
        assert_eq!(normalize_expr(expr), left_side);
    }

    #[test]
    fn true_removed_in_complex_expr() {
        let eq_expr = expr_eq(expr_seven(), expr_seven());
        let left_side = expr_and(expr_true(), eq_expr.clone());
        let right_side = expr_true();
        let expr = expr_and(left_side, right_side);
        assert_eq!(normalize_expr(expr), eq_expr);
    }

    #[test]
    fn eq_expr_is_not_removed() {
        let eq_expr = expr_eq(expr_seven(), expr_seven());
        let left_side = expr_seven();
        let right_side = expr_and(eq_expr.clone(), eq_expr);
        let expr = expr_and(left_side, right_side);
        assert_eq!(normalize_expr(expr.clone()), expr);
    }

    #[test]
    fn not_false_is_removed() {
        let eq_expr = expr_eq(expr_seven(), expr_seven());
        let not_false = expr_not(expr_false());
        let left_side = expr_and(not_false, eq_expr.clone());
        let right_side = expr_true();
        let expr = expr_and(left_side, right_side);
        assert_eq!(normalize_expr(expr), eq_expr);
    }
}

/// Simple constant expressions folding.
/// We won't work very hard here because we assume PostgreSQL has
/// similar rewrites.
use crate::sql::ast::*;

/// Normalize all expressions in select.
pub fn normalize_select(mut select: Select) -> Select {
    select.select_list = match select.select_list {
        SelectList::SelectStar => SelectList::SelectStar,
        SelectList::SelectList(vec) => SelectList::SelectList(
            vec.into_iter()
                .map(|(alias, expr)| (alias, normalize_expr(expr)))
                .collect(),
        ),
    };
    select.from = match select.from {
        Some(From::Select { select, alias }) => Some(From::Select {
            alias,
            select: Box::new(normalize_select(*select)),
        }),
        from => from,
    };
    select.joins = select.joins.into_iter().map(normalize_join).collect();
    select.where_ = Where(normalize_expr(select.where_.0));
    select
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
        Join::CrossJoin(CrossJoin { select, alias }) => Join::CrossJoin(CrossJoin {
            select: Box::new(normalize_select(*select)),
            alias,
        }),
    }
}

/// Constant expressions folding. Remove redundant expressions.
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
                (None, None) => Expression::Value(Value::Bool(true)),
            }
        }
        // 'false' as a unit element for 'Or'
        Expression::Or { left, right } => {
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
                (None, None) => Expression::Value(Value::Bool(false)),
            }
        }
        // reverse not on literal bool.
        Expression::Not(expr) => match normalize_expr(*expr) {
            Expression::Value(Value::Bool(false)) => Expression::Value(Value::Bool(true)),
            Expression::Value(Value::Bool(true)) => Expression::Value(Value::Bool(false)),
            expr => Expression::Not(Box::new(expr)),
        },
        e => e,
    }
}

#[cfg(test)]
mod tests {
    use crate::sql::ast::*;
    use crate::sql::rewrites::normalize::normalize_expr;

    fn expr_false() -> Expression {
        Expression::Value(Value::Bool(false))
    }

    fn expr_true() -> Expression {
        Expression::Value(Value::Bool(true))
    }

    fn expr_seven() -> Expression {
        Expression::Value(Value::Int8(7))
    }

    fn expr_and(left: Expression, right: Expression) -> Expression {
        Expression::And {
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
    fn true_is_removed() {
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
        let right_side = expr_and(eq_expr.clone(), eq_expr.clone());
        let expr = expr_and(left_side, right_side.clone());
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

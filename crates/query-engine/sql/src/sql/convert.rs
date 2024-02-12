//! Convert a SQL AST to a low-level SQL string.

use super::ast::*;
use super::helpers;
use super::string::*;

pub trait ToSql {
    fn to_sql(&self, sql: &mut SQL);
}

impl ToSql for With {
    fn to_sql(&self, sql: &mut SQL) {
        if self.common_table_expressions.is_empty() {
        } else {
            sql.append_syntax("WITH ");

            let ctes = &self.common_table_expressions;
            for (index, cte) in ctes.iter().enumerate() {
                cte.to_sql(sql);
                if index < (ctes.len() - 1) {
                    sql.append_syntax(", ")
                }
            }
        }
    }
}

impl ToSql for CommonTableExpression {
    fn to_sql(&self, sql: &mut SQL) {
        self.alias.to_sql(sql);
        match &self.column_names {
            None => {}
            Some(names) => {
                sql.append_syntax("(");
                for name in names {
                    name.to_sql(sql);
                }
                sql.append_syntax(")");
            }
        }

        sql.append_syntax(" AS (");
        self.select.to_sql(sql);
        // the newline is important because a native query might end with a comment
        sql.append_syntax("\n)");
    }
}

impl ToSql for CTExpr {
    fn to_sql(&self, sql: &mut SQL) {
        match self {
            CTExpr::RawSql(raw_vec) => {
                for item in raw_vec {
                    item.to_sql(sql);
                }
            }
            CTExpr::Delete(delete) => delete.to_sql(sql),
            CTExpr::Insert(insert) => insert.to_sql(sql),
        }
    }
}

impl ToSql for RawSql {
    fn to_sql(&self, sql: &mut SQL) {
        match self {
            RawSql::RawText(text) => sql.append_syntax(text),
            RawSql::Expression(exp) => exp.to_sql(sql),
        }
    }
}

impl ToSql for Explain<'_> {
    fn to_sql(&self, sql: &mut SQL) {
        sql.append_syntax("EXPLAIN ");
        match self {
            Explain::Select(select) => select.to_sql(sql),
        }
    }
}

impl ToSql for SelectList {
    fn to_sql(&self, sql: &mut SQL) {
        match self {
            SelectList::SelectList(select_list) => {
                for (index, (col, expr)) in select_list.iter().enumerate() {
                    expr.to_sql(sql);
                    sql.append_syntax(" AS ");
                    col.to_sql(sql);
                    if index < (select_list.len() - 1) {
                        sql.append_syntax(", ")
                    }
                }
            }
            SelectList::SelectStar => {
                sql.append_syntax("*");
            }
        }
    }
}

impl ToSql for Select {
    fn to_sql(&self, sql: &mut SQL) {
        self.with.to_sql(sql);

        sql.append_syntax("SELECT ");

        self.select_list.to_sql(sql);

        sql.append_syntax(" ");

        match &self.from {
            Some(from) => from.to_sql(sql),
            None => (),
        }

        for join in self.joins.iter() {
            join.to_sql(sql)
        }

        self.where_.to_sql(sql);

        self.order_by.to_sql(sql);

        self.limit.to_sql(sql);
    }
}

impl ToSql for Insert {
    fn to_sql(&self, sql: &mut SQL) {
        sql.append_syntax("INSERT INTO ");

        sql.append_identifier(&self.schema.0);
        sql.append_syntax(".");
        sql.append_identifier(&self.table.0);
        sql.append_syntax("(");
        for (index, column_name) in self.columns.iter().enumerate() {
            sql.append_identifier(&column_name.0.to_string());
            if index < (self.columns.len() - 1) {
                sql.append_syntax(", ")
            }
        }
        sql.append_syntax(")");

        sql.append_syntax(" VALUES ");
        sql.append_syntax("(");
        for (index, value) in self.values.iter().enumerate() {
            value.to_sql(sql);
            if index < (self.values.len() - 1) {
                sql.append_syntax(", ")
            }
        }
        sql.append_syntax(")");

        sql.append_syntax(" ");

        self.returning.to_sql(sql);
    }
}

impl ToSql for Delete {
    fn to_sql(&self, sql: &mut SQL) {
        let Delete {
            from,
            where_,
            returning,
        } = &self;

        sql.append_syntax("DELETE ");

        from.to_sql(sql);

        where_.to_sql(sql);

        sql.append_syntax(" ");

        returning.to_sql(sql);
    }
}

impl ToSql for Returning {
    fn to_sql(&self, sql: &mut SQL) {
        match self {
            Returning::ReturningStar => sql.append_syntax("RETURNING *"),
        }
    }
}

impl ToSql for From {
    fn to_sql(&self, sql: &mut SQL) {
        sql.append_syntax("FROM ");
        match &self {
            From::Table { reference, alias } => {
                reference.to_sql(sql);
                sql.append_syntax(" AS ");
                alias.to_sql(sql);
            }
            From::Select { select, alias } => {
                sql.append_syntax("(");
                select.to_sql(sql);
                sql.append_syntax(")");
                sql.append_syntax(" AS ");
                alias.to_sql(sql);
            }
            From::JsonbToRecordset {
                expression,
                alias,
                columns,
            } => {
                sql.append_syntax("jsonb_to_recordset");
                sql.append_syntax("(");
                expression.to_sql(sql);
                sql.append_syntax(")");
                sql.append_syntax(" AS ");
                alias.to_sql(sql);
                sql.append_syntax("(");

                for (index, (column, scalar_type)) in columns.iter().enumerate() {
                    column.to_sql(sql);
                    sql.append_syntax(" ");
                    scalar_type.to_sql(sql);
                    if index < (columns.len() - 1) {
                        sql.append_syntax(", ")
                    }
                }
                sql.append_syntax(")");
            }
            From::JsonbArrayElements {
                expression,
                alias,
                column,
            } => {
                sql.append_syntax("jsonb_array_elements");
                sql.append_syntax("(");
                expression.to_sql(sql);
                sql.append_syntax(")");
                sql.append_syntax(" AS ");
                alias.to_sql(sql);
                sql.append_syntax("(");
                column.to_sql(sql);
                sql.append_syntax(")");
            }
        }
    }
}

impl ToSql for Join {
    fn to_sql(&self, sql: &mut SQL) {
        match self {
            Join::LeftOuterJoinLateral(join) => {
                sql.append_syntax(" LEFT OUTER JOIN LATERAL ");
                sql.append_syntax("(");
                join.select.to_sql(sql);
                sql.append_syntax(")");
                sql.append_syntax(" AS ");
                join.alias.to_sql(sql);
                sql.append_syntax(" ON ('true') ");
            }
            Join::InnerJoinLateral(join) => {
                sql.append_syntax(" INNER JOIN LATERAL ");
                sql.append_syntax("(");
                join.select.to_sql(sql);
                sql.append_syntax(")");
                sql.append_syntax(" AS ");
                join.alias.to_sql(sql);
                sql.append_syntax(" ON ('true') ");
            }
            Join::CrossJoinLateral(join) => {
                sql.append_syntax(" CROSS JOIN LATERAL ");
                sql.append_syntax("(");
                join.select.to_sql(sql);
                sql.append_syntax(")");
                sql.append_syntax(" AS ");
                join.alias.to_sql(sql);
            }
            Join::CrossJoin(join) => {
                sql.append_syntax(" CROSS JOIN ");
                sql.append_syntax("(");
                join.select.to_sql(sql);
                sql.append_syntax(")");
                sql.append_syntax(" AS ");
                join.alias.to_sql(sql);
            }
        }
    }
}

impl ToSql for Where {
    fn to_sql(&self, sql: &mut SQL) {
        let Where(expression) = self;
        if *expression != helpers::true_expr() {
            sql.append_syntax(" WHERE ");
            expression.to_sql(sql);
        }
    }
}

// scalars
impl ToSql for Expression {
    fn to_sql(&self, sql: &mut SQL) {
        match &self {
            Expression::ColumnReference(column_reference) => column_reference.to_sql(sql),
            Expression::Value(value) => value.to_sql(sql),
            Expression::Cast { expression, r#type } => {
                sql.append_syntax("cast");
                sql.append_syntax("(");
                expression.to_sql(sql);
                sql.append_syntax(" as ");
                r#type.to_sql(sql);
                sql.append_syntax(")");
            }
            Expression::And { left, right } => {
                sql.append_syntax("(");
                left.to_sql(sql);
                sql.append_syntax(" AND ");
                right.to_sql(sql);
                sql.append_syntax(")");
            }
            Expression::Or { left, right } => {
                sql.append_syntax("(");
                left.to_sql(sql);
                sql.append_syntax(" OR ");
                right.to_sql(sql);
                sql.append_syntax(")");
            }
            Expression::Not(expr) => {
                sql.append_syntax("NOT ");
                expr.to_sql(sql);
            }
            Expression::BinaryOperation {
                left,
                operator,
                right,
            } => {
                sql.append_syntax("(");
                left.to_sql(sql);
                operator.to_sql(sql);
                right.to_sql(sql);
                sql.append_syntax(")");
            }
            Expression::BinaryArrayOperation {
                left,
                operator,
                right,
            } => {
                sql.append_syntax("(");
                {
                    left.to_sql(sql);
                    operator.to_sql(sql);
                    sql.append_syntax("(");
                    for (index, item) in right.iter().enumerate() {
                        item.to_sql(sql);
                        if index < (right.len() - 1) {
                            sql.append_syntax(", ")
                        }
                    }
                    sql.append_syntax(")");
                }
                sql.append_syntax(")");
            }
            Expression::UnaryOperation {
                expression,
                operator,
            } => {
                sql.append_syntax("(");
                expression.to_sql(sql);
                operator.to_sql(sql);
                sql.append_syntax(")");
            }
            Expression::FunctionCall { function, args } => {
                function.to_sql(sql);
                sql.append_syntax("(");
                for (index, arg) in args.iter().enumerate() {
                    arg.to_sql(sql);
                    if index < (args.len() - 1) {
                        sql.append_syntax(", ")
                    }
                }
                sql.append_syntax(")");
            }
            Expression::Exists { select } => {
                sql.append_syntax("EXISTS ");
                sql.append_syntax("(");
                select.to_sql(sql);
                sql.append_syntax(")");
            }
            Expression::JsonBuildObject(map) => {
                sql.append_syntax("json_build_object");
                sql.append_syntax("(");

                for (index, (label, item)) in map.iter().enumerate() {
                    sql.append_syntax("'");
                    sql.append_syntax(label);
                    sql.append_syntax("'");
                    sql.append_syntax(", ");
                    item.to_sql(sql);

                    if index < (map.len() - 1) {
                        sql.append_syntax(", ")
                    }
                }

                sql.append_syntax(")");
            }
            Expression::RowToJson(select) => {
                sql.append_syntax("row_to_json");
                sql.append_syntax("(");
                select.to_sql(sql);
                sql.append_syntax(")");
            }
            Expression::Count(count_type) => {
                sql.append_syntax("COUNT");
                sql.append_syntax("(");
                count_type.to_sql(sql);
                sql.append_syntax(")")
            }
            Expression::ArrayConstructor(elements) => {
                sql.append_syntax("ARRAY[");
                for (index, element) in elements.iter().enumerate() {
                    element.to_sql(sql);

                    if index < (elements.len() - 1) {
                        sql.append_syntax(", ")
                    }
                }
                sql.append_syntax("]");
            }
            Expression::CorrelatedSubSelect(select) => {
                sql.append_syntax("(");
                select.to_sql(sql);
                sql.append_syntax(")");
            }
        }
    }
}

impl ToSql for UnaryOperator {
    fn to_sql(&self, sql: &mut SQL) {
        match self {
            UnaryOperator::IsNull => sql.append_syntax(" IS NULL "),
        }
    }
}

impl ToSql for BinaryOperator {
    fn to_sql(&self, sql: &mut SQL) {
        sql.append_syntax(" ");
        sql.append_syntax(self.0.as_str());
        sql.append_syntax(" ");
    }
}

impl ToSql for BinaryArrayOperator {
    fn to_sql(&self, sql: &mut SQL) {
        match self {
            BinaryArrayOperator::In => sql.append_syntax(" IN "),
        }
    }
}

impl ToSql for Function {
    fn to_sql(&self, sql: &mut SQL) {
        match self {
            Function::Coalesce => sql.append_syntax("coalesce"),
            Function::JsonAgg => sql.append_syntax("json_agg"),
            Function::JsonBuildArray => sql.append_syntax("json_build_array"),
            Function::JsonbPopulateRecord => sql.append_syntax("jsonb_populate_record"),
            Function::Unknown(name) => sql.append_syntax(name),
        }
    }
}

impl ToSql for CountType {
    fn to_sql(&self, sql: &mut SQL) {
        match self {
            CountType::Star => sql.append_syntax("*"),
            CountType::Simple(column) => column.to_sql(sql),
            CountType::Distinct(column) => {
                sql.append_syntax("DISTINCT ");
                column.to_sql(sql)
            }
        }
    }
}

impl ToSql for Value {
    fn to_sql(&self, sql: &mut SQL) {
        match &self {
            Value::EmptyJsonArray => sql.append_syntax("'[]'"),
            Value::Int8(i) => sql.append_syntax(format!("{}", i).as_str()),
            Value::Float8(n) => sql.append_syntax(format!("{}", n).as_str()),
            Value::Character(s) => sql.append_param(Param::String(s.clone())),
            Value::String(s) => sql.append_param(Param::String(s.clone())),
            Value::Variable(v) => sql.append_param(Param::Variable(v.clone())),
            Value::Bool(true) => sql.append_syntax("true"),
            Value::Bool(false) => sql.append_syntax("false"),
            Value::Null => sql.append_syntax("null"),
            Value::JsonValue(v) => sql.append_param(Param::Value(v.clone())),
            Value::Array(items) => {
                sql.append_syntax("ARRAY [");
                for (index, item) in items.iter().enumerate() {
                    item.to_sql(sql);
                    if index < (items.len() - 1) {
                        sql.append_syntax(", ")
                    }
                }
                sql.append_syntax("]");
            }
        }
    }
}

impl ToSql for ScalarType {
    fn to_sql(&self, sql: &mut SQL) {
        sql.append_syntax(self.0.as_str())
    }
}

impl ToSql for Limit {
    fn to_sql(&self, sql: &mut SQL) {
        match self.limit {
            None => (),
            Some(limit) => {
                sql.append_syntax(" LIMIT ");
                sql.append_syntax(format!("{}", limit).as_str());
            }
        };
        match self.offset {
            None => (),
            Some(offset) => {
                sql.append_syntax(" OFFSET ");
                sql.append_syntax(format!("{}", offset).as_str());
            }
        };
    }
}

// names
impl ToSql for TableReference {
    fn to_sql(&self, sql: &mut SQL) {
        match self {
            TableReference::DBTable { schema, table } => {
                sql.append_identifier(&schema.0);
                sql.append_syntax(".");
                sql.append_identifier(&table.0);
            }
            TableReference::AliasedTable(alias) => alias.to_sql(sql),
        };
    }
}

impl ToSql for TableAlias {
    fn to_sql(&self, sql: &mut SQL) {
        let name = format!("%{}_{}", self.unique_index, self.name);
        sql.append_identifier(&name);
    }
}

impl ToSql for ColumnReference {
    fn to_sql(&self, sql: &mut SQL) {
        match self {
            ColumnReference::TableColumn { table, name } => {
                table.to_sql(sql);
                sql.append_syntax(".");
                sql.append_identifier(&name.0.to_string());
            }
            ColumnReference::AliasedColumn { table, column } => {
                table.to_sql(sql);
                sql.append_syntax(".");
                column.to_sql(sql);
            }
        };
    }
}

impl ToSql for ColumnAlias {
    fn to_sql(&self, sql: &mut SQL) {
        let name = self.name.to_string();
        sql.append_identifier(&name);
    }
}

impl ToSql for OrderBy {
    fn to_sql(&self, sql: &mut SQL) {
        if !self.elements.is_empty() {
            sql.append_syntax(" ORDER BY ");
            for (index, order_by_item) in self.elements.iter().enumerate() {
                order_by_item.to_sql(sql);
                if index < (self.elements.len() - 1) {
                    sql.append_syntax(", ")
                }
            }
        }
    }
}

impl ToSql for OrderByElement {
    fn to_sql(&self, sql: &mut SQL) {
        self.target.to_sql(sql);
        self.direction.to_sql(sql)
    }
}

impl ToSql for OrderByDirection {
    fn to_sql(&self, sql: &mut SQL) {
        match self {
            OrderByDirection::Asc => sql.append_syntax(" ASC "),
            OrderByDirection::Desc => sql.append_syntax(" DESC "),
        }
    }
}

impl ToSql for transaction::Begin {
    fn to_sql(&self, sql: &mut SQL) {
        sql.append_syntax("BEGIN ");
        self.isolation_level.to_sql(sql);
        sql.append_syntax(" ");
        self.transaction_mode.to_sql(sql);
    }
}

impl ToSql for transaction::IsolationLevel {
    fn to_sql(&self, sql: &mut SQL) {
        sql.append_syntax("ISOLATION LEVEL ");
        match self {
            transaction::IsolationLevel::ReadCommitted => sql.append_syntax("READ COMMITTED"),
            transaction::IsolationLevel::RepeatableRead => sql.append_syntax("REPEATABLE READ"),
            transaction::IsolationLevel::Serializable => sql.append_syntax("SERIALIZABLE"),
        }
    }
}

impl ToSql for transaction::TransactionMode {
    fn to_sql(&self, sql: &mut SQL) {
        match self {
            transaction::TransactionMode::ReadWrite => sql.append_syntax("READ WRITE"),
            transaction::TransactionMode::ReadOnly => sql.append_syntax("READ ONLY"),
        }
    }
}

impl ToSql for transaction::Commit {
    fn to_sql(&self, sql: &mut SQL) {
        sql.append_syntax("COMMIT");
    }
}

impl ToSql for transaction::Rollback {
    fn to_sql(&self, sql: &mut SQL) {
        sql.append_syntax("ROLLBACK");
    }
}

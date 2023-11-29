//! Describe the SQL execution plan.

use crate::sql;

use std::collections::BTreeMap;

#[derive(Debug)]
/// Definition of an execution plan to be run against the database.
pub struct ExecutionPlan {
    /// Run before the query. Should be a sql::ast in the future.
    pub pre: Vec<sql::string::Statement>,
    /// The query.
    pub query: Query,
    /// Run after the query. Should be a sql::ast in the future.
    pub post: Vec<sql::string::Statement>,
}

/// The query we want to run with some additional information.
#[derive(Debug)]
pub struct Query {
    /// The root field name of the top-most collection.
    pub root_field: String,
    /// foreach variables.
    pub variables: Option<Vec<BTreeMap<String, serde_json::Value>>>,
    /// The query.
    pub query: sql::ast::Select,
}

impl Query {
    /// Extract the query component as SQL.
    pub fn query(&self) -> sql::string::SQL {
        select_to_sql(&self.query)
    }
    pub fn explain_query(&self) -> sql::string::SQL {
        explain_to_sql(&sql::ast::Explain::Select(&self.query))
    }
}

pub fn select_to_sql(select: &sql::ast::Select) -> sql::string::SQL {
    let mut sql = sql::string::SQL::new();
    select.to_sql(&mut sql);
    sql
}

pub fn explain_to_sql(explain: &sql::ast::Explain) -> sql::string::SQL {
    let mut sql = sql::string::SQL::new();
    explain.to_sql(&mut sql);
    sql
}

/// A simple execution plan with only a root field and a query.
pub fn simple_exec_plan(
    variables: Option<Vec<BTreeMap<String, serde_json::Value>>>,
    root_field: String,
    query: sql::ast::Select,
) -> ExecutionPlan {
    ExecutionPlan {
        pre: vec![],
        query: Query {
            variables,
            root_field,
            query,
        },
        post: vec![],
    }
}

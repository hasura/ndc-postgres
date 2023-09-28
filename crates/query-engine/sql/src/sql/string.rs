//! Type definitions of a low-level SQL string representation.

/// A low-level builder for SQL.
#[derive(Debug, PartialEq, Eq)]
pub struct SQL {
    pub sql: String,
    pub params: Vec<Param>,
}

impl Default for SQL {
    fn default() -> Self {
        Self::new()
    }
}

/// A parameter for a parameterized query.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum Param {
    /// A literal string
    String(String),
    /// A variable name to look up in the `variables` field in a `QueryRequest`.
    Variable(String),
}

/// A DDL statement.
#[derive(Debug)]
pub struct DDL(pub SQL);

impl SQL {
    pub fn new() -> SQL {
        SQL {
            sql: "".to_string(),
            params: vec![],
        }
    }
    /// Append regular SQL syntax like a keyword (like `SELECT`), punctuation, etc.
    pub fn append_syntax(&mut self, sql: &str) {
        self.sql.push_str(sql);
    }
    /// Append a SQL identifier like a column or a table name, which will be
    /// inserted surrounded by quotes
    pub fn append_identifier(&mut self, sql: &String) {
        // todo: sanitize
        self.sql.push_str(format!("\"{}\"", sql).as_str());
    }
    /// Append a parameter to a parameterized query. Will be represented as $1, $2, and so on,
    /// in the sql query text, and will be inserted to the `params` vector, so we can
    /// bind them later when we run the query.
    pub fn append_param(&mut self, param: Param) {
        // we want the postgres param to start from 1
        // so we first push the param and then check the length of the vector.
        self.params.push(param);
        self.sql
            .push_str(format!("${}", self.params.len()).as_str());
    }
}

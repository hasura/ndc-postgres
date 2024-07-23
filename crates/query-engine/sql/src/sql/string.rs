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
    /// A JSON value
    Value(serde_json::Value),
    /// A variable name to look up in the `variables` field in a `QueryRequest`.
    Variable(String),
}

/// A statement.
#[derive(Debug)]
pub struct Statement(pub SQL);

impl SQL {
    pub fn new() -> SQL {
        SQL {
            sql: String::new(),
            params: vec![],
        }
    }

    /// Append regular SQL syntax like a keyword (like `SELECT`), punctuation, etc.
    pub fn append_syntax(&mut self, sql: &str) {
        self.sql.push_str(sql);
    }

    /// Append a SQL identifier like a column or a table name, which will be
    /// inserted surrounded by quotes.
    pub fn append_identifier(&mut self, sql: &str) {
        // todo: sanitize
        self.sql.push('"');
        self.sql.push_str(sql);
        self.sql.push('"');
    }

    /// Append a parameter to a parameterized query. Will be represented as $1, $2, and so on,
    /// in the sql query text, and will be inserted to the `params` vector, so we can
    /// bind them later when we run the query.
    pub fn append_param(&mut self, param: Param) {
        // we want the postgres param to start from 1
        // so we first push the param and then check the length of the vector.
        self.params.push(param);
        self.sql.push('$');
        self.sql.push_str(&self.params.len().to_string());
    }

    /// Append a literal number of type usize.
    pub fn append_usize(&mut self, sql: usize) {
        self.sql.push_str(&sql.to_string());
    }

    /// Append a literal number of type u32.
    pub fn append_u32(&mut self, sql: u32) {
        self.sql.push_str(&sql.to_string());
    }

    /// Append a literal number of type i32.
    pub fn append_i32(&mut self, sql: i32) {
        self.sql.push_str(&sql.to_string());
    }

    /// Append a literal number of type f64.
    pub fn append_f64(&mut self, sql: f64) {
        self.sql.push_str(&sql.to_string());
    }
}

/// Errors
pub enum Error {
    Query(QueryError),
    DB(sqlx::Error),
}

/// Query planning error.
pub enum QueryError {
    VariableNotFound(String),
    NotSupported(String),
    DBError(sqlx::Error),
    DBConstraintError(sqlx::Error),
}

impl std::fmt::Display for QueryError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            QueryError::VariableNotFound(thing) => {
                write!(f, "Variable '{}' not found.", thing)
            }
            QueryError::NotSupported(thing) => {
                write!(f, "{} are not supported.", thing)
            }
            QueryError::DBError(thing) => {
                write!(f, "{}", thing)
            }
            QueryError::DBConstraintError(thing) => {
                write!(f, "{}", thing)
            }
        }
    }
}

impl std::fmt::Display for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            Error::Query(err) => {
                write!(f, "{}", err)
            }
            Error::DB(err) => {
                write!(f, "{}", err)
            }
        }
    }
}

impl From<sqlx::Error> for Error {
    fn from(err: sqlx::Error) -> Error {
        match err
            .as_database_error()
            .and_then(|e| e.try_downcast_ref())
            .map(|e: &sqlx::postgres::PgDatabaseError| e.code())
        {
            None => Error::DB(err),
            Some(code) => {
                // We want to map data and constraint exceptions to query errors
                // https://www.postgresql.org/docs/current/errcodes-appendix.html
                if code.starts_with("22") {
                    Error::Query(QueryError::DBError(err))
                } else if code.starts_with("23") {
                    Error::Query(QueryError::DBConstraintError(err))
                } else {
                    Error::DB(err)
                }
            }
        }
    }
}

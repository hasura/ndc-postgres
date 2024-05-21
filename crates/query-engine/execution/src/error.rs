/// Errors
#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error("{0}")]
    Query(QueryError),
    #[error("{0}")]
    DB(sqlx::Error),
}

/// Query planning error.
#[derive(Debug, thiserror::Error)]
pub enum QueryError {
    #[error("Variable {0:?} not found.")]
    VariableNotFound(String),
    #[error("{0} are not supported.")]
    NotSupported(String),
    #[error("{0}")]
    DBError(sqlx::Error),
    #[error("{0}")]
    DBConstraintError(sqlx::Error),
    #[error("Mutation constraint failed.")]
    MutationConstraintFailed,
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

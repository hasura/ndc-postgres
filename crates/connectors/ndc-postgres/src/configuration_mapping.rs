//! A module for converting ndc-configuration data type into query-engine data types.

/// Convert a user-specified configuration of the isolation level for transactions
/// into a SQL data type representing that isolation level, which will be passed
/// to the engine on requests.
pub(crate) fn convert_isolation_level(
    input: ndc_postgres_configuration::IsolationLevel,
) -> query_engine_sql::sql::ast::transaction::IsolationLevel {
    match input {
        ndc_postgres_configuration::IsolationLevel::ReadCommitted => {
            query_engine_sql::sql::ast::transaction::IsolationLevel::ReadCommitted
        }
        ndc_postgres_configuration::IsolationLevel::RepeatableRead => {
            query_engine_sql::sql::ast::transaction::IsolationLevel::RepeatableRead
        }
        ndc_postgres_configuration::IsolationLevel::Serializable => {
            query_engine_sql::sql::ast::transaction::IsolationLevel::Serializable
        }
    }
}

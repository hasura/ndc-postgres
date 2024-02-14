use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

/// The isolation level of the transaction in which a query is executed.
#[derive(Debug, Clone, Copy, Default, Deserialize, Serialize, JsonSchema)]
pub enum IsolationLevel {
    /// Prevents reading data from another uncommitted transaction.
    #[default]
    ReadCommitted,
    /// Reading the same data twice is guaranteed to return the same result.
    RepeatableRead,
    /// Concurrent transactions behave identically to serializing them one at a time.
    Serializable,
}

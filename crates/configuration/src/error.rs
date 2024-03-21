//! Errors that can be thrown when processing configuration.

/// The errors that can be thrown when processing configuration.
///
/// This is effectively a copy of the `ParseError` enum in the `ndc-sdk` crate. However, we don't
/// want a dependency on that crate here, as this crate is used by the CLI. Duplicating here and
/// converting the values later means we can avoid that dependency.
#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error("parse error on {file_path}:{line}:{column}: {message}")]
    ParseError {
        file_path: std::path::PathBuf,
        line: usize,
        column: usize,
        message: String,
    },
    #[error("empty connection URI")]
    EmptyConnectionUri { file_path: std::path::PathBuf },
    #[error("missing environment variable when processing {file_path}: {message}")]
    MissingEnvironmentVariable {
        file_path: std::path::PathBuf,
        message: String,
    },

    #[error("I/O error: {0}")]
    IoErrorButStringified(String),

    #[error("I/O error: {0}")]
    IoError(#[from] std::io::Error),
}

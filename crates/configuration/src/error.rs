//! Errors that can be thrown when processing configuration.

use std::fmt::Display;

/// The errors that can be thrown when processing configuration.
///
/// This is effectively a copy of the `ParseError` enum in the `ndc-sdk` crate. However, we don't
/// want a dependency on that crate here, as this crate is used by the CLI. Duplicating here and
/// converting the values later means we can avoid that dependency.
#[derive(Debug, thiserror::Error)]
pub enum ParseConfigurationError {
    #[error("parse error on {file_path}:{line}:{column}: {message}")]
    ParseError {
        file_path: std::path::PathBuf,
        line: usize,
        column: usize,
        message: String,
    },
    #[error("empty connection URI")]
    EmptyConnectionUri { file_path: std::path::PathBuf },

    #[error("I/O error: {0}")]
    IoErrorButStringified(String),

    #[error("I/O error: {0}")]
    IoError(#[from] std::io::Error),

    #[error("Did not find expected version tag: \"{0}\"")]
    DidNotFindExpectedVersionTag(String),

    #[error("Unable to parse any configuration versions: {0}")]
    UnableToParseAnyVersions(MultiError),
}

#[derive(Debug)]
pub struct MultiError(pub Vec<(String, Box<dyn std::error::Error + Send + Sync>)>);

impl Display for MultiError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        for (label, err) in &self.0 {
            "\n".fmt(f)?;
            " * ".fmt(f)?;
            label.fmt(f)?;
            ": ".fmt(f)?;
            err.fmt(f)?;
            "\n".fmt(f)?;
        }
        Ok(())
    }
}

#[derive(Debug, thiserror::Error)]
pub enum WriteParsedConfigurationError {
    #[error("Version not supported: {0}")]
    VersionNotSupported(String),

    #[error("I/O error: {0}")]
    IoError(#[from] std::io::Error),

    #[error("Trying to write file \"{file}\" outside destination dir \"{dir}\"")]
    WritingOutsideDestinationDir {
        dir: std::path::PathBuf,
        file: std::path::PathBuf,
    },
}

#[derive(Debug, thiserror::Error)]
pub enum MakeRuntimeConfigurationError {
    #[error("missing environment variable when processing {file_path}: {message}")]
    MissingEnvironmentVariable {
        file_path: std::path::PathBuf,
        message: String,
    },
}

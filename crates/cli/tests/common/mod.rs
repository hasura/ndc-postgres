#![allow(dead_code)] // required because this is included mulitple times

use std::path::Path;

use tokio::fs;

pub async fn assert_file_ends_with_newline(path: impl AsRef<Path>) -> anyhow::Result<()> {
    let contents = fs::read_to_string(path).await?;
    assert_ends_with_newline(&contents);
    Ok(())
}

pub fn assert_ends_with_newline(contents: &str) {
    assert_eq!(contents.chars().last(), Some('\n'));
}

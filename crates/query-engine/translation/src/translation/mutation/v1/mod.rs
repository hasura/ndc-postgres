//! Mutations for mutations version v1.

pub mod delete;
pub mod generate;
pub mod insert;
pub mod translate;

pub use generate::{generate, Mutation};
pub use translate::translate;

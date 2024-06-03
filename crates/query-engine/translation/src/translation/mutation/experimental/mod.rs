//! Experimental mutations version is a work in progress version that is expected to be renamed once ready.
//! This version in particular is supposed to introduce permission predicates via boolean expressions.

pub mod delete;
pub mod generate;
pub mod insert;
pub mod translate;
pub mod unique_constraints;

pub use generate::{generate, Mutation};
pub use translate::translate;

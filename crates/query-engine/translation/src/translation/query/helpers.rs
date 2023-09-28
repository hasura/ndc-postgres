//! Helpers for processing the QueryRequest and building SQL.

use std::collections::BTreeMap;

use ndc_sdk::models;

use super::error::Error;
use query_engine_metadata::metadata;
use query_engine_sql::sql;

#[derive(Debug)]
/// Static information from the query and metadata.
pub struct Env {
    metadata: metadata::Metadata,
    relationships: BTreeMap<String, models::Relationship>,
}

#[derive(Debug)]
/// Stateful information changed throughout the translation process.
pub struct State {
    native_queries: NativeQueries,
    global_table_index: TableAliasIndex,
}

#[derive(Debug)]
pub struct TableAliasIndex(pub u64);

#[derive(Debug)]
/// Store top-level native queries generated throughout the translation process.
///
/// Native queries are implemented as `WITH <native_query_name_<index>> AS (<native_query>) <query>`
struct NativeQueries {
    /// native queries that receive different arguments should result in different CTEs,
    /// and be used via a AliasedTable in the query.
    native_queries: Vec<NativeQueryInfo>,
}

#[derive(Debug)]
/// Information we store about a native query call.
pub struct NativeQueryInfo {
    pub info: metadata::NativeQueryInfo,
    pub arguments: BTreeMap<String, models::Argument>,
    pub alias: sql::ast::TableAlias,
}

/// For the root table in the query, and for the current table we are processing,
/// We'd like to track what is their reference in the query (the name we can use to address them,
/// an alias we generate), and what is their name in the metadata (so we can get
/// their information such as which columns are available for that table).
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct RootAndCurrentTables {
    /// The root (top-most) table in the query.
    pub root_table: TableNameAndReference,
    /// The current table we are processing.
    pub current_table: TableNameAndReference,
}

/// For a table in the query, We'd like to track what is its reference in the query
/// (the name we can use to address them, an alias we generate), and what is their name in the
/// metadata (so we can get their information such as which columns are available for that table).
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct TableNameAndReference {
    /// Table name for column lookup
    pub name: String,
    /// Table alias to query from
    pub reference: sql::ast::TableReference,
}

#[derive(Debug)]
/// Information about columns
pub struct ColumnInfo {
    pub name: sql::ast::ColumnName,
    pub r#type: metadata::ScalarType,
}

#[derive(Debug)]
/// Metadata information about a specific collection.
pub enum CollectionInfo {
    Table {
        name: String,
        info: metadata::TableInfo,
    },
    NativeQuery {
        name: String,
        info: metadata::NativeQueryInfo,
    },
}

impl Env {
    /// Create a new Env by supplying the metadata and relationships.
    pub fn new(
        metadata: metadata::Metadata,
        relationships: BTreeMap<String, models::Relationship>,
    ) -> Env {
        Env {
            metadata,
            relationships,
        }
    }
    /// Lookup a collection's information in the metadata.
    pub fn lookup_collection(&self, collection_name: &str) -> Result<CollectionInfo, Error> {
        let table = self
            .metadata
            .tables
            .0
            .get(collection_name)
            .map(|t| CollectionInfo::Table {
                name: collection_name.to_string(),
                info: t.clone(),
            });

        match table {
            Some(table) => Ok(table),
            None => self
                .metadata
                .native_queries
                .0
                .get(collection_name)
                .map(|nq| CollectionInfo::NativeQuery {
                    name: collection_name.to_string(),
                    info: nq.clone(),
                })
                .ok_or(Error::CollectionNotFound(collection_name.to_string())),
        }
    }

    pub fn lookup_relationship(&self, name: &str) -> Result<&models::Relationship, Error> {
        self.relationships
            .get(name)
            .ok_or(Error::RelationshipNotFound(name.to_string()))
    }
}

impl CollectionInfo {
    /// Lookup a column in a collection.
    pub fn lookup_column(&self, column_name: &str) -> Result<ColumnInfo, Error> {
        match self {
            CollectionInfo::Table { name, info } => info
                .columns
                .get(column_name)
                .map(|column_info| ColumnInfo {
                    name: sql::ast::ColumnName(column_info.name.clone()),
                    r#type: column_info.r#type.clone(),
                })
                .ok_or(Error::ColumnNotFoundInCollection(
                    column_name.to_string(),
                    name.clone(),
                )),
            CollectionInfo::NativeQuery { name, info } => info
                .columns
                .get(column_name)
                .map(|column_info| ColumnInfo {
                    name: sql::ast::ColumnName(column_info.name.clone()),
                    r#type: column_info.r#type.clone(),
                })
                .ok_or(Error::ColumnNotFoundInCollection(
                    column_name.to_string(),
                    name.clone(),
                )),
        }
    }
}

impl Default for State {
    fn default() -> State {
        State {
            native_queries: NativeQueries::new(),
            global_table_index: TableAliasIndex(0),
        }
    }
}

impl State {
    /// Build a new state.
    pub fn new() -> State {
        State::default()
    }

    /// Introduce a new native query to the generated sql.
    pub fn insert_native_query(
        &mut self,
        name: String,
        info: metadata::NativeQueryInfo,
        arguments: BTreeMap<String, models::Argument>,
    ) -> sql::ast::TableReference {
        let alias = self.make_native_query_table_alias(&name);
        self.native_queries.native_queries.push(NativeQueryInfo {
            info,
            arguments,
            alias: alias.clone(),
        });
        sql::ast::TableReference::AliasedTable(alias)
    }

    /// Fetch the tracked native queries used in the query plan and their table alias.
    pub fn get_native_queries(self) -> Vec<NativeQueryInfo> {
        self.native_queries.native_queries
    }

    /// increment the table index and return the current one.
    fn next_global_table_index(&mut self) -> TableAliasIndex {
        let TableAliasIndex(index) = self.global_table_index;
        self.global_table_index = TableAliasIndex(index + 1);
        TableAliasIndex(index)
    }

    // aliases

    /// Create table aliases using this function so they get a unique index.
    pub fn make_table_alias(&mut self, name: String) -> sql::ast::TableAlias {
        sql::ast::TableAlias {
            unique_index: self.next_global_table_index().0,
            name,
        }
    }

    /// Create a table alias for left outer join lateral part.
    /// Provide an index and a source table name so we avoid name clashes,
    /// and get an alias.
    pub fn make_relationship_table_alias(&mut self, name: &String) -> sql::ast::TableAlias {
        self.make_table_alias(format!("RELATIONSHIP_{}", name))
    }

    /// Create a table alias for order by target part.
    /// Provide an index and a source table name (to disambiguate the table being queried),
    /// and get an alias.
    pub fn make_order_path_part_table_alias(
        &mut self,
        table_name: &String,
    ) -> sql::ast::TableAlias {
        self.make_table_alias(format!("ORDER_PART_{}", table_name))
    }

    /// Create a table alias for order by column.
    /// Provide an index and a source table name (to point at the table being ordered),
    /// and get an alias.
    pub fn make_order_by_table_alias(
        &mut self,
        source_table_name: &String,
    ) -> sql::ast::TableAlias {
        self.make_table_alias(format!("ORDER_FOR_{}", source_table_name))
    }

    /// Create a table alias for count aggregate order by column.
    /// Provide an index and a source table name /// (to point at the table being ordered),
    /// and get an alias.
    pub fn make_order_by_count_table_alias(
        &mut self,
        source_table_name: &String,
    ) -> sql::ast::TableAlias {
        self.make_table_alias(format!("ORDER_COUNT_FOR_{}", source_table_name))
    }

    pub fn make_native_query_table_alias(&mut self, name: &String) -> sql::ast::TableAlias {
        self.make_table_alias(format!("NATIVE_QUERY_{}", name))
    }

    /// Create a table alias for boolean expressions.
    /// Provide state for fresh names and a source table name (to point at the table
    /// being filtered), and get an alias.
    pub fn make_boolean_expression_table_alias(
        &mut self,
        source_table_name: &String,
    ) -> sql::ast::TableAlias {
        self.make_table_alias(format!("BOOLEXP_{}", source_table_name))
    }
}

impl NativeQueries {
    fn new() -> NativeQueries {
        NativeQueries {
            native_queries: vec![],
        }
    }
}

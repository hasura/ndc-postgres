//! Helpers for processing requests and building SQL.

use std::collections::{BTreeMap, VecDeque};

use ndc_models as models;

use super::error::Error;
use query_engine_metadata::metadata;
use query_engine_sql::sql;

#[derive(Debug)]
/// Static information from the query and metadata.
pub struct Env<'request> {
    pub(crate) metadata: &'request metadata::Metadata,
    relationships: BTreeMap<models::RelationshipName, models::Relationship>,
    pub(crate) mutations_version: Option<metadata::mutations::MutationsVersion>,
    pub(crate) mutations_prefix: Option<String>,
    variables_table: Option<sql::ast::TableReference>,
}

#[derive(Debug)]
/// Stateful information changed throughout the translation process.
pub struct State {
    native_queries: NativeQueries,
    global_table_index: TableAliasIndex,
}

#[derive(Debug)]
/// Used for generating a unique name for intermediate tables.
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
    pub arguments: BTreeMap<models::ArgumentName, models::Argument>,
    pub alias: sql::ast::TableAlias,
}

/// For the current table we are processing, and all ancestor table up to the closest Query,
/// We'd like to track what is their reference in the query (the name we can use to address them,
/// an alias we generate), and what is their name in the metadata (so we can get
/// their information such as which columns are available for that table).
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct TableScope {
    /// The current table we are processing.
    current_table: TableSourceAndReference,
    /// Tables in scope. Index 0 corresponds to scope 1, which is the table immediately above the current table in the exists chain.
    tables_in_scope: VecDeque<TableSourceAndReference>,
}

impl TableScope {
    /// Create a scope from a Query. There will be no tables available through scopes
    pub fn new(current_table: TableSourceAndReference) -> Self {
        Self {
            current_table,
            tables_in_scope: VecDeque::new(),
        }
    }
    /// Create a scope from an exists expression or path. The ancestor tables up until the closest query will stay in scope
    #[must_use]
    pub fn new_from_scope(&self, current_table: TableSourceAndReference) -> Self {
        let TableScope {
            current_table: parent_table,
            tables_in_scope,
        } = self;
        let mut tables_in_scope = tables_in_scope.clone();
        tables_in_scope.push_front(parent_table.clone());
        Self {
            current_table,
            tables_in_scope,
        }
    }
    /// Get the table source and reference for the current table
    pub fn current_table(&self) -> &TableSourceAndReference {
        &self.current_table
    }
    /// Get the table source and reference for a table in scope.
    /// The scope is an index, where 0 is the current table, 1 is the parent, and so on
    /// Errors if the scope is out of bounds
    pub fn scoped_table(&self, scope: &Option<usize>) -> Result<&TableSourceAndReference, Error> {
        if let Some(scope) = scope {
            if *scope > 0 && *scope <= self.tables_in_scope.len() {
                Ok(&self.tables_in_scope[scope - 1])
            } else if *scope == 0 {
                Ok(&self.current_table)
            } else {
                Err(Error::ScopeOutOfBounds {
                    current_collection_name: self.current_table.source.name_for_alias(),
                    tables_in_scope_names: self
                        .tables_in_scope
                        .iter()
                        .map(|c| c.source.name_for_alias())
                        .collect(),
                    scope: *scope,
                })
            }
        } else {
            Ok(&self.current_table)
        }
    }
}

/// For a table in the query, We'd like to track what is its reference in the query
/// (the name we can use to address them, an alias we generate), and what is their source in the
/// metadata (so we can get their information such as which columns are available for that table).
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct TableSourceAndReference {
    /// Table name for column lookup
    pub source: TableSource,
    /// Table alias to query from
    pub reference: sql::ast::TableReference,
}

/// How to find the relevant information about a table.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum TableSource {
    /// Using the collection name.
    Collection(models::CollectionName),
    /// Using the nested field path.
    NestedField {
        type_name: models::TypeName,
        // These are used to create a nice table alias.
        collection_name: models::CollectionName,
        field_path: FieldPath,
    },
}

impl TableSource {
    /// Generate a nice name that can be used to give a table alias for this source.
    pub fn name_for_alias(&self) -> String {
        match self {
            TableSource::Collection(collection_name) => collection_name.to_string(),
            TableSource::NestedField {
                collection_name,
                field_path,
                type_name: _,
            } => format!("{collection_name}.{}", field_path.0.join(".")),
        }
    }
    /// Get collection name and field path from a source.
    pub fn collection_name_and_field_path(&self) -> (models::CollectionName, FieldPath) {
        match self {
            TableSource::Collection(collection_name) => {
                (collection_name.clone(), FieldPath(vec![]))
            }
            TableSource::NestedField {
                collection_name,
                field_path,
                type_name: _,
            } => (collection_name.clone(), field_path.clone()),
        }
    }
}

#[derive(Debug)]
/// Information about columns
pub struct ColumnInfo {
    pub name: sql::ast::ColumnName,
    pub r#type: metadata::Type,
}

#[derive(Debug)]
/// Metadata information about a specific collection, i.e. something which can be queried at the
/// top level.
pub enum CollectionInfo<'env> {
    Table {
        name: &'env models::CollectionName,
        info: &'env metadata::TableInfo,
    },
    NativeQuery {
        name: &'env models::CollectionName,
        info: &'env metadata::NativeQueryInfo,
    },
}

#[derive(Debug)]
/// Metadata information about a composite type. This includes both tables (and views) and
/// dedicated composite types.
pub enum CompositeTypeInfo<'env> {
    Table {
        name: models::CollectionName,
        info: &'env metadata::TableInfo,
    },
    CompositeType {
        name: models::TypeName,
        info: &'env metadata::CompositeType,
    },
}

#[derive(Debug)]
/// Metadata information about any object that can have fields
pub enum FieldsInfo<'env> {
    Table {
        name: models::CollectionName,
        info: &'env metadata::TableInfo,
    },
    NativeQuery {
        name: models::CollectionName,
        info: &'env metadata::NativeQueryInfo,
    },
    CompositeType {
        name: models::TypeName,
        info: &'env metadata::CompositeType,
    },
}

impl<'a> From<&'a CompositeTypeInfo<'a>> for FieldsInfo<'a> {
    fn from(value: &'a CompositeTypeInfo<'a>) -> Self {
        match value {
            CompositeTypeInfo::Table { name, info } => FieldsInfo::Table {
                name: name.clone(),
                info,
            },
            CompositeTypeInfo::CompositeType { name, info } => FieldsInfo::CompositeType {
                name: name.clone(),
                info,
            },
        }
    }
}

impl<'a> From<&'a CollectionInfo<'a>> for FieldsInfo<'a> {
    fn from(value: &'a CollectionInfo<'a>) -> Self {
        match value {
            CollectionInfo::Table { name, info } => FieldsInfo::Table {
                name: (*name).clone(),
                info,
            },
            CollectionInfo::NativeQuery { name, info } => FieldsInfo::NativeQuery {
                name: (*name).clone(),
                info,
            },
        }
    }
}

impl<'request> Env<'request> {
    /// Run a closure with an empty environment.
    /// This should only be used for tests.
    ///
    /// The reason we cannot just construct and return an empty `Env` is that it contains borrowed
    /// data. Therefore we take a continuation instead which can do what it likes with the `Env`.
    /// Both the `Env` and its borrowed data can then be dropped when the continuation returns.
    pub fn with_empty<F, R>(f: F) -> R
    where
        F: FnOnce(Env) -> R,
    {
        let temp_metadata = metadata::Metadata::empty();
        let temp_env = Env {
            metadata: &temp_metadata,
            relationships: BTreeMap::new(),
            mutations_version: None,
            mutations_prefix: None,
            variables_table: None,
        };
        f(temp_env)
    }

    /// Create a new Env by supplying the metadata and relationships.
    pub fn new(
        metadata: &'request metadata::Metadata,
        relationships: BTreeMap<models::RelationshipName, models::Relationship>,
        mutations_version: Option<metadata::mutations::MutationsVersion>,
        mutations_prefix: Option<String>,
        variables_table: Option<sql::ast::TableReference>,
    ) -> Self {
        Env {
            metadata,
            relationships,
            mutations_version,
            mutations_prefix,
            variables_table,
        }
    }

    /// Lookup a metadata object that may contain fields. This may be any of Tables, Native
    /// Queries, and Composite Types.
    ///
    /// This is used to translate field selection, where any of these may occur.
    pub fn lookup_fields_info(&self, source: &TableSource) -> Result<FieldsInfo<'request>, Error> {
        match source {
            TableSource::NestedField {
                collection_name: _,
                type_name,
                field_path: _,
            } => {
                let info = self
                    .metadata
                    .composite_types
                    .0
                    .get(type_name.as_str())
                    .map(|t| FieldsInfo::CompositeType {
                        name: t.type_name.clone().into(),
                        info: t,
                    });

                info.ok_or(Error::ScalarTypeNotFound(type_name.as_str().into()))
            }
            TableSource::Collection(collection_name) => {
                // Lookup the fields of a type name in a specific order:
                // tables, then composite types, then native queries.
                let info = self
                    .metadata
                    .tables
                    .0
                    .get(collection_name)
                    .map(|t| FieldsInfo::Table {
                        name: collection_name.clone(),
                        info: t,
                    })
                    .or_else(|| {
                        self.metadata
                            .native_operations
                            .queries
                            .0
                            .get(collection_name)
                            .map(|nq| FieldsInfo::NativeQuery {
                                name: collection_name.clone(),
                                info: nq,
                            })
                    })
                    .or_else(|| {
                        self.metadata
                            .native_operations
                            .mutations
                            .0
                            .get(collection_name.as_str())
                            .map(|nq| FieldsInfo::NativeQuery {
                                name: collection_name.clone(),
                                info: nq,
                            })
                    });

                info.ok_or(Error::CollectionNotFound(collection_name.as_str().into()))
            }
        }
    }

    /// Lookup a metadata object which can be described by a Composite Type. This can be any of
    /// Tables and Composite Types themselves.
    ///
    /// This does not include Native Queries, since the fields of a Native Query is an ad-hoc
    /// construct of the NDC, and not a named type that Postgres knows about.
    ///
    /// Therefore, being a `CompositeTypeInfo` is a stronger property than being a `FieldsInfo`.
    ///
    /// This is used in the elaboration of nested fields that are not fully specified, and in the
    /// translation of input values and variables of composite type.
    pub fn lookup_composite_type(
        &self,
        type_name: &'request models::TypeName,
    ) -> Result<CompositeTypeInfo<'request>, Error> {
        let info = self
            .metadata
            .tables
            .0
            .get(type_name.as_str())
            .map(|t| CompositeTypeInfo::Table {
                name: type_name.as_str().into(),
                info: t,
            })
            .or_else(|| {
                self.metadata.composite_types.0.get(type_name).map(|t| {
                    CompositeTypeInfo::CompositeType {
                        name: t.type_name.as_str().into(),
                        info: t,
                    }
                })
            });

        info.ok_or(Error::ScalarTypeNotFound(type_name.as_str().into()))
    }

    /// Lookup a collection's information in the metadata.
    pub fn lookup_collection(
        &self,
        collection_name: &'request models::CollectionName,
    ) -> Result<CollectionInfo<'request>, Error> {
        let table = self
            .metadata
            .tables
            .0
            .get(collection_name.as_str())
            .map(|t| CollectionInfo::Table {
                name: collection_name,
                info: t,
            });

        if let Some(table) = table {
            Ok(table)
        } else {
            let query = self
                .metadata
                .native_operations
                .queries
                .0
                .get(collection_name.as_str())
                .map(|nq| CollectionInfo::NativeQuery {
                    name: collection_name,
                    info: nq,
                });

            if let Some(query) = query {
                Ok(query)
            } else {
                self.metadata
                    .native_operations
                    .mutations
                    .0
                    .get(collection_name.as_str())
                    .map(|nq| CollectionInfo::NativeQuery {
                        name: collection_name,
                        info: nq,
                    })
                    .ok_or(Error::CollectionNotFound(collection_name.clone()))
            }
        }
    }

    /// Lookup a native query's information in the metadata.
    pub fn lookup_native_mutation(
        &self,
        procedure_name: &models::ProcedureName,
    ) -> Result<&metadata::NativeQueryInfo, Error> {
        self.metadata
            .native_operations
            .mutations
            .0
            .get(procedure_name.as_str())
            .ok_or(Error::ProcedureNotFound(procedure_name.clone()))
    }

    pub fn lookup_relationship(
        &self,
        name: &models::RelationshipName,
    ) -> Result<&models::Relationship, Error> {
        self.relationships
            .get(name)
            .ok_or(Error::RelationshipNotFound(name.clone()))
    }

    /// Looks up the binary comparison operator's PostgreSQL name and arguments' type in the metadata.
    pub fn lookup_comparison_operator(
        &self,
        scalar_type: &models::ScalarTypeName,
        name: &models::ComparisonOperatorName,
    ) -> Result<&'request metadata::ComparisonOperator, Error> {
        self.metadata
            .scalar_types
            .0
            .get(scalar_type)
            .and_then(|t| t.comparison_operators.get(name))
            .ok_or(Error::OperatorNotFound {
                operator_name: name.clone(),
                type_name: scalar_type.clone(),
            })
    }

    /// Lookup type representation of a type.
    pub fn lookup_type_representation(
        &self,
        scalar_type: &models::ScalarTypeName,
    ) -> Option<&metadata::TypeRepresentation> {
        self.metadata
            .scalar_types
            .0
            .get(scalar_type)
            .map(|t| &t.type_representation)
    }

    /// Try to get the variables table reference. This will fail if no variables were passed
    /// as part of the query request.
    pub fn get_variables_table(&self) -> Result<sql::ast::TableReference, Error> {
        match &self.variables_table {
            None => Err(Error::UnexpectedVariable),
            Some(t) => Ok(t.clone()),
        }
    }

    /// Lookup a scalar type by its name in the ndc schema.
    pub(crate) fn lookup_scalar_type(
        &self,
        t: &models::ScalarTypeName,
    ) -> Result<&metadata::ScalarType, Error> {
        self.metadata
            .scalar_types
            .0
            .get(t)
            .ok_or(Error::ScalarTypeNotFound(t.clone()))
    }
}

impl FieldsInfo<'_> {
    /// Lookup a column in a collection.
    pub fn lookup_column(&self, column_name: &models::FieldName) -> Result<ColumnInfo, Error> {
        match self {
            FieldsInfo::Table { name, info } => info
                .columns
                .get(column_name.as_str())
                .map(|column_info| ColumnInfo {
                    name: sql::ast::ColumnName(column_info.name.clone()),
                    r#type: column_info.r#type.clone(),
                })
                .ok_or_else(|| {
                    Error::ColumnNotFoundInCollection(column_name.clone(), (*name).clone())
                }),
            FieldsInfo::NativeQuery { name, info } => info
                .columns
                .get(column_name)
                .map(|column_info| ColumnInfo {
                    name: sql::ast::ColumnName(column_info.name.clone()),
                    r#type: column_info.r#type.clone(),
                })
                .ok_or_else(|| {
                    Error::ColumnNotFoundInCollection(column_name.clone(), name.as_str().into())
                }),
            FieldsInfo::CompositeType { name, info } => info
                .fields
                .get(column_name)
                .map(|field_info| ColumnInfo {
                    name: sql::ast::ColumnName(field_info.field_name.clone()),
                    r#type: field_info.r#type.clone(),
                })
                .ok_or_else(|| {
                    Error::ColumnNotFoundInCollection(column_name.clone(), name.as_str().into())
                }),
        }
    }
}

impl CollectionInfo<'_> {
    /// Lookup a column in a collection.
    pub fn lookup_column(&self, column_name: &models::FieldName) -> Result<ColumnInfo, Error> {
        FieldsInfo::from(self).lookup_column(column_name)
    }
}

impl CompositeTypeInfo<'_> {
    pub fn type_name(&self) -> &str {
        match self {
            CompositeTypeInfo::Table { name, .. } => name.as_str(),
            CompositeTypeInfo::CompositeType { name, .. } => name.as_str(),
        }
    }

    pub fn schema_name(&self) -> Option<&String> {
        match self {
            CompositeTypeInfo::Table { info, .. } => Some(&info.schema_name),
            CompositeTypeInfo::CompositeType { info, .. } => info.schema_name.as_ref(),
        }
    }

    /// Fetch all the field names (external, internal) of a composite type.
    pub fn fields(&self) -> Vec<(String, &String)> {
        match self {
            CompositeTypeInfo::CompositeType { name: _, info } => info
                .fields
                .iter()
                .map(|(name, field)| (name.clone().into(), &field.field_name))
                .collect::<Vec<_>>(),

            CompositeTypeInfo::Table { name: _, info } => info
                .columns
                .iter()
                .map(|(name, column)| (name.clone().into(), &column.name))
                .collect::<Vec<_>>(),
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

    /// When variables are passed to the query, create an alias for the variables table and
    /// a from clause.
    pub fn make_variables_table(
        &mut self,
        variables: &Option<Vec<BTreeMap<models::VariableName, serde_json::Value>>>,
    ) -> Option<(sql::ast::From, sql::ast::TableReference)> {
        if variables.is_none() {
            None
        } else {
            let variables_table_alias = self.make_table_alias("%variables_table".to_string());
            let table_reference =
                sql::ast::TableReference::AliasedTable(variables_table_alias.clone());
            Some((
                sql::helpers::from_variables(variables_table_alias),
                table_reference,
            ))
        }
    }

    /// Introduce a new native query to the generated sql.
    pub fn insert_native_query(
        &mut self,
        name: &models::CollectionName,
        info: metadata::NativeQueryInfo,
        arguments: BTreeMap<models::ArgumentName, models::Argument>,
    ) -> sql::ast::TableReference {
        let alias = self.make_native_query_table_alias(name.as_str());
        self.native_queries.native_queries.push(NativeQueryInfo {
            info,
            arguments,
            alias: alias.clone(),
        });
        sql::ast::TableReference::AliasedTable(alias)
    }

    /// Fetch the tracked native queries used in the query plan and their table alias,
    /// and the global table index.
    pub fn get_native_queries_and_global_index(self) -> (Vec<NativeQueryInfo>, TableAliasIndex) {
        (self.native_queries.native_queries, self.global_table_index)
    }

    // aliases

    /// Create table aliases using this function so they get a unique index.
    pub fn make_table_alias(&mut self, name: String) -> sql::ast::TableAlias {
        self.global_table_index.make_table_alias(name)
    }

    /// Create a table alias for left outer join lateral part.
    /// Provide an index and a source table name so we avoid name clashes,
    /// and get an alias.
    pub fn make_relationship_table_alias(&mut self, name: &str) -> sql::ast::TableAlias {
        self.make_table_alias(format!("RELATIONSHIP_{name}"))
    }

    /// Create a table alias for order by target part.
    /// Provide an index and a source table name (to disambiguate the table being queried),
    /// and get an alias.
    pub fn make_order_path_part_table_alias(&mut self, table_name: &str) -> sql::ast::TableAlias {
        self.make_table_alias(format!("ORDER_PART_{table_name}"))
    }

    /// Create a table alias for order by column.
    /// Provide an index and a source table name (to point at the table being ordered),
    /// and get an alias.
    pub fn make_order_by_table_alias(&mut self, source_table_name: &str) -> sql::ast::TableAlias {
        self.make_table_alias(format!("ORDER_FOR_{source_table_name}"))
    }

    pub fn make_native_query_table_alias(&mut self, name: &str) -> sql::ast::TableAlias {
        self.make_table_alias(format!("NATIVE_QUERY_{name}"))
    }

    /// Create a table alias for boolean expressions.
    /// Provide state for fresh names and a source table name (to point at the table
    /// being filtered), and get an alias.
    pub fn make_boolean_expression_table_alias(
        &mut self,
        source_table_name: &str,
    ) -> sql::ast::TableAlias {
        self.make_table_alias(format!("BOOLEXP_{source_table_name}"))
    }
}

impl TableAliasIndex {
    /// increment the table index and return the current one.
    fn next_global_table_index(&mut self) -> TableAliasIndex {
        let index = self.0;
        *self = TableAliasIndex(index + 1);
        TableAliasIndex(index)
    }

    /// Create table aliases using this function so they get a unique index.
    pub fn make_table_alias(&mut self, name: String) -> sql::ast::TableAlias {
        sql::ast::TableAlias {
            unique_index: self.next_global_table_index().0,
            name,
        }
    }
}

impl NativeQueries {
    fn new() -> NativeQueries {
        NativeQueries {
            native_queries: vec![],
        }
    }
}

/// A newtype wrapper around an ndc-spec type which represents accessing a nested field.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct FieldPath(pub Vec<models::FieldName>);

impl From<&Option<Vec<models::FieldName>>> for FieldPath {
    fn from(field_path: &Option<Vec<models::FieldName>>) -> Self {
        FieldPath(match field_path {
            // The option has no logical function other than to avoid breaking changes.
            None => vec![],
            Some(vec) => vec.clone(),
        })
    }
}

/// Fold an expression inside of a chain of field path accessors.
pub fn wrap_in_field_path(
    field_path: &FieldPath,
    expression: sql::ast::Expression,
) -> sql::ast::Expression {
    field_path.0.iter().fold(expression, |expression, field| {
        sql::ast::Expression::NestedFieldSelect {
            expression: Box::new(expression),
            nested_field: sql::ast::NestedField(field.clone().into()),
        }
    })
}

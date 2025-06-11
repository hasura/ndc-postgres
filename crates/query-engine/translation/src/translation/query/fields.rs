//! Handle 'rows' and 'aggregates' translation.

use std::collections::BTreeMap;

use indexmap::indexmap;
use indexmap::IndexMap;

use ndc_models as models;

use super::relationships;
use crate::translation::error::Error;
use crate::translation::error::UnsupportedCapabilities;
use crate::translation::helpers::FieldPath;
use crate::translation::helpers::FieldsInfo;
use crate::translation::helpers::TableSource;
use crate::translation::helpers::{ColumnInfo, Env, State, TableSourceAndReference};
use query_engine_metadata::metadata::{Type, TypeRepresentation};
use query_engine_sql::sql;

/// Translate the field-selection of a query to SQL.
/// Because field selection may be nested this function is mutually recursive with
/// 'translate_nested_field'.
pub(crate) fn translate(
    env: &Env,
    state: &mut State,
    fields: IndexMap<models::FieldName, models::Field>,
    current_table: &TableSourceAndReference,
    from: sql::ast::From,
    join_relationship_fields: &mut Vec<relationships::JoinFieldInfo>,
) -> Result<sql::ast::Select, Error> {
    // find the table according to the metadata.
    let fields_info = env.lookup_fields_info(&current_table.source)?;

    // Each nested field is computed in one joined-on sub query.
    let mut nested_field_joins: Vec<JoinNestedFieldInfo> = vec![];

    let columns: Vec<(sql::ast::ColumnAlias, sql::ast::Expression)> = fields
        .into_iter()
        .map(|(alias, field)| match field {
            models::Field::Column {
                column,
                fields: None,
                arguments,
            } if arguments.is_empty() => unpack_and_wrap_fields(
                env,
                state,
                current_table,
                &column,
                sql::helpers::make_column_alias(alias.to_string()),
                &fields_info,
                &mut nested_field_joins,
            ),
            models::Field::Column {
                column,
                fields: Some(nested_field),
                arguments,
            } if arguments.is_empty() => {
                let column_info = fields_info.lookup_column(&column)?;
                let (nested_field_join, nested_column_reference) = translate_nested_field(
                    env,
                    state,
                    current_table,
                    &column,
                    &column_info,
                    nested_field,
                )?;

                nested_field_joins.push(nested_field_join);

                Ok((
                    sql::helpers::make_column_alias(alias.to_string()),
                    sql::ast::Expression::ColumnReference(nested_column_reference),
                ))
            }
            models::Field::Column {
                column: _,
                fields: _,
                arguments: _,
            } => Err(Error::CapabilityNotSupported(
                UnsupportedCapabilities::FieldArguments,
            )),
            models::Field::Relationship {
                query,
                relationship,
                arguments,
            } => {
                let table_alias = state.make_relationship_table_alias(alias.as_str());
                let column_alias = sql::helpers::make_column_alias(alias.to_string());
                let column_name = sql::ast::ColumnReference::AliasedColumn {
                    table: sql::ast::TableReference::AliasedTable(table_alias.clone()),
                    column: column_alias.clone(),
                };
                join_relationship_fields.push(relationships::JoinFieldInfo {
                    table_alias,
                    column_alias: column_alias.clone(),
                    relationship_name: relationship,
                    arguments,
                    query: *query,
                });
                Ok((
                    column_alias,
                    sql::ast::Expression::ColumnReference(column_name),
                ))
            }
        })
        .collect::<Result<Vec<_>, Error>>()?;

    let mut select = sql::helpers::simple_select(columns);

    select.from = Some(from);

    select
        .joins
        .extend(translate_nested_field_joins(nested_field_joins));

    Ok(select)
}

/// This type collects the salient parts of joined-on subqueries that compute the result of a
/// nested field selection.
#[derive(Debug)]
struct JoinNestedFieldInfo {
    select: sql::ast::Select,
    alias: sql::ast::TableAlias,
}

/// Translate a list of nested field joins into lateral joins.
fn translate_nested_field_joins(joins: Vec<JoinNestedFieldInfo>) -> Vec<sql::ast::Join> {
    joins
        .into_iter()
        .map(|JoinNestedFieldInfo { select, alias }| {
            sql::ast::Join::LeftOuterJoinLateral(sql::ast::LeftOuterJoinLateral {
                select: Box::new(select),
                alias,
            })
        })
        .collect()
}

/// Translate a nested field selection.
///
/// Nested fields are different from relationships in that the value of a nested field is already
/// available on the current table as a column of composite type.
///
/// A nested field selection translates to a JOIN clause in the form of:
///
///   LEFT OUTER JOIN LATERAL (
///     SELECT
///       <collect_expression> AS "collected"
///     FROM
///       (
///         < select of translate_fields(fields, nested_field_binding_alias, ... )
///           which includes joins from recursive calls>
///         FROM
///           (
///             SELECT
///               (<field_binding_expression>).*
///           ) AS <nested_field_binding> ON ('true')
///       ) AS <nested_fields>
///   ) AS <nested_fields_collect> ON ('true')
///
/// Alongside the column reference `<nested_fields_collect>."collected"`
///
/// When the nested field is an object:
///   - <collect_expression> is `row_to_json(<nested_fields>)`
///   - <field_binding_expression> is `<current_table>.<current_column>`
///
/// When the nested field is an array:
///   - <collect_expression> is `json_agg(row_to_json(<nested_fields>))`
///   - <field_binding_expression> is `unnest(<current_table>.<current_column>)`
///
/// # Arguments
///
/// * `current_table` - the table reference the column lives on
/// * `current_column` - the column to extract nested fields from
fn translate_nested_field(
    env: &Env,
    state: &mut State,
    current_table: &TableSourceAndReference,
    current_column_name: &models::FieldName,
    current_column: &ColumnInfo,
    field: models::NestedField,
) -> Result<(JoinNestedFieldInfo, sql::ast::ColumnReference), Error> {
    let nested_field_column_collect_alias =
        sql::helpers::make_column_alias("collected".to_string());
    let nested_fields_alias = state.make_table_alias("nested_fields".to_string());

    // How we project and collect nested fields depend on whether the nested value is an object or
    // an array.
    let (collect_expression, field_binding_expression, nested_field_type_name, fields) = match field
    {
        models::NestedField::Object(models::NestedObject { fields }) => {
            // SELECT row_to_json(nested_fields.*)
            let collect_expression = sql::ast::Expression::RowToJson(
                sql::ast::TableReference::AliasedTable(nested_fields_alias.clone()),
            );

            // In order to bring the nested fields into scope for sub selections
            // we need to unpack them as selected columns of a bound relation.
            //
            // This becomes the SQL
            // ```
            //   SELECT
            //     ("%0_<current table>"."<composite column>").*
            // ```
            let field_binding_expression =
                sql::ast::Expression::ColumnReference(sql::ast::ColumnReference::AliasedColumn {
                    table: current_table.reference.clone(),
                    column: sql::helpers::make_column_alias(current_column.name.0.clone()),
                });

            let nested_field_type_name = match &current_column.r#type {
                Type::CompositeType(type_name) => Ok(type_name.clone()),
                t => Err(Error::NestedFieldNotOfCompositeType {
                    field_name: current_column_name.clone(),
                    actual_type: t.clone(),
                }),
            }?;
            Ok((
                collect_expression,
                field_binding_expression,
                nested_field_type_name,
                fields,
            ))
        }
        models::NestedField::Array(models::NestedArray { fields }) => {
            match *fields {
                models::NestedField::Array(models::NestedArray { .. }) => {
                    Err(Error::NestedArraysNotSupported {
                        field_name: current_column_name.clone(),
                    })
                }
                models::NestedField::Object(models::NestedObject { fields }) => {
                    // SELECT json_agg(row_to_json(nested_fields.*))
                    let collect_expression = sql::ast::Expression::FunctionCall {
                        function: sql::ast::Function::JsonAgg,
                        args: vec![sql::ast::Expression::RowToJson(
                            sql::ast::TableReference::AliasedTable(nested_fields_alias.clone()),
                        )],
                    };

                    // In order to bring the nested fields into scope for sub selections
                    // we need to unpack them as selected columns of a bound relation.
                    //
                    // This becomes the SQL
                    // ```
                    //   SELECT
                    //     (unnest("%0_<current table>"."<composite column>")).*
                    // ```
                    let field_binding_expression = sql::ast::Expression::FunctionCall {
                        function: sql::ast::Function::Unnest,
                        args: vec![sql::ast::Expression::ColumnReference(
                            sql::ast::ColumnReference::AliasedColumn {
                                table: current_table.reference.clone(),
                                column: sql::helpers::make_column_alias(
                                    current_column.name.0.clone(),
                                ),
                            },
                        )],
                    };

                    let nested_field_type_name = match &current_column.r#type {
                        Type::ArrayType(element_type) => match **element_type {
                            Type::CompositeType(ref type_name) => Ok(type_name.clone()),
                            ref t => Err(Error::NestedFieldNotOfCompositeType {
                                field_name: current_column_name.clone(),
                                actual_type: t.clone(),
                            }),
                        },
                        t => Err(Error::NestedFieldNotOfArrayType {
                            field_name: current_column_name.clone(),
                            actual_type: t.clone(),
                        }),
                    }?;
                    Ok((
                        collect_expression,
                        field_binding_expression,
                        nested_field_type_name,
                        fields,
                    ))
                }
                ndc_models::NestedField::Collection(_) => Err(Error::CapabilityNotSupported(
                    UnsupportedCapabilities::NestedCollectionFields,
                )),
            }
        }
        ndc_models::NestedField::Collection(_) => Err(Error::CapabilityNotSupported(
            UnsupportedCapabilities::NestedCollectionFields,
        )),
    }?;

    // The recursive call to the next layer of fields
    let (nested_field_table_reference, nested_field_binding_alias) = {
        let (collection_name, FieldPath(mut field_path)) =
            current_table.source.collection_name_and_field_path();
        field_path.push(current_column_name.clone());
        let source = TableSource::NestedField {
            collection_name,
            type_name: nested_field_type_name,
            field_path: FieldPath(field_path),
        };
        let nested_field_binding_alias = state.make_table_alias(source.name_for_alias());
        (
            TableSourceAndReference {
                source,
                reference: sql::ast::TableReference::AliasedTable(
                    nested_field_binding_alias.clone(),
                ),
            },
            nested_field_binding_alias,
        )
    };
    // The FROM-clause to use for the next layer of fields returned by `translate_fields` below,
    // which brings each nested field into scope as separate columns in a sub query.
    let nested_field_from = sql::ast::From::Select {
        select: Box::new(sql::helpers::select_composite(field_binding_expression)),
        alias: nested_field_binding_alias,
    };

    // join aliases
    let mut join_relationship_fields: Vec<relationships::JoinFieldInfo> = vec![];

    let mut fields_select = translate(
        env,
        state,
        fields,
        &nested_field_table_reference,
        nested_field_from,
        &mut join_relationship_fields,
    )?;

    // collect any joins for relationships from fields selection.
    let relationship_joins = relationships::translate(
        env,
        state,
        &nested_field_table_reference,
        join_relationship_fields,
    )?;

    fields_select.joins.extend(relationship_joins);

    // The top-level select statement which collects the fields at the next level of nesting into a
    // single json object.
    let mut collect_select = sql::helpers::simple_select(vec![(
        nested_field_column_collect_alias.clone(),
        collect_expression,
    )]);

    collect_select.from = Some(sql::ast::From::Select {
        select: Box::new(fields_select),
        alias: nested_fields_alias,
    });

    // The JOIN clause plus alias that our caller will use to query and select the composite field
    // json value this function produced.
    let nested_field_table_collect_alias =
        state.make_table_alias("nested_fields_collect".to_string());

    let nested_field_join = JoinNestedFieldInfo {
        select: collect_select,
        alias: nested_field_table_collect_alias.clone(),
    };

    Ok((
        nested_field_join,
        sql::ast::ColumnReference::AliasedColumn {
            table: sql::ast::TableReference::AliasedTable(nested_field_table_collect_alias),
            column: nested_field_column_collect_alias,
        },
    ))
}

#[allow(clippy::too_many_arguments)]
/// In order to return the expected type representation for each column,
/// we need to wrap columns in type representation cast, and unpack composite types
/// so we can wrap them.
fn unpack_and_wrap_fields(
    env: &Env,
    state: &mut State,
    current_table: &TableSourceAndReference,
    column: &models::FieldName,
    alias: sql::ast::ColumnAlias,
    fields_info: &FieldsInfo<'_>,
    nested_field_joins: &mut Vec<JoinNestedFieldInfo>,
) -> Result<(sql::ast::ColumnAlias, sql::ast::Expression), Error> {
    let column_info = fields_info.lookup_column(column)?;

    // Different kinds of types have different strategy for converting to their
    // type representation.
    match column_info.r#type {
        // Scalar types can just be wrapped in a cast.
        Type::ScalarType(scalar_type) => {
            let column_type_representation = env.lookup_type_representation(&scalar_type);
            let (alias, expression) = sql::helpers::make_column(
                current_table.reference.clone(),
                column_info.name.clone(),
                alias,
            );
            Ok((
                alias,
                wrap_in_type_representation(expression, column_type_representation),
            ))
        }
        // Composite types are a more involved case because we cannot just "cast"
        // a composite type, we need to unpack it and cast the individual fields.
        // In this case, we unpack a single composite column selection to an explicit
        // selection of all fields.
        Type::CompositeType(ref composite_type) => {
            // build a nested field selection of all fields.
            let nested_field = unpack_composite_type(env, composite_type)?;

            // translate this as if it is a nested field selection.
            let (nested_field_join, nested_column_reference) = translate_nested_field(
                env,
                state,
                current_table,
                column,
                &column_info,
                nested_field,
            )?;

            nested_field_joins.push(nested_field_join);

            Ok((
                alias,
                sql::ast::Expression::ColumnReference(nested_column_reference),
            ))
        }
        Type::ArrayType(ref type_boxed) => match **type_boxed {
            Type::ArrayType(_) => Err(Error::NestedArraysNotSupported {
                field_name: column.clone(),
            }),
            Type::CompositeType(ref composite_type) => {
                // build a nested field selection of all fields.
                let nested_field = models::NestedField::Array(models::NestedArray {
                    fields: Box::new(unpack_composite_type(env, composite_type)?),
                });

                let (nested_field_join, nested_column_reference) = translate_nested_field(
                    env,
                    state,
                    current_table,
                    column,
                    &column_info,
                    nested_field,
                )?;

                nested_field_joins.push(nested_field_join);

                Ok((
                    alias,
                    sql::ast::Expression::ColumnReference(nested_column_reference),
                ))
            }
            Type::ScalarType(ref scalar_type) => {
                let inner_column_type_representation = env.lookup_type_representation(scalar_type);
                let (alias, expression) = sql::helpers::make_column(
                    current_table.reference.clone(),
                    column_info.name.clone(),
                    alias,
                );
                Ok((
                    alias,
                    wrap_array_in_type_representation(expression, inner_column_type_representation),
                ))
            }
        },
    }
}

/// Certain type representations require that we provide a different json representation
/// than what postgres will return.
/// For array columns of those type representation, we wrap the result in a cast.
fn wrap_array_in_type_representation(
    expression: sql::ast::Expression,
    column_type_representation: Option<&TypeRepresentation>,
) -> sql::ast::Expression {
    match column_type_representation {
        None => expression,
        Some(type_rep) => {
            if let Some(cast_type) = get_type_representation_cast_type(type_rep) {
                sql::ast::Expression::Cast {
                    expression: Box::new(expression),
                    // make it an array of cast type
                    r#type: sql::ast::ScalarType::ArrayType(cast_type),
                }
            } else {
                expression
            }
        }
    }
}

/// Certain type representations require that we provide a different json representation
/// than what postgres will return.
/// For columns of those type representation, we wrap the result in a cast.
fn wrap_in_type_representation(
    expression: sql::ast::Expression,
    column_type_representation: Option<&TypeRepresentation>,
) -> sql::ast::Expression {
    match column_type_representation {
        None => expression,
        Some(type_rep) => {
            if let Some(cast_type) = get_type_representation_cast_type(type_rep) {
                sql::ast::Expression::Cast {
                    expression: Box::new(expression),
                    r#type: sql::ast::ScalarType::BaseType(cast_type),
                }
            } else {
                expression
            }
        }
    }
}

/// If a type representation requires a cast, return the scalar type name.
fn get_type_representation_cast_type(
    type_representation: &TypeRepresentation,
) -> Option<sql::ast::ScalarTypeName> {
    match type_representation {
        // In these situations, we expect to cast the expression according
        // to the type representation.
        TypeRepresentation::Int64AsString | TypeRepresentation::BigDecimalAsString => {
            Some(sql::helpers::text_type_name())
        }

        // In these situations the type representation should be the same as
        // the expression, so we don't cast it.
        TypeRepresentation::Boolean
        | TypeRepresentation::String
        | TypeRepresentation::Float32
        | TypeRepresentation::Float64
        | TypeRepresentation::Int16
        | TypeRepresentation::Int32
        | TypeRepresentation::Int64
        | TypeRepresentation::BigDecimal
        | TypeRepresentation::Timestamp
        | TypeRepresentation::Timestamptz
        | TypeRepresentation::Time
        | TypeRepresentation::Timetz
        | TypeRepresentation::Date
        | TypeRepresentation::UUID
        | TypeRepresentation::Geography
        | TypeRepresentation::Geometry
        | TypeRepresentation::Json
        | TypeRepresentation::Enum(_) => None,
    }
}

/// Create an explicit NestedField that selects all fields (1 level) of a composite type.
fn unpack_composite_type(
    env: &Env,
    composite_type: &models::TypeName,
) -> Result<models::NestedField, Error> {
    Ok(models::NestedField::Object({
        let composite_type = env.lookup_composite_type(composite_type)?;
        let mut fields = indexmap!();
        for (result_name, field_name) in composite_type.fields() {
            fields.insert(
                result_name.into(),
                models::Field::Column {
                    column: field_name.as_str().into(),
                    fields: None,
                    arguments: BTreeMap::new(),
                },
            );
        }
        models::NestedObject { fields }
    }))
}

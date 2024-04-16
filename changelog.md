# Changelog

## [Unreleased]

### Added

### Changed

### Fixed

## [v0.6.0] - 2024-04-16

### Added

- Support nested field selection.
  ([#404](https://github.com/hasura/ndc-postgres/pull/404))
  ([#409](https://github.com/hasura/ndc-postgres/pull/409))
- Expose the type representation of base types and domain types.
  ([#398](https://github.com/hasura/ndc-postgres/pull/398))
- Expose the type representation of enums via the ndc schema.
  ([#397](https://github.com/hasura/ndc-postgres/pull/397))

### Changed

- Support ndc-spec v0.1.2 and change the type representation of types accordingly.
  ([#408](https://github.com/hasura/ndc-postgres/pull/408))
- `int8` and `numeric` columns will now emit a string json representation by default.
  ([#416](https://github.com/hasura/ndc-postgres/pull/416))
- Enforce read-onlyness without transactions.
  ([#421](https://github.com/hasura/ndc-postgres/pull/421))

### Fixed

- Fix schema conflict result_type for native query mutations.
  ([#405](https://github.com/hasura/ndc-postgres/pull/405))
- The CLI plugin no longer requires the Visual C++ Redistributable on Windows.
  ([#417](https://github.com/hasura/ndc-postgres/pull/417))
- Include additional schemas for types by default.
  ([#420](https://github.com/hasura/ndc-postgres/pull/420))
- Remove the 'Caused by' section in the error message of the cli.
  ([#424](https://github.com/hasura/ndc-postgres/pull/424))

## [v0.5.2] - 2024-03-29

### Added

- Make operators of domain types available via implicit casts.
  ([#392](https://github.com/hasura/ndc-postgres/pull/392))
- Support introspection composite types.
  ([#391](https://github.com/hasura/ndc-postgres/pull/391))
- Support enum types in the configuration.
  ([#387](https://github.com/hasura/ndc-postgres/pull/387))
- Make aggregation functions available through implicit casts in the configuration.
  ([#381](https://github.com/hasura/ndc-postgres/pull/381))
- Support for introspecting domain types.
  ([#380](https://github.com/hasura/ndc-postgres/pull/380))

### Changed

- Support ndc-spec 0.1.1.
  ([#390](https://github.com/hasura/ndc-postgres/pull/390))

### Fixed

## [v0.5.1] - 2024-03-21

### Added

- Support for reading Native Query SQL from files.
  ([#372](https://github.com/hasura/ndc-postgres/pull/372))

### Changed

- Do not print information about when the cli decides not to write to a file.
  ([#365](https://github.com/hasura/ndc-postgres/pull/365))

### Fixed

- Refer to the right column name in the schema endpoint.
  ([#366](https://github.com/hasura/ndc-postgres/pull/366))
- The CLI now supports older versions of glibc, so is more likely to work on
  older operating systems (e.g. Ubuntu 20.04 Focal).
  ([#373](https://github.com/hasura/ndc-postgres/pull/373))

## [v0.5.0] - 2024-03-14

### Added

- The CLI plugin now integrates with the DDN CLI's `watch` functionality.
  ([#360](https://github.com/hasura/ndc-postgres/pull/360))

### Changed

- The default connection pool settings will now be written to the configuration file
  upon initialization
  ([#351](https://github.com/hasura/ndc-postgres/pull/351))
- The ndc-postgres-cli `initialize` command will now generate
  the jsonschema of the configuration format as well.
  ([#361](https://github.com/hasura/ndc-postgres/pull/361))
- The ndc-postgres-cli `update` command will check that the configuration file has
  not changed in the middle of the introspection process, will retry if it did,
  and will not write the introspection result to file if the configuration file is already up to date.
  ([#362](https://github.com/hasura/ndc-postgres/pull/362))
- A few fields in the configuration format has been changed:

  - `configureOptions` was renamed to `introspectionOptions`
  - `connectionUri`, `poolSettings` and `isolationLevel` are now nested under `connectionSettings`
  - `mutationsVersion` was moved from `configureOptions` to the top-level
  - A new field was added: `$schema` references the jsonschema of the configuration format

  ([#361](https://github.com/hasura/ndc-postgres/pull/361))

## [v0.4.1] - 2024-03-06

### Fixed

- The Docker image's default command is now `serve` so it can be run without
  arguments, in line with the connector specification.
  ([#345](https://github.com/hasura/ndc-postgres/pull/345))
- The connector manifest has been fixed to refer to the CLI plugin by name.
  ([#344](https://github.com/hasura/ndc-postgres/pull/344))

## [v0.4.0] - 2024-03-04

### Added

- There is now a CLI plugin for the Hasura v3 CLI, which allows the CLI to
  automatically introspect the database on demand.
  ([#307](https://github.com/hasura/ndc-postgres/pull/307) and
  [#312](https://github.com/hasura/ndc-postgres/pull/312))
- Support for explaining mutations via the `/mutation/explain` endpoint.
  ([#283](https://github.com/hasura/ndc-postgres/pull/283))
- Support filtering using `in` by columns and variables.
  ([#283](https://github.com/hasura/ndc-postgres/pull/283))

### Changed

- We have upgraded to [ndc-spec v0.1.0], which demands a few changes:
  - The `equal` and `in` operators are now understood by the spec, and are
    integrated accordingly.
    ([#304](https://github.com/hasura/ndc-postgres/pull/304))
  - Procedures, which previously had a built-in response structure in ndc-spec,
    now return a nested field structure instead.
    ([#296](https://github.com/hasura/ndc-postgres/pull/296))
- Version 1 and 2 of the configuration and NDC metadata have been deprecated
  and removed.
- Configuration is now a file, `configuration.json`, in the specified
  configuration directory. It is now version 3, but little has changed from
  version 2. This brings ndc-postgres in line with the connector specification.
  ([#305](https://github.com/hasura/ndc-postgres/pull/305))
- When configuration is initialized, it is expected that the connection URI will
  now be specified using an environment variable, instead of written directly.
  This can be overridden.
  ([#325](https://github.com/hasura/ndc-postgres/pull/325))
- The default port was changed from 8100 to 8080. This is configurable with
  the `HASURA_CONNECTOR_PORT` environment variable.
- Types and procedures are only supported in unqualified schemas, specified in
  `unqualifiedSchemasForTypesAndProcedures`.
  ([#271](https://github.com/hasura/ndc-postgres/pull/271))
- The configuration server has been removed in favor of a cli interface.
  ([#307](https://github.com/hasura/ndc-postgres/pull/307) and
  [#312](https://github.com/hasura/ndc-postgres/pull/312))

### Fixed

- Fix queries including an IN operator on an empty list.
  ([#309](https://github.com/hasura/ndc-postgres/pull/309))

[ndc-spec v0.1.0]: https://github.com/hasura/ndc-spec/releases/tag/v0.1.0

## [v0.3.0] - 2024-01-31

### Added

- Basic support for auto-generated insert procedures for tables.
  ([#261](https://github.com/hasura/ndc-postgres/pull/261))
- Support for composite types in inputs and outputs. Right now, no operators are
  provided for composite types, and there is no automatic introspection.
  ([#240](https://github.com/hasura/ndc-postgres/pull/240))
- Support for composite types and arrays in variables.
  ([#249](https://github.com/hasura/ndc-postgres/pull/249))
  ([#263](https://github.com/hasura/ndc-postgres/pull/263))
- When explaining a query without variables (such as when joining across a
  remote relationship), explaining now still provides the generated SQL, and
  omits the `EXPLAIN` result from PostgreSQL.
  ([#241](https://github.com/hasura/ndc-postgres/pull/241))

### Changed

- Native query mutations are now marked as procedures instead of collections
  ([#234](https://github.com/hasura/ndc-postgres/pull/234))
- Introspection now avoids `DISTINCT ON` to be more compatible with PostgreSQL
  variants
  ([#260](https://github.com/hasura/ndc-postgres/pull/260))
- Invalid request, constraint not met, and unprocessable content errors are
  emitted at the relevant scenarios
  ([#239](https://github.com/hasura/ndc-postgres/pull/239))

## [v0.2.0] - 2023-12-21

### Added

- Support for introspecting prefix-functions as comparison operators ([#223](https://github.com/hasura/ndc-postgres/pull/223))
- Support prefix functions as comparison operators ([#220](https://github.com/hasura/ndc-postgres/pull/223))
- Support queries without fields specified. ([#209](https://github.com/hasura/ndc-postgres/pull/209))
- Query transactions now run in read-only mode, and allow transaction isolation level configuration. ([#209](https://github.com/hasura/ndc-postgres/pull/209), [#212](https://github.com/hasura/ndc-postgres/pull/212))
- Support variables as arguments to native queries ([#211](https://github.com/hasura/ndc-postgres/pull/211))
- Introduce version 2 of connector deployment configuration. ([#208](https://github.com/hasura/ndc-postgres/pull/208))
- Support array types ([#191](https://github.com/hasura/ndc-postgres/pull/191), ...)
- Support Native Query Mutations ([#189](https://github.com/hasura/ndc-postgres/pull/189), [#198](https://github.com/hasura/ndc-postgres/pull/198), [#222](https://github.com/hasura/ndc-postgres/pull/222))

## [v0.1.0] - 2023-11-29

Initial release.

<!-- end -->

[Unreleased]: https://github.com/hasura/ndc-postgres/compare/v0.6.0...HEAD
[v0.6.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.6.0
[v0.5.2]: https://github.com/hasura/ndc-postgres/releases/tag/v0.5.2
[v0.5.1]: https://github.com/hasura/ndc-postgres/releases/tag/v0.5.1
[v0.5.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.5.0
[v0.4.1]: https://github.com/hasura/ndc-postgres/releases/tag/v0.4.1
[v0.4.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.4.0
[v0.3.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.3.0
[v0.2.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.2.0
[v0.1.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.1.0

# Changelog

## [Unreleased]

### Added

- Support ndc-spec-0.1.0.rc16 and introduce version 3 of the ndc-metadata.

### Changed

- Version 1 and 2 of the ndc-metadata have been deprecated and removed.
- The default port was changed from 8100 to 8080. This is configurable with
  the `HASURA_CONNECTOR_PORT` environment variable.

### Fixed

- Fix queries including an IN operator on an empty list.
  ([#309](https://github.com/hasura/ndc-postgres/pull/309))

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

[Unreleased]: https://github.com/hasura/ndc-postgres/compare/v0.3.0...HEAD
[v0.3.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.3.0
[v0.2.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.2.0
[v0.1.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.1.0

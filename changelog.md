# Changelog

## [Unreleased]

## [0.3.0] - 2023-01-31

### Added

- Basic support for auto-generated insert procedures for tables.
  ([#261](https://github.com/hasura/ndc-postgres/pull/261))
- Support for composite types in inputs and outputs. Transformations are not yet
  supported.
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
- Introspection now avoids `DISTINCT ON` to be more compatible with PostgreSQL variants
  ([#260](https://github.com/hasura/ndc-postgres/pull/260))

## [0.2.0] - 2023-12-21

### Added

- Support auto-generating insert procedures v1
  ([#261](https://github.com/hasura/ndc-postgres/pull/261))
- Return the generated SQL of an explain request with empty variables
  ([#241](https://github.com/hasura/ndc-postgres/pull/241))
- Emit invalid request, constraint not met, and unprocessable content errors at the relevant scenarios
  ([#239](https://github.com/hasura/ndc-postgres/pull/239))

### Added

- Support for introspecting prefix-functions as comparison operators ([#223](https://github.com/hasura/ndc-postgres/pull/223))
- Support prefix functions as comparison operators ([#220](https://github.com/hasura/ndc-postgres/pull/223))
- Support queries without fields specified. ([#209](https://github.com/hasura/ndc-postgres/pull/209))
- Query transactions now run in read-only mode, and allow transaction isolation level configuration. ([#209](https://github.com/hasura/ndc-postgres/pull/209), [#212](https://github.com/hasura/ndc-postgres/pull/212))
- Support variables as arguments to native queries ([#211](https://github.com/hasura/ndc-postgres/pull/211))
- Introduce version 2 of connector deployment configuration. ([#208](https://github.com/hasura/ndc-postgres/pull/208))
- Support array types ([#191](https://github.com/hasura/ndc-postgres/pull/191), ...)
- Support Native Query Mutations ([#189](https://github.com/hasura/ndc-postgres/pull/189), [#198](https://github.com/hasura/ndc-postgres/pull/198), [#222](https://github.com/hasura/ndc-postgres/pull/222))

## [0.1.0] - 2023-11-29

Initial release.

[Unreleased]: https://github.com/hasura/ndc-postgres/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.3.0
[0.2.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.2.0
[0.1.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.1.0

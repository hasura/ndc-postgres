# Changelog

## [Unreleased]

## [0.2.0] - 2023-12-21

### Added

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

[Unreleased]: https://github.com/hasura/ndc-postgres/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.2.0
[0.1.0]: https://github.com/hasura/ndc-postgres/releases/tag/v0.1.0

# Limitations of the PostgreSQL Connector

## Query

- Columns as argument fields in native queries are currently not supported.

## Functions and Procedures

Functions and Procedures are currently not supported.

## Nested types

The connector does not currently support nested data structures, such as `array`, `hstore`, `json`, or `jsonb`, though
they may still work in certain situations.

# Notes on the datamodel of the `pg_catalog` tables

## Overview

`pg_namespace` records the names of schemas. Keyed by `oid`.

`pg_class` records definitions of tables, views etc, _as well as_ record
types. Keyed by `oid`.

`pg_attribute` records the attributes (i.e., columns) of tables etc, but also
of indexes and composite types. Keyed by `oid`. References `pg_class`.

`pg_type` records the scalar types that exist, with some quirks when it comes
to array and record types. Keyed by `oid`. References `pg_namespace`,
`pg_class` (for record types), `pg_types` (self, for arrays).

`pg_constraint` records all types of constraints, and the columns that take
part in them. Keyed by `oid`. References `pg_class`, `pg_attribute.attnum` for
column mappings.

`pg_proc` records all types of functions, (for our purposes) especially
aggregation functions (but not operators, curiously). Keyed by `oid`.
References `pg_type` for argument types (by `oid`).

## On arrays:

### When is a type an array?

Postgres defines both base types and corresponding array types as separate rows in `pg_type`.
These are related by the columns `typelem` and `typarray`, but these need not be in 1:1 correspondance.

Curious examples include:

- `int2vector`, which you can index into and get `int2`s out of, but which is not the true array type of `int2`
- `name`, which you can index into and get `char`s out of, but which is not the 'true' array type of `char`
- `pg_node_tree` which does not have a corresponding array type defined (WHY??)

### When is a type enough of an array for 'ANYARRAY'?

**TL;DR: A type is a 'true' array iff typelem is nonzero and
typsubscript=array_subscript_handler.**

The column 'attndims' purports to be non-zero for arrays, yet this
does not seem to be a solid indicator of array-ness. There are several
examples of columns in pg_catalog tables having attndims=0 but
atttypid corresponding to an array type.

Tracing through the function [get_array_type, get_promoted_array_type]
(https://github.com/postgres/postgres/blob/b0ae29512c2172f88696fe0963dd2a3304dc4972/src/backend/utils/cache/lsyscache.c#L2793),
and 'get*element_type' in 'lsyscache.c' suggests that a 'true' array
is whatever 'pg_type.typarray' points at when non-zero, \_or* whatever
has a non-zero 'pg_type.typelem'.

However, 'IsTrueArrayType'
(https://github.com/postgres/postgres/blob/b0ae29512c2172f88696fe0963dd2a3304dc4972/src/include/catalog/pg_type.h#L331)
is True when 'pg_type.typelem' is non-zero and 'pg_type.typsubscript'
is 'array_subscript_handler'.

Curiously, there are types which do not have corresponding array types defined:

postgres=# create table huh1(s pg_node_tree array);
ERROR: type "pg_node_tree[]" does not exist
LINE 1: create table huh1(s pg_node_tree array);

`check_generic_type_consistency` appears to treat anything which has non-zero
'pg_type.typelem' as being a valid array for the purposes of matching
'ANYARRAY'.

But we can observe that 'select unnest(point(1,2))' fails to find a
matching overload (because it somehow cannot cast from
point->anyarray, even though point has pg_type.typelem=701 (float8)).

I don't understand why though (it seems likely that 'IsTrueArrayType' is
what's at play, but I can't point to it in the code).

The psql-general mailing list was [helpful](https://www.postgresql.org/message-id/flat/CALkT%2BD49rT%2B6Zi_NWhcaARNtcdAnjSKvLKhR%3DmfTE1CuMaSw%3DQ%40mail.gmail.com#bb63495d6b699237d02241c91e85a376):

Tom Lane:

> Per the comments for check_generic_type_consistency:
>
> - 2.  All arguments declared ANYARRAY must have the same datatype,
> - which must be a varlena array type.
>
> If you follow that code down you eventually find that it expects
> get_element_type() to succeed, and that says
>
> - NB: this only succeeds for "true" arrays having array_subscript_handler
> - as typsubscript. For other types, InvalidOid is returned independently
> - of whether they have typelem or typsubscript set.
>
> which is mechanized as an IsTrueArrayType() check.

and

> It has to not only have an element type, but have a standard array
> header, else we don't know how to do a lot of operations on it.
>
> Type "point" and related animals are sort of a poor man's array,
> which is supported for basic subscripting operations, but it's not
> generic enough to be reasonable to consider as an ANYARRAY.

## The column `pg_type.typcategory`

It might be tempting to use `pg_type.typcategory` to determine if a type is an
array. This does mostly work, but the stated purpose of `typcategory` is to
hint the parser about which casts are preferred, and there is at least one
known example where a non-array type is marked as being an array (which is
`topoelement` of PostGIS).

## On polymorphic types:

https://www.postgresql.org/docs/current/extend-type-system.html#EXTEND-TYPES-POLYMORPHIC
explains that occurrences of `anyelement`, `anyarray` are to be interpreted as
(in Hindley-Milner types) as e.g.

- `anyelement -> anyelement` becomes `forall a. a -> a`
- `(anyelement, anyelement) -> anyelement` becomes `forall a. (a,a) -> a`
- `anyarray -> anyelement` becomes `forall a. [a] -> a`

(i.e., there is only ever a single type variable at play)

Many of the actual aggregation function implementations that operate
on polymorphic inputs (such as `array_agg`, `unnest`, etc) do not actually make
type checks themselves, but rely on the parser having done that before them.

In particular, the functions [can_coerce_type]
(https://github.com/postgres/postgres/blob/b0ae29512c2172f88696fe0963dd2a3304dc4972/src/backend/parser/parse_coerce.c#L556)
and [check_generic_type_consistency]
(https://github.com/postgres/postgres/blob/b0ae29512c2172f88696fe0963dd2a3304dc4972/src/backend/parser/parse_coerce.c#L1702)
are interesting for this.

## On the function 'format_type'

(https://www.postgresql.org/docs/current/functions-info.html#FUNCTIONS-INFO-CATALOG-TABLE)
is what turns Postgres native type names (varchar, float8, etc.) into
SQL type names (character varying, double precision).

These names are what appear in the `information_schema` catalog views. We
prefer to use the internal postgres type names however.

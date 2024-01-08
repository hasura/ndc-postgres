
-- This file defines types which are used to test the support of composite
-- types.

CREATE TYPE composite_leaf_type1 AS
  (
    scalar_field_1 int4,
    scalar_field_2 int4
  );

CREATE TYPE composite_leaf_type2 AS
  (
    scalar_field_1 int4,
    scalar_field_2 int4,
    scalar_field_3 int4
  );

CREATE TYPE composite_nested_type AS
  (
    composite_field_1 composite_leaf_type1,
    composite_field_2 composite_leaf_type2
  );

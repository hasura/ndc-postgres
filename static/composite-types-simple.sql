
-- This file defines types which are used to test the support of composite
-- types.

CREATE TYPE person_name AS
  (
    first_name text,
    last_name text
  );

CREATE TYPE person_address AS
  (
    address_line_1 text,
    address_line_2 text
  );

-- The below types and tables serve to show that composite types inform which scalar types are relevant.

CREATE TYPE discoverable_types AS
  (
    only_occurring_here1 int8
  );

CREATE TABLE discoverable_types_root_occurrence
  (
    col discoverable_types
  );

-- We add this because ndc-test is going to check that this table it not empty.
INSERT INTO discoverable_types_root_occurrence(col) VALUES (ROW(1152921504606846976)::discoverable_types);

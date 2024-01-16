
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

CREATE TYPE person AS
  (
    name person_name,
    address person_address
  );

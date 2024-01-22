
-- This file defines types which are used to test the support of composite
-- types.

CREATE TYPE person AS
  (
    name person_name,
    address person_address
  );

CREATE TYPE committee AS
  (
    name text,
    members person_name[]
  );

CREATE TYPE organization AS
  (
    name text,
    committees committee[]
  );


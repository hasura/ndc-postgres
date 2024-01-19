
-- This file defines types which are used to test the support of composite
-- types.

CREATE TYPE person AS
  (
    name person_name,
    address person_address
  );


-- This file defines types which are used to test the support of composite
-- types.

COMMENT ON TYPE person_name IS 'The name of a person, obviously';
COMMENT ON COLUMN person_name.first_name IS 'The first name of a person';
COMMENT ON COLUMN person_name.last_name IS 'The last name of a person';

COMMENT ON TYPE person_address IS 'The address of a person, obviously';
COMMENT ON COLUMN person_address.address_line_1 IS 'Address line No 1';
COMMENT ON COLUMN person_address.address_line_2 IS 'Address line No 2';

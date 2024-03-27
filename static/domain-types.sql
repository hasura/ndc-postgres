-- This file is used to test the support of domain types

CREATE DOMAIN even_number int4 CHECK (VALUE % 2 = 0);

CREATE TABLE even_numbers (the_number even_number NOT NULL);

-- This type tests that we consider implicit casts iteratively. If we didn't
-- "Phone" wouldn't have any comparison operators defined. with iterative
-- implicit casting, Phone gets to inherit the oprators of "text" via the
-- successive casts "Phone -> varchar -> text".
CREATE DOMAIN "Phone" varchar(20);

CREATE TABLE phone_numbers (the_number "Phone" NOT NULL);


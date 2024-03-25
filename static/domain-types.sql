-- This file is used to test the support of domain types

CREATE DOMAIN even_number int4 CHECK (VALUE % 2 = 0);

CREATE TABLE even_numbers (the_number even_number NOT NULL);

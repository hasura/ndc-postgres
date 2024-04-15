
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

CREATE TYPE chara AS
  (
    name text,
    popularity int8
  );

CREATE TYPE characters AS
  (
    name text,
    members chara[]
  );


create table group_leader(id int, name chara, characters characters);

insert into group_leader values
  ( 1,
    ROW('Frodo', 3)::chara,
    ROW('Fellowship',
      ARRAY[ROW('Legolas', 200)::chara, ROW('Gimli', 300)::chara]::chara[]
    )::characters
  );

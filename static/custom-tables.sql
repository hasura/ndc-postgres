-- This file defines custom tables which are used to test the support of less common features.
-- Such as insert into tables with generated columns.

create schema custom;

create table custom.dog (
  id bigint primary key generated always as identity,
  name text not null,
  birthday date default '2024-01-17',
  adopter_name text null,
  height_cm numeric not null,
  height_in numeric GENERATED ALWAYS AS (height_cm / 2.54) STORED
);

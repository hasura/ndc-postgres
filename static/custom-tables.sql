-- This file defines custom tables which are used to test the support of less common features.
-- Such as insert into tables with generated columns.

create schema custom;

create table custom.dog (
  id bigint primary key generated always as identity,
  name text not null,
  birthday date not null default '2024-01-17',
  adopter_name text null,
  height_cm numeric not null,
  height_in numeric GENERATED ALWAYS AS (height_cm / 2.54) STORED
);

create table custom.defaults (
  id bigint primary key generated always as identity,
  birthday date not null default '2024-01-17',
  name text null,
  height_cm numeric not null default 200,
  height_in numeric GENERATED ALWAYS AS (height_cm / 2.54) STORED
);

create table custom.test_cidr (ip CIDR, service text);
insert into custom.test_cidr values('64.6.64.0/24', 'my_service');

-- this table name intentionally conflicts with the scalar `text` type
create table text(id int, content text);

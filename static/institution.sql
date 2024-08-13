-- `institution` table for testing queries into JSON objects

create schema institution;

CREATE TYPE institution.country AS (name text, continent text);

CREATE TYPE institution.location AS (city text, country institution.country, campuses text []);

CREATE TYPE institution.staff AS (
  first_name text,
  last_name text,
  specialities text [],
  favourite_artist_id int
);

CREATE TYPE institution.institution_songs AS (
  primary_anthem_track_id int,
  secondary_anthem_track_id int
);

CREATE TABLE institution.institution (
  id integer NOT NULL,
  name text,
  location institution.location,
  staff institution.staff [],
  departments text [],
  songs institution.institution_songs,
  CONSTRAINT institution_pkey PRIMARY KEY (id)
);

INSERT INTO institution.institution (id, name, location, staff, departments, songs)
VALUES (
    1,
    'Queen Mary University of London',
    ROW(
      'London',
      ROW('UK','Europe') :: institution.country,
      ARRAY ['Mile End','Whitechapel','Charterhouse Square','West Smithfield']
    )::institution.location,
    ARRAY [ROW('Peter','Landin',ARRAY['Computer Science','Education'],
    1
  )::institution.staff ],
  ARRAY ['Humanities and Social Sciences','Science and Engineering','Medicine and Dentistry'],
  ROW(
    2270,
    2271
  )::institution.institution_songs
),
(
  2,
  'Chalmers University of Technology',
  ROW(
    'Gothenburg',
    ROW('Sweden','Europe') :: institution.country,
    ARRAY ['Johanneberg','Lindholmen']
  )::institution.location,
  ARRAY [ROW('John','Hughes',ARRAY['Computer Science','Functional Programming','Software Testing'],
  2
)::institution.staff,
ROW(
  'Koen',
  'Claessen',
  ARRAY ['Computer Science','Functional Programming','Automated Reasoning'],
  3
)::institution.staff ],
ARRAY ['Architecture and Civil Engineering','Computer Science and Engineering','Electrical Engineering','Physics','Industrial and Materials Science'],
ROW(
    3421,
    NULL
  )::institution.institution_songs
)
,(
  3,
  'University of Nowhere',
   null,
  null,
  ARRAY ['nothing',null],
  NULL
);

#!/usr/bin/env bash
set -e -u -o pipefail

# This shell script reinitializes the aurora test database.
# The environment variable AURORA_CONNECTION_STRING (typically set in
# .envrc.local) is assumed to hold the authenticated connection string to the
# writable aurora instance to act on.

# In order to avoid accidental loss of data the database must be suitably empty before proceeding.

number_of_existing_relations="$(
  psql "$AURORA_CONNECTION_STRING" -t <<QUERY
SELECT
  COUNT(*)
FROM pg_class
WHERE
  relnamespace = 'public'::regnamespace
QUERY
)"

if [ "$number_of_existing_relations" != 0 ];
then
  echo "There appears to be ${number_of_existing_relations} relations still left in the \"public\" namespace."
  echo 'Bailing out.'
  exit 1
fi

psql "$AURORA_CONNECTION_STRING" <<DOC

-- Ingesting the Chinook dataset takes about 15 minutes on my machine. I put
-- this down to the file using one INSERT statement per row of data rather than
-- the more efficient COPY command.
-- \i static/chinook-postgres.sql

\i static/composite-types-simple.sql
\i static/composite-types-complex.sql

DOC

#!/usr/bin/env bash
set -e -u -o pipefail

# This shell script reinitializes the aurora test database.
# The environment variable AURORA_CONNECTION_STRING (typically set in
# .envrc.local) is assumed to hold the authenticated connection string to the
# writable aurora instance to act on.

# In order to avoid accidental loss of data the database is assumed to already
# be suitably empty.

psql "$AURORA_CONNECTION_STRING" <<DOC

-- Ingesting the Chinook dataset takes about 15 minutes on my machine. I put
-- this down to the file using one INSERT statement per row of data rather than
-- the more efficient COPY command.
-- \i static/chinook-postgres.sql

\i static/composite-types-simple.sql
\i static/composite-types-complex.sql

DOC

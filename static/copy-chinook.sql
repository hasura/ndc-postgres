-- create a template from the database so we can quickly copy it when
-- we test mutations.
SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'postgres' AND pid <> pg_backend_pid();

CREATE DATABASE chinook_template WITH TEMPLATE postgres;

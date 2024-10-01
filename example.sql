WITH columns AS (
    SELECT att.attrelid AS relation_id,
        att.attname AS column_name,
        att.attnum AS column_number,
        att.atttypid AS type_id,
        CASE
            WHEN att.attnotnull THEN 'nonNullable'
            ELSE 'nullable'
        END AS nullable,
        CASE
            WHEN att.atthasdef THEN 'hasDefault'
            ELSE 'noDefault'
        END AS has_default,
        CASE
            WHEN att.attidentity = 'd' THEN 'identityByDefault'
            WHEN att.attidentity = 'a' THEN 'identityAlways'
            ELSE 'notIdentity'
        END AS is_identity,
        CASE
            WHEN attgenerated_exists THEN CASE
                WHEN attgenerated::text = 's' THEN 'stored'
                ELSE 'notGenerated'
            END
            ELSE 'notGenerated'
        END as is_generated
    FROM pg_catalog.pg_attribute AS att
        CROSS JOIN (
            SELECT current_setting('server_version_num')::int >= 120000
        ) AS attgenerated(attgenerated_exists)
    WHERE -- We only include columns that are actually part of the table currently.
        NOT att.attisdropped -- This table also records historic columns.
        AND att.attnum > 0 -- attnum <= 0 are special system-defined columns.
    ORDER BY column_number
),
-- The columns that make up a constraint are recorded in
-- pg_constraint(conkey, confkey), keyed by column number (attnum).
-- 'constraint_columns' and 'constraint_referenced_columns' dereference
-- these to column names.
--
      -- This involves unnesting, joining 'columns', and re-constructing the
-- array.
constraint_columns AS (
    SELECT c_unnest.constraint_id,
        array_agg(col.column_name) as key_columns
    FROM (
            SELECT c.oid as constraint_id,
                c.conrelid as relation_id,
                unnest(c.conkey) as column_number
            FROM pg_catalog.pg_constraint as c
            ORDER BY column_number
        ) AS c_unnest
        INNER JOIN columns col USING ( relation_id, column_number)
    GROUP BY c_unnest.constraint_id
),
constraint_referenced_columns AS (
    SELECT c_unnest.constraint_id,
        array_agg(col.column_name) as referenced_columns
    FROM (
            SELECT c.oid as constraint_id,
                c.confrelid as relation_id,
                unnest(c.confkey) as column_number,
                unnest(c.conkey) as key_column_number
            FROM pg_catalog.pg_constraint as c
            ORDER BY key_column_number
        ) AS c_unnest
        INNER JOIN columns col 
        ON col.relation_id = c_unnest.relation_id 
            AND col.column_number = c_unnest.column_number
    GROUP BY c_unnest.constraint_id
)
SELECT c.oid as constraint_id,
    c.connamespace as schema_id,
    con_cols.key_columns,
    con_fcols.referenced_columns
FROM pg_catalog.pg_constraint AS c
    LEFT OUTER JOIN constraint_columns as con_cols ON (con_cols.constraint_id = c.oid)
    LEFT OUTER JOIN constraint_referenced_columns as con_fcols ON (con_fcols.constraint_id = c.oid)
    WHERE c.conname LIKE '%object_types%'
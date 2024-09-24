
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
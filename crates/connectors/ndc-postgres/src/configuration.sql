-- This requests the table configuration from the database.
--
-- It is very large. There are inline comments in the SQL to help understand
-- what's going on.
--
-- TODO: This uses unqualified table (and view) and constraint names.
-- We will need to qualify them at some point. This makes the aliases seem
-- redundant, but they will change in the future.

-- TODO: We derive all the information from the `information_schema`. Sadly, not
-- all information is available there, most notably:
--   * aggregate function return types
-- We therefore make a set of assumptions about these. We may wish to rewrite
-- this using the `pg_catalog` tables instead.

select
  coalesce(tables, '{}'), -- maps to `TableInfo`
  coalesce(aggregate_functions, '{}') -- maps to `AggregateFunctions`
from
  (
    select
      json_object_agg(
        -- the table alias, used for looking up the table (or view, or other relation)
        t.table_name,
        json_build_object(
          -- the schema name
          'schema_name',
          t.table_schema,
          -- the table name
          'table_name',
          t.table_name,
          -- a mapping from column aliases to the column information
          'columns',
          -- this may be empty, in which case we coalesce with an empty object
          coalesce(
            (
              select
                json_object_agg(
                  -- the column alias, used for looking up the column
                  c.column_name,
                  json_build_object(
                    -- the column name
                    'name',
                    c.column_name,
                    'type',
                    -- These are the types we support, mapped to "standard" aliases.
                    -- We have a similar case expression below, the two needs to be in sync.
                    case c.data_type
                      when 'boolean' then 'boolean'
                      when 'smallint' then 'smallint'
                      when 'integer' then 'integer'
                      when 'bigint' then 'bigint'
                      when 'numeric' then 'numeric'
                      when 'real' then 'real'
                      when 'double precision' then 'double precision'
                      when 'text' then 'text'
                      when 'character varying' then 'character varying'
                      when 'character' then 'character'
                      when 'json' then 'json'
                      when 'jsonb' then 'jsonb'
                      when 'date' then 'date'
                      when 'time with time zone' then 'time with time zone'
                      when 'time without time zone' then 'time without time zone'
                      when 'timestamp with time zone' then 'timestamp with time zone'
                      when 'timestamp without time zone' then 'timestamp without time zone'
                      when 'uuid' then 'uuid'
                      else 'any'
                    end,
                    'nullable',
                    case c.is_nullable when 'YES' then 'Nullable' else 'NonNullable' end
                  )
                )
              from information_schema.columns as c
              where
                c.table_catalog = t.table_catalog
                and c.table_schema = t.table_schema
                and c.table_name = t.table_name
            ),
            json_build_object()
          ),
          -- a mapping from the uniqueness constraint aliases to their details
          'uniqueness_constraints',
          -- this may be empty, in which case we coalesce with an empty object
          coalesce(
            (
              select
                json_object_agg(
                  -- the name of the uniqueness constraint
                  c.constraint_name,
                  -- an array (parsed as a set) of the columns present in the constraint
                  (
                    select json_agg(cc.column_name)
                    from information_schema.constraint_column_usage cc
                    where
                      cc.constraint_catalog = c.constraint_catalog
                      and cc.constraint_schema = c.constraint_schema
                      and cc.constraint_name = c.constraint_name
                  )
                )
              from information_schema.table_constraints c
              where
                c.table_catalog = t.table_catalog
                and c.table_schema = t.table_schema
                and c.table_name = t.table_name
                and c.constraint_type in ('PRIMARY KEY', 'UNIQUE')
            ),
            json_build_object()
          ),
          -- a mapping from the foreign relation aliases to their details
          'foreign_relations',
          -- this may be empty, in which case we coalesce with an empty object
          coalesce(
            (
              select
                json_object_agg(
                  -- the name of the foreign key constraint
                  c.constraint_name,
                  json_build_object(
                    -- the name of the foreign relation
                    'foreign_table',
                    (
                      select tu.table_name
                      from information_schema.constraint_table_usage as tu
                      where
                        tu.constraint_catalog = c.constraint_catalog
                        and tu.constraint_schema = c.constraint_schema
                        and tu.constraint_name = c.constraint_name
                    ),
                    -- a mapping from the local columns to the foreign columns
                    'column_mapping',
                    (
                      select
                        json_object_agg(fc.column_name, uc.column_name)
                      from information_schema.key_column_usage as fc
                      join information_schema.key_column_usage as uc
                        on fc.position_in_unique_constraint = uc.ordinal_position
                      where
                        fc.constraint_catalog = rc.constraint_catalog
                        and fc.constraint_schema = rc.constraint_schema
                        and fc.constraint_name = rc.constraint_name
                        and uc.constraint_catalog = rc.unique_constraint_catalog
                        and uc.constraint_schema = rc.unique_constraint_schema
                        and uc.constraint_name = rc.unique_constraint_name
                    )
                  )
                )
              from information_schema.table_constraints as c
              join information_schema.referential_constraints as rc on
                c.constraint_catalog = rc.constraint_catalog
                and c.constraint_schema = rc.constraint_schema
                and c.constraint_name = rc.constraint_name
              where
                c.table_catalog = t.table_catalog
                and c.table_schema = t.table_schema
                and c.table_name = t.table_name
                and c.constraint_type = 'FOREIGN KEY'
            ),
            json_build_object()
          )
        )
      ) as tables
    from information_schema.tables as t
    where t.table_schema = 'public'
  ) as _tables,
  (
    select
      json_object_agg(
        -- the name of the GraphQL scalar type
        scalar_type,
        -- the set of functions
        routines
      ) as aggregate_functions
    from
      (
        select
          r.scalar_type,
          json_object_agg(
            -- the function name
            routine_name,
            json_build_object(
              -- the return type of the aggregate function
              -- NOTE: this information is not actually available, so we assume
              -- the return type is always the same as the input type
              'return_type',
              r.scalar_type
            )
          ) as routines
        from
          (
            select r.*,
              -- These are the types we support, mapped to "standard" aliases.
              -- We have a similar case expression above, the two needs to be in sync.
              case r.data_type
                when 'boolean' then 'boolean'
                when 'smallint' then 'smallint'
                when 'integer' then 'integer'
                when 'bigint' then 'bigint'
                when 'numeric' then 'numeric'
                when 'real' then 'real'
                when 'double precision' then 'double precision'
                when 'text' then 'text'
                when 'character varying' then 'character varying'
                when 'character' then 'character'
                when 'json' then 'json'
                when 'jsonb' then 'jsonb'
                when 'date' then 'date'
                when 'time with time zone' then 'time with time zone'
                when 'time without time zone' then 'time without time zone'
                when 'timestamp with time zone' then 'timestamp with time zone'
                when 'timestamp without time zone' then 'timestamp without time zone'
                when 'uuid' then 'uuid'
                else 'any'
              end scalar_type
            from information_schema.routines as r
          ) as r
        -- get the parameters count for a routine
        left outer join lateral (
          select count(*) as count
            from information_schema.parameters parameters
            where r.specific_name = parameters.specific_name
          ) parameters on ('true')
        where routine_schema in ('pg_catalog', 'public')
        -- include routines with only one parameter
        and parameters.count = 1
        and routine_type is null -- aggregate functions don't have a routine type
        and r.scalar_type <> 'any'
        group by r.scalar_type
      ) as routines_by_type
  ) as _aggregate_functions

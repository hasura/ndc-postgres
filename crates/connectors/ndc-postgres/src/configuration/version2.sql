-- This query introspects the relations and types defined in the connected
-- database using the system catalog tables in the `pg_catalog` namespace.
--
-- The data model of these tables is quite involved and carries with it decades
-- of legacy. Supporting notes on this are kept in 'introspection-notes.md'.
--
-- TODO: This uses unqualified table (and view) and constraint names.
--       We will need to qualify them at some point. This makes the aliases seem
--       redundant, but they will change in the future.
--       If similar named tables exist in different schemas it is arbitrary
--       which one we pick currently! (c.f. Citus schemas 'columnar' and
--       'columnar_internal' which both have a 'chunk' table)

-- When debugging in 'psql', uncomment the lines below to be able to run the
-- query with arguments set.

-- DEALLOCATE ALL; -- Or use 'DEALLOCATE configuration' between reloads
-- PREPARE configuration(varchar[], varchar[], jsonb) AS

WITH
  -- The overall structure of this query is a CTE (i.e. 'WITH .. SELECT')
  -- statement which define projections of the catalog tables into forms that are
  -- more convenient to work with:
  --
  -- * We project only the columns that we need for constructing the ndc instance
  --   schema and serving queries, and we try apply consistent naming.
  --
  -- * We resolve references (oid's) to names.
  --
  -- * We avoid aggregations over sub-selects and lateral joins since those have
  --   proven brittle across postgres variants by experience. Instead we use
  --   regular joins over tables that have been grouped by the join key to ensure
  --   the 1:1 correspondance.
  --
  -- One benefit of using a CTE is that it's easy to experiment with the query,
  -- as you can query each of the WITH-bound sub-queries independently in the
  -- main statement.

  -- Schemas are recorded in `pg_namespace`, see
  -- https://www.postgresql.org/docs/current/catalog-pg-namespace.html for its
  -- schema.
  schemas AS
  (
    SELECT
      ns.oid AS schema_id,
      ns.nspname AS schema_name
    FROM pg_namespace AS ns
    WHERE
      -- Various schemas are patently uninteresting:
      NOT (ns.nspname = ANY ($1))
  ),

  -- Tables and views etc. are recorded in `pg_class`, see
  -- https://www.postgresql.org/docs/current/catalog-pg-class.html for its
  -- schema.
  relations AS
  (
    SELECT
      cl.relnamespace AS schema_id,
      cl.oid AS relation_id,
      cl.relname relation_name,
      cl.relkind relation_kind
    FROM
      pg_class cl
  ),
  queryable_relations AS
  (
    SELECT DISTINCT ON (relation_name) relations.*
    FROM relations
    WHERE relation_kind IN
      -- Lots of different types of relations exist, but we're only interested in
      -- the ones that can be queried.
      (
        'r', -- = ordinary table
        'v', -- = view
        'm', -- = materialized view
        'f', -- = foreign table
        'p'  -- = partitioned table
        -- i = index,
        -- S = sequence,
        -- t = TOAST table,
        -- c = composite type,
        -- I = partitioned index
      )

    -- Since we will _not_ be grouping by a key we need this to be ordered
    -- to get deterministic results.
    -- (Specificically, we do not yet take schemas into account)
    ORDER BY relation_name, schema_id, relation_kind
  ),

  -- Columns are recorded in `pg_attribute`. An 'attribute' is the generic term
  -- for the parts that together make up a relation in general, and only in the
  -- case of a table do we actually call them 'columns'. See
  -- https://www.postgresql.org/docs/current/catalog-pg-attribute.html for its
  -- schema.
  columns AS
  (
    SELECT
      att.attrelid AS relation_id,
      att.attname AS column_name,
      att.attnum AS column_number,
      att.atttypid AS type_id,
      CASE WHEN att.attnotnull THEN 'nonNullable' ELSE 'nullable' END
      AS nullable
      -- Columns that will likely be of interest soon:
      -- attidentity
      -- attgenerated
      -- atthasdef
    FROM
      pg_catalog.pg_attribute AS att
    WHERE
      -- We only include columns that are actually part of the table currently.
      NOT att.attisdropped -- This table also records historic columns.
      AND att.attnum > 0   -- attnum <= 0 are special system-defined columns.
  ),

  -- Comments on database objects are recorded in `pg_description`. See
  -- 'https://www.postgresql.org/docs/current/catalog-pg-description.html' for its schema.
  --
  -- The modelling has some non-obvious use of indirection, which smells a bit
  -- of Russel's paradox: 'classoid' is a 'pg_class.oid' value, which indicates
  -- which _other_ pg_catalog table you need to consult in order to find the
  -- object with oid 'objoid'.
  --
  -- As an example, the comment of a table or view column will always have
  --
  --   (classoid = 1259)
  --
  -- since the 'pg_class.oid' 1259 refers to the 'pg_class' table _itself_
  -- (remember that, since 'pg_class' records all tables (and other relations)
  -- that exist in the database, it also has a record of itself).
  --
  -- We assume 'classoid' to be stable and will just use literal values rather
  -- than actually looking them up in pg_class.
  column_comments AS
  (
    SELECT
      col.relation_id,
      col.column_name,
      comm.description
    FROM
    (
      SELECT
        objoid AS relation_id,
        objsubid AS column_number,
        description
      FROM
        pg_description
      WHERE
        classoid = 1259
    ) AS comm
    INNER JOIN
      columns
      AS col
      USING (relation_id, column_number)
  ),
  table_comments AS
  (
    SELECT
      objoid AS relation_id,
      description
    FROM
      pg_description
    WHERE
      classoid = 1259
      AND objsubid = 0
  ),

  -- Types are recorded in 'pg_types', see
  -- https://www.postgresql.org/docs/current/catalog-pg-type.html for its
  -- schema.
  scalar_types AS
  (
    SELECT
      t.oid AS type_id,
      t.typnamespace AS schema_id,
      t.typname AS type_name
      -- Columns that will likely be of interest soon:
      -- typedelim
    FROM
      pg_catalog.pg_type AS t
    WHERE
      -- We currently filter out pseudo (polymorphic) types, because our schema
      -- can only deal with monomorphic types.
      --
      -- We also filter out composite (record) types and arrays. We would like
      -- to support those properly, which requires support in the schema and
      -- query execution. If we export them as opaque scalar types, adding
      -- proper support later becomes a breaking change, which we'd like to
      -- avoid.
      t.typtype NOT IN
      (
        -- Interesting t.typtype 'types of types':
        -- 'b' for base type
        'c', --for composite type
        -- 'd' for domain (a predicate-restricted version of a type)
        -- 'e' for enum
        'p' -- for pseudo-type (anyelement etc)
        -- 'r' for range
        -- 'm' for multi-range
      )
      AND NOT (
        -- Exclude arrays (see 'array_types' below).
        t.typelem != 0 -- whether you can subscript into the type
        AND typcategory = 'A' -- The parsers considers this type an array for
                              -- the purpose of selecting preferred implicit casts.
        )
  ),
  array_types AS
  (
    SELECT
      t.oid AS type_id,
      t.typnamespace AS schema_id,
      et.type_name as element_type_name
    FROM
      pg_catalog.pg_type AS t
    INNER JOIN
      -- Postgres does not distinguish nested arrays at the type level, so we
      -- can already tell what the element type is.
      scalar_types
      AS et
      ON (et.type_id = t.typelem)
    WHERE
      -- See 'scalar_types' above
      t.typtype NOT IN
      (
        -- Interesting t.typtype 'types of types':
        -- 'b' for base type
        'c', --for composite type
        -- 'd' for domain (a predicate-restricted version of a type)
        -- 'e' for enum
        'p' -- for pseudo-type (anyelement etc)
        -- 'r' for range
        -- 'm' for multi-range
      )
      -- What makes a type an 'array' type in postgres is a surprisingly
      -- nuanced question.
      --
      -- Ideally, we should identify the types we consider array types for
      -- ndc purposes as those which postgres calls 'true array types', since
      -- those are the ones you can query as arrays (i.e., call 'unnest' on)
      -- and which ought reasonably to display as arrays, see
      -- introspection-notes.md.
      --
      -- There might be other types which will display as arrays (e.g., when
      -- serializing to json), but we shouldn't recognize those as arrays
      -- in the schema, because we cannot expect to be able to exploit that
      -- structure when querying.
      --
      -- The check for whether a type is a 'true array type' is not portable
      -- across Postgres and CockroachDB.
      -- Here we're interested in censoring to avoid future breaking changes,
      -- so we're content to censor a bit too much rather than too little.
      --
      -- The best check I could come up with that works for the builtin types
      -- and the PostGIS extension is this:
      AND t.typelem != 0 -- whether you can subscript into the type
      AND typcategory = 'A' -- The parsers considers this type an array for
                            -- the purpose of selecting preferred implicit casts.
  ),

  -- Comparison procedures are any entries in 'pg_proc' that happen to be
  -- binary functions that return booleans. We also require, for the sake of
  -- simplicity, that these functions be non-variadic (i.e. no default values).
  -- Within this CTE, we attempt to generate a table of comparison procedures
  -- to match the shape of the 'comparison_operators'.
  comparison_procedures AS
  (
    WITH
      comparison_argument_types AS
      (
        SELECT
          arg.proc_id,
          array_agg(arg.type_name) AS argument_types
        FROM
        (
          SELECT
            proc.proc_id,
            t.type_name
          FROM
          (
            SELECT
              proc.oid AS proc_id,
              unnest(proc.proargtypes) AS type_id
            FROM
              pg_catalog.pg_proc AS proc
            WHERE
              -- We check that we only consider procedures which take two regular
              -- arguments.
              cardinality(proc.proargtypes) = 2
              AND proc.prokind = 'f'
              AND proc.provariadic = 0
          )
          AS proc
          INNER JOIN
            scalar_types AS t
            USING (type_id)
        )
        AS arg
        GROUP BY arg.proc_id
        HAVING
          -- We need to check that we still have two arguments, since we're
          -- filtering by our restricted notion of scalar types, which may
          -- exclude some types (e.g. pseudo-types and array types).
          cardinality(array_agg(arg.type_name)) = 2
      )
    SELECT
      proc.proname AS operator_name,
      args.argument_types[1] AS argument1_type,
      args.argument_types[2] AS argument2_type
    FROM
      pg_catalog.pg_proc AS proc

    INNER JOIN comparison_argument_types
      AS args
      ON (proc.oid = args.proc_id)

    INNER JOIN scalar_types
      AS ret_type
      ON (ret_type.type_id = proc.prorettype)

    WHERE
      ret_type.type_name = 'bool'
  ),

  -- Aggregate functions are recorded across 'pg_proc' and 'pg_aggregate', see
  -- https://www.postgresql.org/docs/current/catalog-pg-proc.html and
  -- https://www.postgresql.org/docs/current/catalog-pg-aggregate.html for
  -- their schema.
  aggregates AS
  (
    WITH
      -- The arguments to an aggregate function is an array of type oids, which
      -- we want to resolve to an array of type names instead.
      -- Somewhat awkwardly, this means we have to unnest, join on types, and
      -- array_agg and group by.
      aggregate_argument_types AS
      (
        SELECT
          arg.proc_id,
          array_agg(arg.type_name) AS argument_types
        FROM
        (
          SELECT
            proc.proc_id,
            t.type_name
          FROM
          (
            SELECT
              proc.oid AS proc_id,
              unnest(proc.proargtypes) AS type_id
            FROM
              pg_catalog.pg_proc AS proc
            WHERE
              -- We only support single-argument aggregates currently.
              -- This assertion is important to make here since joining with
              -- 'types' filter arguments of polymorphic type, and we might
              -- risk ending up with one argument later.
              cardinality(proc.proargtypes) = 1
          )
          AS proc
          INNER JOIN
            scalar_types AS t
            USING (type_id)
        )
        AS arg
        GROUP BY arg.proc_id
        HAVING
          -- We need to check that we still have an argument, since we're
          -- filtering by our restricted notion of scalar types, which may
          -- exclude some types (e.g. pseudo-types and array types).
          cardinality(array_agg(arg.type_name)) = 1
      )
    SELECT
      proc.oid AS proc_id,
      proc.proname AS proc_name,
      proc.pronamespace AS schema_id,
      args.argument_types,
      ret_type.type_name as return_type

      -- Columns that will likely be of interest soon:
      -- proc.proargnames AS argument_names,

    FROM
      pg_catalog.pg_proc AS proc

    INNER JOIN aggregate_argument_types
      AS args
      ON (proc.oid = args.proc_id)

    INNER JOIN scalar_types
      AS ret_type
      ON (ret_type.type_id = proc.prorettype)

    -- Restrict our scope to only aggregation functions
    INNER JOIN pg_aggregate
      ON (pg_aggregate.aggfnoid = proc.oid)

    WHERE
     --  We are only interested in functions:
     --  * Which are aggregation functions.
      -- * Which don't take any 'direct' (i.e., non-aggregation) arguments
      pg_aggregate.aggnumdirectargs = 0

  ),

  -- Operators are recorded across 'pg_proc', pg_operator, and 'pg_aggregate', see
  -- https://www.postgresql.org/docs/current/catalog-pg-proc.html,
  -- https://www.postgresql.org/docs/current/catalog-pg-operator.html and
  -- https://www.postgresql.org/docs/current/catalog-pg-aggregate.html for
  -- their schema.
  --
  -- In PostgreSQL, operators and aggregation functions each relate to a `pg_proc`
  -- procedure. On CockroachDB, however, they are independent.
  comparison_infix_operators AS
  (
    SELECT
      op.oprname AS operator_name,
      t1.type_name AS argument1_type,
      t2.type_name AS argument2_type
    FROM
      pg_operator
      AS op
    INNER JOIN
      scalar_types
      AS t1
      ON (op.oprleft = t1.type_id)
    INNER JOIN
      scalar_types
      AS t2
      ON (op.oprright = t2.type_id)
    INNER JOIN
      scalar_types
      AS t_res
      ON (op.oprresult = t_res.type_id)
    WHERE
      t_res.type_name = 'bool'
    ORDER BY op.oprname
  ),

  -- Here, we reunite our binary infix procedures and our binary prefix
  -- procedures under the umbrella of 'comparison_operators'. We do this
  -- here so that we can treat them uniformly form this point on.
  -- Specifically, we generate all the various type coercion permutations
  -- for both in 'comparison_operators_cast_extended'.
  comparison_operators AS
  (
    SELECT
      operator_name,
      argument1_type,
      argument2_type,
      true AS is_infix
    FROM comparison_infix_operators
    UNION
    SELECT
      operator_name,
      argument1_type,
      argument2_type,
      false AS is_infix
    FROM
      comparison_procedures
  ),

  implicit_casts AS
  (
    SELECT
      t_from.type_name as from_type,
      t_to.type_name as to_type
    FROM
      pg_cast
    INNER JOIN
      scalar_types
      AS t_from
      ON (t_from.type_id = pg_cast.castsource)
    INNER JOIN
      scalar_types
      AS t_to
      ON (t_to.type_id = pg_cast.casttarget)
    WHERE
      pg_cast.castcontext = 'i'
  ),

  -- Some comparison operators are not defined explicitly for every type they would be
  -- valid for, relying instead on implicit casts to extend the types they can apply to.
  --
  -- Examples:
  --
  --   Postgres only defines 'like' for 'text', not for 'varchar'. But there's
  --   an implicit cast for varchar->text.
  --
  --   CockroachDB does not define any comparison operators for 'float4', but
  --   for 'float8', along with an implict cast for float4->float8.
  --
  -- To make comparison operators available to all those types as well we
  -- extend our set of operators to include implicit casts.
  comparison_operators_cast_extended AS
  (
    -- The left argument could have been cast.
    SELECT
      op.operator_name,
      cast1.from_type as argument1_type,
      op.argument2_type,
      op.is_infix
    FROM
      comparison_operators
      AS op
    INNER JOIN
      implicit_casts
      AS cast1
      ON (cast1.to_type = op.argument1_type)
    UNION
    -- The right argument could have been cast.
    SELECT
      op.operator_name,
      op.argument1_type,
      cast2.from_type as argument2_type,
      op.is_infix
    FROM
      comparison_operators
      AS op
    INNER JOIN
      implicit_casts
      AS cast2
      ON (cast2.to_type = op.argument2_type)
    UNION
    -- Both arguments could have been cast.
    SELECT
      op.operator_name,
      cast1.from_type as argument1_type,
      cast2.from_type as argument2_type,
      op.is_infix
    FROM
      comparison_operators
      AS op
    INNER JOIN
      implicit_casts
      AS cast1
      ON (cast1.to_type = op.argument1_type)
    INNER JOIN
      implicit_casts
      AS cast2
      ON (cast2.to_type = op.argument2_type)
  ),

  -- The names that comparison operators are exposed under is configurable.
  operator_mappings AS
  (
    SELECT
      v ->> 'operatorName' AS operator_name,
      v ->> 'exposedName' AS exposed_name
    FROM
      jsonb_array_elements($3) AS v
  ),

  -- Constraints are recorded in 'pg_constraint', see
  -- https://www.postgresql.org/docs/current/catalog-pg-constraint.html for its
  -- schema.
  --
  -- This form captures both uniqueness constraints and foreign key
  -- constraints. The 'constraint_type' column determines which columns will be
  -- non-null.
  constraints AS
  (
    WITH
      -- The columns that make up a constraint are recorded in
      -- pg_constraint(conkey, confkey), keyed by column number (attnum).
      -- 'constraint_columns' and 'constraint_referenced_columns' dereference
      -- these to column names.
      --
      -- This involves unnesting, joining 'columns', and re-constructing the
      -- array.
      constraint_columns AS
      (
        SELECT
          c_unnest.constraint_id,
          array_agg(col.column_name) as key_columns
        FROM
          (
            SELECT
              c.oid as constraint_id,
              c.conrelid as relation_id,
              unnest(c.conkey) as column_number
            FROM
              pg_catalog.pg_constraint as c
          ) AS c_unnest
        INNER JOIN
          columns col
          USING (relation_id, column_number)
        GROUP BY c_unnest.constraint_id
      ),
      constraint_referenced_columns AS
      (
        SELECT
          c_unnest.constraint_id,
          array_agg(col.column_name) as referenced_columns
        FROM
          (
            SELECT
              c.oid as constraint_id,
              c.confrelid as relation_id,
              unnest(c.confkey) as column_number
            FROM
              pg_catalog.pg_constraint as c
          ) AS c_unnest
        INNER JOIN
          columns col
          USING (relation_id, column_number)
        GROUP BY c_unnest.constraint_id
      )
    SELECT
      c.oid as constraint_id,
      c.connamespace as schema_id,
      c.conname as constraint_name,
      c.conrelid as relation_id,
      c.contype as constraint_type,
      con_cols.key_columns,

      -- These will be null for non-foreign- keys
      c.confrelid as referenced_relation_id,
      con_fcols.referenced_columns
    FROM
      pg_catalog.pg_constraint AS c
    LEFT OUTER JOIN
      constraint_columns as con_cols
      ON (con_cols.constraint_id = c.oid)
    LEFT OUTER JOIN
      constraint_referenced_columns as con_fcols
      ON (con_fcols.constraint_id = c.oid)
  ),
  uniqueness_constraints AS
  (
    SELECT
      constraint_id,
      schema_id,
      constraint_name,
      relation_id,
      key_columns
    FROM
      constraints AS c
    WHERE
      c.constraint_type in
      (
        'u', -- For uniqueness constraints
        'p'  -- For primary keys
      )
  ),
  foreign_key_constraints AS
  (
    SELECT
      constraint_id,
      schema_id,
      constraint_name,
      relation_id,
      key_columns,
      referenced_relation_id,
      referenced_columns
    FROM
      constraints AS c
    WHERE
      c.constraint_type = 'f' -- For foreign-key constraints
  )
SELECT
  coalesce(tables.result, '{}'::jsonb) AS "Tables",
  coalesce(aggregate_functions.result, '{}'::jsonb) AS "AggregateFunctions",
  coalesce(comparison_functions.result, '{}'::jsonb) AS "ComparisonFunctions"
FROM
  (
    -- Tables and views
    SELECT
      jsonb_object_agg(
        CASE
          WHEN s.schema_name = ANY ($2)
          THEN rel.relation_name
          ELSE s.schema_name || '_' || rel.relation_name
        END,
        jsonb_build_object(
          'schemaName',
          s.schema_name,
          'tableName',
          rel.relation_name,
          'description',
          comm.description,
          'columns',
          columns_info.result,
          'uniquenessConstraints',
          coalesce(uniqueness_constraints_info.result, '{}'::jsonb),
          'foreignRelations',
          coalesce(foreign_key_constraints_info.result, '{}'::jsonb)
        )
      )
      AS result
    FROM
      queryable_relations
      AS rel

    LEFT OUTER JOIN
      table_comments
      AS comm
      USING (relation_id)

    INNER JOIN schemas
      AS s
      USING (schema_id)

    -- Columns
    INNER JOIN
    (
      WITH
        column_types AS
        (
          SELECT
            type_id,
            jsonb_build_object(
              'scalarType',
              type_name
              )
              AS result
          FROM
            scalar_types
          UNION
          SELECT 
            type_id,
            jsonb_build_object(
              'arrayType', 
              jsonb_build_object(
                'scalarType',
                element_type_name
                )
              )
              AS result
          FROM
            array_types
        )
      SELECT
        c.relation_id,
        jsonb_object_agg(
          c.column_name,
          jsonb_build_object(
            'name',
            c.column_name,
            'type',
            t.result,
            'nullable',
            c.nullable,
            'description',
            comm.description
            )
        )
        AS result
      FROM columns
        AS c
      LEFT OUTER JOIN column_types
        AS t
        USING (type_id)
      LEFT OUTER JOIN column_comments
        AS comm
        USING (relation_id, column_name)
      GROUP BY relation_id
      HAVING
        -- All columns must have a supported type for us to list this table.
        bool_and(NOT t.result IS NULL)
    )
    AS columns_info
    USING (relation_id)

    -- Uniqueness constraints
    LEFT OUTER JOIN
    (
      SELECT
        con.relation_id,
        jsonb_object_agg(
          con.constraint_name,
          to_jsonb(con.key_columns)
        )
        AS result
      FROM uniqueness_constraints
        AS con
      GROUP BY relation_id
    )
    AS uniqueness_constraints_info
    USING (relation_id)

    -- Foreign-key constraints.
    LEFT OUTER JOIN
    (
      -- These take on the form:
      --   {
      --     <constraint_name>:
      --       {
      --         foreign_table:
      --           <referenced relation_name>,
      --         column_mapping:
      --           {
      --             <local column_name>: <referenced column_name>
      --           }
      --       }
      --   }
      SELECT
        con.relation_id,
        jsonb_object_agg(
          con.constraint_name,
          jsonb_build_object(
            'foreignSchema',
            foreign_schema.schema_name,
            'foreignTable',
            foreign_relation.relation_name,
            'columnMapping',
            con.column_mapping
          )
        )
        AS result
      FROM
        (
          SELECT
              con.relation_id,
              con.constraint_name,
              con.referenced_relation_id,
              -- The column mapping is an object '{<local column>: <referenced column>}'
              json_object_agg(
                con.key_column,
                con.referenced_column
              ) AS column_mapping
          FROM
          (
            -- We need to unnest both the key_columns and referenced_columns,
            -- which essentially works like 'unzip'.
            -- The result is one row per column appearing in the constraint,
            -- which we can then re-group and aggregate as json.
            SELECT
              relation_id,
              constraint_name,
              unnest(key_columns) as key_column,
              referenced_relation_id,
              unnest(referenced_columns) as referenced_column
            FROM
             foreign_key_constraints
          )
          AS con
          GROUP BY
            (relation_id, constraint_name, referenced_relation_id)
        )
        AS con
      INNER JOIN relations
        AS foreign_relation
        ON foreign_relation.relation_id = con.referenced_relation_id
      INNER JOIN schemas
        AS foreign_schema
        ON foreign_relation.schema_id = foreign_schema.schema_id
      GROUP BY con.relation_id
    )
    AS foreign_key_constraints_info
    USING (relation_id)

  ) AS tables

  -- Aggregation functions
  CROSS JOIN
  (
    -- These are represented as a json object which takes on the form:
    --
    --   {
    --     <argument_type>:
    --       {
    --         <aggregate name>:
    --           {
    --             'return_type': <return type_name>
    --           }
    --       }
    --   }
    --
    SELECT
      jsonb_object_agg(
        agg.argument_type,
        agg.routines
      ) AS result
    FROM
    (
      SELECT
        agg.argument_type,
        jsonb_object_agg(
          -- Since we are _not_ grouping by a key we need 'agg' to be ordered
          -- and distinct to get deterministic results.
          -- I.e. both functions 'f: A -> B' and 'f: A -> C' can coexist, but we
          -- can only chose one with our current scheme
          agg.proc_name,
          jsonb_build_object(
            'returnType',
            agg.return_type
          )
        ) AS routines
      FROM
      (
        -- We only support aggregation functions that take a single argument.
        SELECT DISTINCT ON (argument_type, proc_name)
          agg.proc_name,
          agg.argument_types[1] as argument_type,
          agg.return_type
        FROM
          aggregates AS agg
        ORDER BY argument_type, proc_name, return_type
      ) AS agg
      GROUP BY agg.argument_type
    ) AS agg
  ) AS aggregate_functions

  CROSS JOIN
  (
    -- Comparison Operators
    WITH
      comparison_infix_operators_mapped AS
      (
        SELECT
          map.exposed_name,
          op.operator_name,
          op.argument1_type,
          op.argument2_type,
          op.is_infix -- always 't'
        FROM
          comparison_operators_cast_extended
          AS op
        INNER JOIN
          operator_mappings
          AS map
          USING (operator_name)
        WHERE
          op.is_infix = 't'
      ),

      comparison_prefix_operators AS
      (
        SELECT
          operator_name as exposed_name,
          operator_name,
          argument1_type,
          argument2_type,
          is_infix -- always 'f'
        FROM
          comparison_operators_cast_extended
        WHERE
          is_infix = 'f'
      ),

      -- When an operator is overloaded for a type (either explicitly or
      -- through implict casts), prefer the version where both arguments are
      -- the same type.
      comparison_operators_filtered AS
      (
        SELECT DISTINCT ON (op.exposed_name, op.argument1_type)
          op.exposed_name,
          op.operator_name,
          op.argument1_type,
          op.argument2_type,
          op.is_infix
        FROM
          ( SELECT * FROM comparison_infix_operators_mapped
            UNION
            SELECT * FROM comparison_prefix_operators
          )
          AS op
        ORDER BY
          op.exposed_name,
          op.argument1_type,
          op.argument1_type = op.argument2_type DESC
      ),

      comparison_operators_by_first_arg AS
      (
        SELECT
          op.argument1_type,
          jsonb_object_agg(
            op.exposed_name,
            jsonb_build_object(
              'operatorName', op.operator_name,
              'argumentType', op.argument2_type,
              'isInfix', op.is_infix
            )
          )
          AS result
        FROM
          comparison_operators_filtered
          AS op
        GROUP BY op.argument1_type
      )
    SELECT
      jsonb_object_agg(
        op.argument1_type,
        op.result
      ) as result
    FROM
      comparison_operators_by_first_arg
      AS op
  ) AS comparison_functions
  ;

-- Uncomment the following lines to just run the configuration query with reasonable default arguments
--
-- EXECUTE configuration(
--   '{"information_schema", "tiger", "pg_catalog", "topology"}'::varchar[],
--   '{}'::varchar[],
--   '[
--     {"operatorName": "=", "exposedName": "_eq"},
--     {"operatorName": "!=", "exposedName": "_neq"},
--     {"operatorName": "<>", "exposedName": "_neq"},
--     {"operatorName": "<=", "exposedName": "_lte"},
--     {"operatorName": ">", "exposedName": "_gt"},
--     {"operatorName": ">=", "exposedName": "_gte"},
--     {"operatorName": "<", "exposedName": "_lt"},
--     {"operatorName": "~~", "exposedName": "_like"},
--     {"operatorName": "!~~", "exposedName": "_nlike"},
--     {"operatorName": "~~*", "exposedName": "_ilike"},
--     {"operatorName": "!~~*", "exposedName": "_nilike"},
--     {"operatorName": "~", "exposedName": "_regex"},
--     {"operatorName": "!~", "exposedName": "_nregex"},
--     {"operatorName": "~*", "exposedName": "_iregex"},
--     {"operatorName": "!~*", "exposedName": "_niregex"}
--    ]'::jsonb
-- );

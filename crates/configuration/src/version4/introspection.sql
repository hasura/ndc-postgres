-- This query introspects the relations and types defined in the connected
-- database using the system catalog tables in the `pg_catalog` namespace.
--
-- The data model of these tables is quite involved and carries with it decades
-- of legacy. Supporting notes on this are kept in 'introspection-notes.md'.
--
-- When debugging in 'psql', uncomment the lines below to be able to run the
-- query with arguments set.

-- DEALLOCATE ALL; -- Or use 'DEALLOCATE configuration' between reloads
-- PREPARE configuration(varchar[], varchar[], varchar[], jsonb, varchar[], jsonb, varchar[]) AS

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
  schemas_for_table_collections AS
  (
    SELECT
      ns.oid::regnamespace AS schema_id,
      ns.nspname AS schema_name
    FROM pg_namespace AS ns
    WHERE
      -- Various schemas are patently uninteresting:
      NOT (ns.nspname = ANY ($1))
  ),

  -- These are the schemas of which tables will be unqualified
  unqualified_schemas_for_tables AS
  (
    SELECT DISTINCT
      ns.oid::regnamespace as schema_id
    FROM
      UNNEST($2) AS t(schema_name)
    INNER JOIN
      pg_namespace
      AS ns
      ON (ns.nspname = schema_name)
  ),

  -- These are the schemas of which types and procedures will be
  -- exported unqualified.
  unqualified_schemas_for_types_and_procedures AS
  (
    SELECT DISTINCT
      ns.oid::regnamespace as schema_id
    FROM
      UNNEST($3) AS t(schema_name)
    INNER JOIN
      pg_namespace
      AS ns
      ON (ns.nspname = schema_name)
  ),

  -- Tables and views etc. are recorded in `pg_class`, see
  -- https://www.postgresql.org/docs/current/catalog-pg-class.html for its
  -- schema.
  relations AS
  (
    SELECT
      cl.oid::regclass AS relation_id
    FROM
      pg_class cl

    -- We only want to know about relations that don't live in uninteresting schemas.
    INNER JOIN
      schemas_for_table_collections
      ON (schemas_for_table_collections.schema_id = cl.relnamespace)
    WHERE relkind IN
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
  ),

  -- This relation collects the various names we want to call relations by, and
  -- how it should appear in the schema.
  --
  -- All intermediate processing of relations uses exclusively 'regclass'
  -- identifiers. We only tack on names when we generate the final json output.
  relation_names AS
  (
    SELECT
      cl.oid::regclass AS relation_id,

      CASE
        -- Note: This does not deal with schema names (or type names) containing spaces.
        WHEN unqualified.schema_id IS NOT NULL
        THEN cl.relname
        ELSE schemas.nspname || '_' || cl.relname
      END
      AS
      name_in_ndc_schema,
      cl.relname AS relation_name,
      schemas.nspname as schema_name
    FROM
      pg_class AS cl

    -- Filter, so we only include types we can understand
    INNER JOIN
      relations
    ON
      (cl.oid = relations.relation_id)

    -- Collect schema names. We _could_ instead just do
    -- 'schema_id::regnamespace::text', but that would produce a proper,
    -- quoted identifier.
    INNER JOIN
      pg_namespace AS schemas
    ON (cl.relnamespace = schemas.oid)

    -- Tack on whether we want to qualify the name in the ndc schema or not
    LEFT OUTER JOIN
      unqualified_schemas_for_tables
      AS unqualified
      ON (cl.relnamespace = unqualified.schema_id)
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
      AS nullable,
      CASE WHEN att.atthasdef THEN 'hasDefault' ELSE 'noDefault' END
      AS has_default,
      CASE WHEN att.attidentity = 'd' THEN 'identityByDefault'
           WHEN att.attidentity = 'a' THEN 'identityAlways'
           ELSE 'notIdentity'
      END
      AS is_identity,
      CASE WHEN attgenerated_exists
           THEN CASE WHEN attgenerated::text = 's' THEN 'stored' ELSE 'notGenerated' END
           ELSE 'notGenerated'
      END as is_generated
    FROM
      pg_catalog.pg_attribute AS att
      CROSS JOIN (SELECT current_setting('server_version_num')::int >= 120000) AS attgenerated(attgenerated_exists)
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
  -- Rather than using literal numerical oids in this query we use the special
  -- built-in datatype 'regclass' which resolves names to oids automatically.
  -- See https://www.postgresql.org/docs/current/datatype-oid.html
  column_comments AS
  (
    SELECT
      col.relation_id,
      col.column_name,
      comm.description
    FROM
    (
      SELECT
        objoid::regclass AS relation_id,
        objsubid AS column_number,
        description
      FROM
        pg_description
      WHERE
        classoid = 'pg_catalog.pg_class'::regclass
    ) AS comm
    INNER JOIN
      columns
      AS col
      USING (relation_id, column_number)
  ),

  table_comments AS
  (
    SELECT
      objoid::regclass AS relation_id,
      description
    FROM
      pg_description
    WHERE
      classoid = 'pg_catalog.pg_class'::regclass
      AND objsubid = 0
  ),

  type_comments AS
  (
    SELECT
      objoid::regtype AS type_id,
      description
    FROM
      pg_description
    WHERE
      classoid = 'pg_catalog.pg_type'::regclass
      AND objsubid = 0
  ),

  -- Composite types, including those defined implicitly through a table and
  -- explicitly via `CREATE TYPE`.
  composite_types AS
  (
    SELECT
      t.oid::regtype AS type_id,
      t.typrelid::regclass AS relation_id
    FROM
      pg_type t
    -- We only want to know about composite types that don't live in uninteresting schemas.
    INNER JOIN
      schemas_for_table_collections
      ON (schemas_for_table_collections.schema_id = t.typnamespace)
    WHERE typtype = 'c'
  ),

  -- This relation collects the various names we want to call composite types
  -- by, and how it should appear in the schema.
  --
  -- All intermediate processing of types uses exclusively 'regtype'
  -- identifiers. We only tack on names when we generate the final json output.
  composite_type_names AS
  (
    SELECT
      t.oid::regtype AS type_id,

      CASE
        -- Note: This does not deal with schema names (or type names) containing spaces.
        WHEN unqualified.schema_id IS NOT NULL
        THEN t.typname
        ELSE schemas.nspname || '_' || t.typname
      END
      AS
      name_in_ndc_schema,
      t.typname AS type_name,
      schemas.nspname as schema_name
    FROM
      pg_type AS t

    -- Filter, so we only include types we can understand
    INNER JOIN
      composite_types
    ON
      (t.oid = composite_types.type_id)

    -- Collect schema names. We _could_ instead just do
    -- 'schema_id::regnamespace::text', but that would produce a proper,
    -- quoted identifier.
    INNER JOIN
      pg_namespace AS schemas
    ON (t.typnamespace = schemas.oid)

    -- Tack on whether we want to qualify the name in the ndc schema or not
    LEFT OUTER JOIN
      unqualified_schemas_for_tables
      AS unqualified
      ON (t.typnamespace = unqualified.schema_id)
  ),

  -- Composite types, except those which are also tables.
  -- We collect these separately at the top level because we need to be able to
  -- talk about them but also know that they are not tables that you can query.
  exclusively_composite_types AS
  (
    WITH
      exclusively_composite_type_ids AS
      (
        SELECT relation_id FROM composite_types
        EXCEPT
        SELECT relation_id FROM relations
      )
    SELECT
      *
    FROM composite_types
    NATURAL INNER JOIN exclusively_composite_type_ids
  ),

  -- Types are recorded in 'pg_type', see
  -- https://www.postgresql.org/docs/current/catalog-pg-type.html for its
  -- schema.
  scalar_types AS
  (
    SELECT
      t.oid::regtype AS type_id
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
      --
      -- We intentionally do not filter out domain types, see the relation
      -- `domain_types` below.
      t.typtype NOT IN
      (
        -- Interesting t.typtype 'types of types':
        -- 'b' for base type
        'c', -- for composite type
        -- 'd', for domain (a predicate-restricted version of a type)
        -- 'e' for enum
        'p' -- for pseudo-type (anyelement etc)
        -- 'r' for range
        -- 'm' for multi-range
      )
      AND NOT
        (
          -- Exclude arrays (see 'array_types' below).
          t.typelem != 0 -- whether you can subscript into the type
          AND typcategory = 'A' -- The parsers considers this type an array for
                                -- the purpose of selecting preferred implicit casts.
        )
      -- Ignore types that are (primarily) for internal postgres use.
      -- This is a good candidate for a configuration option.
      AND oid NOT IN
      (
        SELECT oid
        FROM pg_catalog.pg_type
        WHERE
          typname IN
          (
            'aclitem',
            'cid',
            'gidx',
            'name',
            'oid',
            'pg_dependencies',
            'pg_lsn',
            'pg_mcv_list',
            'pg_ndistinct',
            'pg_node_tree',
            'regclass',
            'regcollation',
            'regconfig',
            'regdictionary',
            'regnamespace',
            'regoper',
            'regoperator',
            'regproc',
            'regprocedure',
            'regrole',
            'regtype',
            'tid',
            'xid',
            'xid8'
          )
          AND typnamespace = 'pg_catalog'::regnamespace
      )
  ),

  -- This relation collects the various names we want to call scalar types by
  -- (schema, name of the type itself, and how it should appear in the schema.
  --
  -- All intermediate processing of types uses exclusively 'regtype'
  -- identifiers. We only tack on names when we generate the final json output.
  scalar_type_names AS
  (
    SELECT
      t.oid::regtype AS type_id,

      CASE
        -- Note: This does not deal with schema names (or type names) containing spaces.
        WHEN unqualified.schema_id IS NOT NULL
        THEN t.typname
        ELSE schemas.nspname || '_' || t.typname
      END
      AS
      name_in_ndc_schema,
      t.typname AS type_name,
      schemas.nspname as schema_name
    FROM
      pg_type AS t

    -- Filter, so we only include types we can understand
    INNER JOIN
      scalar_types
    ON
      (t.oid = scalar_types.type_id)

    -- Collect schema names. We _could_ instead just do
    -- 'schema_id::regnamespace::text', but that would produce a proper,
    -- quoted identifier.
    INNER JOIN
      pg_namespace AS schemas
    ON (t.typnamespace = schemas.oid)

    -- Tack on whether we want to qualify the name in the ndc schema or not
    LEFT OUTER JOIN
      unqualified_schemas_for_types_and_procedures
      AS unqualified
      ON (t.typnamespace = unqualified.schema_id)
  ),
  -- Domain types are scalar types that have been adorned with a CHECK
  -- expression that any instance of the type must satisfy.
  --
  -- While the `scalar_types` relation above does pick up on domain types as
  -- well we also need to keep track of them separately in order to be able to
  -- infer comparison operators and aggregation functions.
  --
  -- Domain types are created using the `CREATE DOMAIN` statement (see
  -- https://www.postgresql.org/docs/current/sql-createdomain.html).
  domain_types AS
  (
    SELECT
      t.oid::regtype AS type_id,
      t.typbasetype::regtype AS base_type
    FROM
      pg_catalog.pg_type AS t
    WHERE
      t.typtype = 'd'
  ),

  -- Enum types are scalar types that consist of a finite, enumerated set of
  -- labelled values. See
  -- https://www.postgresql.org/docs/current/datatype-enum.html
  --
  -- The catalog table `pg_catalog.pg_enum` records the enum types defined in
  -- the database. See https://www.postgresql.org/docs/current/catalog-pg-enum.html
  --
  -- Enum types support certain comparisons and aggregations, but these are not
  -- registered in any of the catalog tables. Therefore we need some amount of
  -- special case handling for enum types.
  --
  -- Furthermore we are interested in collecting the labels for each enum type
  -- to reflect in the NDC schema.
  enum_types AS
  (
    SELECT
      t.oid::regtype AS type_id,
      array_agg(e.enumlabel ORDER BY e.enumsortorder) AS enum_labels
    FROM
      pg_catalog.pg_type AS t
    INNER JOIN
      pg_enum
      AS e
      ON (e.enumtypid = t.oid)
    GROUP BY (t.oid, t.typnamespace, t.typname)
  ),

  array_types AS
  (
    SELECT
      t.oid::regtype AS type_id,
      et.type_id as element_type_id,
      et.element_type_kind
    FROM
      pg_catalog.pg_type AS t
    INNER JOIN
      -- Postgres does not distinguish nested arrays at the type level, so we
      -- can already tell what the element type is.
      (
        SELECT
          type_id,
          'scalarType' AS element_type_kind
        FROM scalar_types
        UNION
        SELECT
          type_id,
          'compositeType' AS element_type_kind
        FROM composite_types
      )
      AS et
      ON (et.type_id = t.typelem)
    WHERE
      -- See 'scalar_types' above
      t.typtype = 'b'
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

  type_names AS
  (
    SELECT * FROM scalar_type_names
    UNION
    SELECT * FROM composite_type_names
  ),

  implicit_casts AS
  (
    SELECT
      t_from.type_id as from_type,
      t_to.type_id as to_type
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
      AND t_from.type_id != t_to.type_id

      -- This is a good candidate for a configurable option.
      AND (t_from.type_id, t_to.type_id) NOT IN
        (
          -- Ignore other casts that are unlikely to ever be relevant.
          -- Note that these list **does not** take schemas into account.
          SELECT f.oid, t.oid
          FROM pg_type f
          CROSS JOIN pg_type t
          WHERE
            (f.typname, t.typname) IN
              (
                ('bytea', 'geography'),
                ('bytea', 'geometry'),
                ('geography', 'bytea'),
                ('geometry', 'bytea'),
                ('geometry', 'text'),
                ('text', 'geometry'),
                ('text', 'bpchar'),
                ('varchar', 'bpchar')
              )
        )
    UNION
    -- Any domain type may be implicitly cast to its base type, even though these casts
    -- are not declared in `pg_cast`.
    SELECT
      domain_types.type_id as from_type,
      domain_types.base_type as to_type
    FROM
      domain_types
  ),

  implicit_casts_closure AS
  (
    WITH
      RECURSIVE transitive_closure(from_type, to_type, cast_chain_length, cast_chain, cast_chain_arr) AS
      (
        SELECT
          *,
          1 AS cast_chain_length,
          from_type || ' -> ' || to_type AS cast_chain,
          array[from_type, to_type] AS cast_chain_arr
        FROM
          implicit_casts
        UNION
        SELECT
          base.from_type,
          closure.to_type,
          closure.cast_chain_length + 1 AS cast_chain_length,
          base.from_type || ' -> ' || closure.cast_chain AS cast_chain,
          array[base.from_type] || closure.cast_chain_arr AS cast_chain_arr
        FROM
          implicit_casts
          AS base
        INNER JOIN
          transitive_closure
          AS closure
          ON (base.to_type = closure.from_type)
        WHERE
          -- Don't allow cycles
          NOT (base.from_type = ANY(closure.cast_chain_arr))
          -- As a safety, let's not consider cast chains longer than 5.
          AND closure.cast_chain_length <= 5
      )
    SELECT
      from_type,
      to_type,
      cast_chain_length,
      cast_chain
    FROM
      transitive_closure
  ),

  -- Enum types support the aggregates 'min' and 'max'. However, these are not
  -- registered as such in `pg_proc`, and so we have to make them them up
  -- ourselves.
  enum_aggregates AS
  (
    SELECT
      proc.proname AS proc_name,
      e.type_id AS argument_type,
      e.type_id AS return_type
    FROM
      (VALUES
        ('min'),
        ('max')
      )
      AS proc(proname),
      enum_types e
  ),

  -- Aggregate functions are recorded across 'pg_proc' and 'pg_aggregate', see
  -- https://www.postgresql.org/docs/current/catalog-pg-proc.html and
  -- https://www.postgresql.org/docs/current/catalog-pg-aggregate.html for
  -- their schema.
  declared_aggregates AS
  (
    SELECT
      proc.oid::regprocedure AS proc_id,
      proc.proname AS proc_name,
      proc.pronamespace AS schema_id,
      arg_type.type_id as argument_type,
      ret_type.type_id as return_type
      -- Columns that will likely be of interest soon:
      -- proc.proargnames AS argument_names,

    FROM
      pg_catalog.pg_proc AS proc

    INNER JOIN
      -- Until the schema is made part of our model of types we only consider
      -- types defined in the public schema.
      unqualified_schemas_for_types_and_procedures
      AS q
      ON (q.schema_id = proc.pronamespace)

    -- fetch the argument type name, discarding any unsupported types
    INNER JOIN scalar_types AS arg_type
      ON (arg_type.type_id = proc.proargtypes[0])

    -- fetch the return type name, discarding any unsupported types
    INNER JOIN scalar_types AS ret_type
      ON (ret_type.type_id = proc.prorettype)

    -- restrict our scope to only aggregation functions
    INNER JOIN pg_aggregate AS aggregate
      ON (aggregate.aggfnoid = proc.oid)

    WHERE
      -- We are only interested in functions:
      -- * which take a single input argument
      -- * which are aggregation functions
      -- * which don't take any 'direct' (i.e., non-aggregation) arguments
      proc.pronargs = 1
      AND aggregate.aggnumdirectargs = 0

  ),
  aggregates AS
  (
    SELECT
      proc_name,
      return_type,
      argument_type
    FROM
      declared_aggregates
    UNION
    SELECT
      proc_name,
      return_type,
      argument_type
    FROM enum_aggregates
  ),

  aggregates_cast_extended AS
  (
    WITH
      type_combinations AS
    (
      SELECT
        agg.proc_name AS proc_name,
        agg.return_type AS return_type,
        cast1.from_type AS argument_type,
        cast1.cast_chain_length AS argument_cast_chain_length,
        cast1.cast_chain AS argument_cast_chain
      FROM
        aggregates
        AS agg
      INNER JOIN
        implicit_casts_closure
        AS cast1
        ON (cast1.to_type = agg.argument_type)
      UNION
      SELECT
        agg.proc_name AS proc_name,
        agg.return_type AS return_type,
        agg.argument_type AS argument_type,
        0 AS argument_cast_chain_length,
        '<empty>' AS argument_cast_chain
      FROM
        aggregates
        AS agg
    ),

    preferred_combinations AS
    (
      SELECT
        *,
        -- CockroachDB does not observe ORDER BY of nested expressions,
        -- So we cannot use the DISTINCT ON idiom to remove duplicates.
        -- Therefore we resort to filtering by ordered ROW_NUMBER().
        ROW_NUMBER()
          OVER
          (
            PARTITION BY
              proc_name, argument_type
            ORDER BY
              -- Prefer least cast argument
              argument_cast_chain_length ASC,
              -- Arbitrary desperation: Lexical ordering
              return_type ASC
          )
          AS row_number
      FROM
        type_combinations
    )
    SELECT
      proc_name,
      argument_type,
      argument_cast_chain,
      return_type
    FROM
      preferred_combinations
    WHERE
      row_number = 1
  ),

  -- This relation captures the type IDs of exactly the types that may
  -- positively occur given the collections that are tracked.
  -- This is used to filter the resulting metadata such that only the types
  -- that may actually occur should appear.
  live_types AS
  (
    WITH

      liveness_implicators(antecedent, consequent) AS
      (
        -- A composite type being live implies the types of its fields being live.
        SELECT DISTINCT
          composite_types.type_id AS antecedent,
          columns.type_id AS consequent
        FROM
          composite_types
        INNER JOIN
          columns
          USING (relation_id)

        UNION

        -- * An array type being live implies its element type being live.
        SELECT
          type_id AS antecedent,
          element_type_id AS consequent
        FROM
          array_types

        UNION

        -- * A scalar type being live implies the return types of its aggregation
        --   functions being live.
        SELECT DISTINCT
          argument_type AS antecedent,
          return_type AS consequent
        FROM
          aggregates_cast_extended
      ),

      live_types_root_set(type_id) AS
      (
        -- * Tables (considered as composite types)
        SELECT
          type_id
        FROM composite_types
        INNER JOIN
          relations
          USING (relation_id)

        UNION

        -- * Native queries fields (given by query parameter)
        SELECT
          type_id
        FROM
          unnest($7) AS field_type(name_in_ndc_schema)
        INNER JOIN
          type_names
          USING (name_in_ndc_schema)
      ),

      transitive_closure AS
      (
        WITH RECURSIVE transitive_closure(type_id) AS
        (
          SELECT
            *
          FROM
            live_types_root_set
          UNION
          SELECT
            liveness_implicators.consequent AS type_id
          FROM
            liveness_implicators
          INNER JOIN
            transitive_closure
            ON (liveness_implicators.antecedent = transitive_closure.type_id)
        )
        SELECT type_id from transitive_closure
      )
    SELECT
      type_id
    FROM
      transitive_closure
  ),

  column_types_json AS
  (
    SELECT
      scalar_types.type_id,
      jsonb_build_object(
        'scalarType',
        name_in_ndc_schema
        )
        AS result
    FROM
      scalar_types
    INNER JOIN
      scalar_type_names
      ON (scalar_types.type_id = scalar_type_names.type_id)
    UNION
    SELECT
      array_types.type_id,
      jsonb_build_object(
        'arrayType',
        jsonb_build_object(
          element_type_kind,
          name_in_ndc_schema
          )
        )
        AS result
    FROM
      array_types
    INNER JOIN
      type_names
      ON (array_types.element_type_id = type_names.type_id)
    UNION
    SELECT
      composite_types.type_id,
      jsonb_build_object(
        'compositeType',
        name_in_ndc_schema
        )
        AS result
    FROM
      composite_types
    INNER JOIN
      type_names
      ON (composite_types.type_id = type_names.type_id)
  ),

  composite_type_fields_json AS
  (
    SELECT
      c.relation_id,
      jsonb_object_agg
      (
        c.column_name,
        jsonb_build_object
        (
          'fieldName',
          c.column_name,
          'type',
          t.result,
          'description',
          comm.description
        )
      )
      AS result
    FROM columns
      AS c
    LEFT OUTER JOIN column_types_json
      AS t
      ON (c.type_id = t.type_id)
    LEFT OUTER JOIN column_comments
      AS comm
      USING (relation_id, column_name)
    GROUP BY relation_id
    HAVING
      -- All columns must have a supported type.
      bool_and(NOT t.result IS NULL)
  ),

  composite_types_json AS
  (
    WITH
      composite_types_definitions AS
      (
        SELECT
        names.name_in_ndc_schema,
        jsonb_build_object
        (
          'typeName',
          names.type_name,
          'schemaName',
          names.schema_name,
          'fields',
          fields.result,
          'description',
          comm.description
        )
        AS result
      FROM
        exclusively_composite_types
        AS ct
      INNER JOIN
        live_types
        USING (type_id)
      INNER JOIN
        composite_type_names
        AS names
        ON (ct.type_id = names.type_id)
      INNER JOIN
        composite_type_fields_json
        AS fields
        USING (relation_id)
      LEFT OUTER JOIN
        type_comments
        AS comm
        ON (ct.type_id = comm.type_id)
    )
  SELECT
    jsonb_object_agg
    (
      name_in_ndc_schema,
      result
    )
    AS result
  FROM
    composite_types_definitions
  ),

  -- Comparison procedures are any entries in 'pg_proc' that happen to be
  -- binary functions that return booleans. We also require, for the sake of
  -- simplicity, that these functions be non-variadic (i.e. no default values).
  -- Within this CTE, we attempt to generate a table of comparison procedures
  -- to match the shape of the 'comparison_operators'.
  comparison_procedures AS
  (
    SELECT
      proc.proname AS operator_name,
      proc.proargtypes[0] as argument1_type,
      proc.proargtypes[1] as argument2_type,
      false AS is_infix
    FROM
      pg_catalog.pg_proc AS proc
    INNER JOIN scalar_types
      AS ret_type
      ON (ret_type.type_id = proc.prorettype)
    INNER JOIN
      -- Until the schema is made part of our model of types we only consider
      -- types defined in the public schema.
      unqualified_schemas_for_types_and_procedures
      AS q
      ON (q.schema_id = proc.pronamespace)
    WHERE
      ret_type.type_id = 'pg_catalog.bool'::regtype
      -- We check that we only consider procedures which take two regular
      -- arguments.
      AND cardinality(proc.proargtypes) = 2
      AND proc.prokind = 'f'
      AND proc.provariadic = 0
      AND proc.pronargdefaults = 0
      -- Include only procedures that are explicitly selected.
      -- This is controlled by the
      -- 'introspectPrefixFunctionComparisonOperators' configuration option.
      AND proc.proname = ANY ($5)
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
      t1.type_id AS argument1_type,
      t2.type_id AS argument2_type,
      true AS is_infix
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
    INNER JOIN
      -- Until the schema is made part of our model of operators we only consider
      -- those defined in the public schema.
      unqualified_schemas_for_types_and_procedures
      AS q
      ON (q.schema_id = op.oprnamespace)
    WHERE
      t_res.type_id = 'pg_catalog.bool'::regtype
    ORDER BY op.oprname
  ),

  -- Enum types are totally ordered and support the conventional comparison operators.
  -- They are defined implicitly (i.e., not registered in `pg_proc` or
  -- `pg_operator`) so we have to make up some definitions for them.
  enum_comparison_operators AS
  (
    SELECT
      op.oprname AS operator_name,
      e.type_id AS argument1_type,
      e.type_id AS argument2_type,
      true AS is_infix
    FROM
      (VALUES
        ('='),
        ('!='),
        ('<='),
        ('>'),
        ('>='),
        ('<')
      )
      AS op(oprname),
      enum_types e
  ),

  -- Here, we reunite our binary infix procedures and our binary prefix
  -- procedures under the umbrella of 'comparison_operators'. We do this
  -- here so that we can treat them uniformly form this point on.
  -- Specifically, we generate all the various type coercion permutations
  -- for both in 'comparison_operators_cast_extended'.
  comparison_operators AS
  (
    SELECT * FROM comparison_infix_operators
    UNION
    SELECT * FROM comparison_procedures
    UNION
    SELECT * FROM enum_comparison_operators
  ),

  -- Some comparison operators are not defined explicitly for every type they would be
  -- valid for, relying instead on implicit casts to extend the types they can apply to.
  --
  -- Examples:
  --
  --   Postgres only defines 'like' for 'text', not for 'varchar'. But there's
  --   an implicit cast for varchar->text.
  --
  --   CockroachDB does not define any comparison operators for 'float4', but does
  --   for 'float8', along with an implict cast for float4->float8.
  --
  --   Curiously, Cockroach _also_ goes on to define (e.g.) '!=' on both of
  --   '(int8,int8)' _and_ '(int8,float8)' choosing not to rely on casts in this case.
  --
  -- As such, we can expect to have to deal with two sources of overloading: From
  -- multiple definitions for different types and from implicit casts.
  --
  -- However, the NDC API is very 'argument1'-centric in the sense that its
  -- notion of a scalar type is defined in part by the set of comparison
  -- operators that take a value of this type as their first argument.
  --
  -- A consequence of this is that, in a boolean filter expression the type of
  -- the first argument of a comparison operator is given by the context it
  -- appears in. In English we can equivalently say that "on this field of type
  -- T we want to perform one of T's comparison operators."
  --
  -- Under this framing, in order to make as many comparisons available as
  -- possible, we need to extend the set of comparsion operators by the
  -- implicit casts available on their first argument.
  --
  -- For example consider hypothetically:
  --
  --   A function 'like':
  --     like(varchar, varchar) -> bool
  --
  --   .. and implicit casts:
  --     varchar -> name
  --     name -> varchar
  --
  -- Extending the definition of 'like' with implit casts on argument1 gives the set:
  --
  --    like(varchar, varchar) -> bool
  --    like(name, varchar) -> bool
  --
  -- Which means that each of 'varchar' and 'name' can get 'like' operator.
  --
  -- Of course we would also want to accept as many types as possible for the
  -- second argument. However, we hit a bottleneck if we try the same thing to argument 2.
  --
  -- Extending argument2 gives us:
  --
  --    like(varchar, varchar) -> bool
  --    like(varchar, name) -> bool
  --    like(name, varchar) -> bool
  --    like(name, name) -> bool
  --
  -- It is now not given which single variant of 'like' to pick for each of
  -- 'varchar' and 'name'.
  --
  -- To avoid this problem for now we apply the limitation of only
  -- cast-extending by the first argument.
  --
  -- Other solutions are possible, such as including the argument type names in
  -- the exposed name of the operator. Or requiring the user provide more
  -- information to drive the application of cast extension.
  --
  -- Note that since NDC configuration introspection is only a sort of
  -- conventional convenience it is still possible to manually expose whatever
  -- comparison function is required by manually adding a metadata entry for
  -- it.
  --
  -- Note also that since the various infix comparison operators on text-like
  -- types are only defined on 'text', (and the same for numerical types only
    -- on float8) a non-intuitive consequence of the above limitation is that
  -- e.g. the equality comparison operator for e.g. 'char' ends up being
  -- '_eq(char, text) -> bool'.
  comparison_operators_cast_extended AS
  (
    WITH
      type_combinations AS
    (
      SELECT
        op.operator_name,
        cast1.from_type as argument1_type,
        op.argument2_type,
        op.is_infix,
        cast1.cast_chain_length as argument1_cast_chain_length,
        cast1.cast_chain AS argument1_cast_chain,
        0 as argument2_cast_chain_length,
        '<empty>' AS argument2_cast_chain
      FROM
        comparison_operators
        AS op
      INNER JOIN
        implicit_casts_closure
        AS cast1
        ON (cast1.to_type = op.argument1_type)
      UNION
      SELECT
        op.operator_name,
        op.argument1_type,
        cast2.from_type as argument2_type,
        op.is_infix,
        0 as argument1_cast_chain_length,
        '<empty>' AS argument1_cast_chain,
        cast2.cast_chain_length as argument2_cast_chain_length,
        cast2.cast_chain AS argument2_cast_chain
      FROM
        comparison_operators
        AS op
      INNER JOIN
        implicit_casts_closure
        AS cast2
        ON (cast2.to_type = op.argument2_type)
      UNION
      SELECT
        op.operator_name,
        cast1.from_type as argument1_type,
        cast2.from_type as argument2_type,
        op.is_infix,
        cast1.cast_chain_length as argument1_cast_chain_length,
        cast1.cast_chain AS argument1_cast_chain,
        cast2.cast_chain_length as argument2_cast_chain_length,
        cast2.cast_chain AS argument2_cast_chain
      FROM
        comparison_operators
        AS op
      INNER JOIN
        implicit_casts_closure
        AS cast1
        ON (cast1.to_type = op.argument1_type)
      INNER JOIN
        implicit_casts_closure
        AS cast2
        ON (cast2.to_type = op.argument2_type)
      UNION
      SELECT
        op.operator_name,
        op.argument1_type,
        op.argument2_type,
        op.is_infix,
        0 as argument1_cast_chain_length,
        '<empty>' AS argument1_cast_chain,
        0 as argument2_cast_chain_length,
        '<empty>' AS argument2_cast_chain
      FROM
        comparison_operators
        AS op
    ),

    preferred_combinations AS
    (
      SELECT
        *,
        -- CockroachDB does not observe ORDER BY of nested expressions,
        -- So we cannot use the DISTINCT ON idiom to remove duplicates.
        -- Therefore we resort to filtering by ordered ROW_NUMBER().
        ROW_NUMBER()
          OVER
          (
            PARTITION BY
              operator_name, argument1_type
            ORDER BY
              -- In case of ambiguities:

              -- 1. Prefer directly defined versions first which uses the same
              -- type.
              (argument1_cast_chain_length = 0 AND argument2_cast_chain_length = 0)
                AND (argument1_type = argument2_type) DESC,

              -- 2. Prefer directly defined versions first which use different
              -- types.
              (argument1_cast_chain_length = 0 AND argument2_cast_chain_length = 0) DESC,

              -- 3. If argument1 was casted, prefer any version on the same type
              -- P → Q = ¬P ∨ Q
              (argument1_cast_chain_length = 0) OR (argument1_type = argument2_type) DESC,

              -- 4. Prefer uncast argument2.
              argument2_cast_chain_length = 0 DESC,

              -- 5. Prefer least cast arguments
              argument1_cast_chain_length + argument2_cast_chain_length ASC,

              -- 6. Arbitrary desperation: Lexical ordering
              argument2_type ASC
          )
          AS row_number
      FROM
        type_combinations
    )
    SELECT
      operator_name,
      argument1_type,
      argument2_type,
      is_infix,
      argument1_cast_chain,
      argument1_cast_chain_length,
      argument2_cast_chain,
      argument2_cast_chain_length,
      row_number
    FROM
      preferred_combinations
    WHERE
      row_number = 1
  ),

  -- The names that comparison operators are exposed under is configurable.
  operator_mappings AS
  (
    SELECT
      v ->> 'operatorName' AS operator_name,
      v ->> 'exposedName' AS exposed_name,
      v ->> 'operatorKind' AS operator_kind
    FROM
      jsonb_array_elements($4) AS v
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
  ),

  base_type_representations AS
  (
    SELECT
      type_names.type_id AS type_id,
      value AS representation
    FROM
      jsonb_each($6)
    INNER JOIN
      type_names
      ON (key = name_in_ndc_schema)
  ),

  enum_type_representations AS
  (
    SELECT
      enum_types.type_id,
      jsonb_build_object(
        'enum', enum_types.enum_labels
      )
      AS representation
    FROM
      enum_types
  ),

  domain_type_representations AS
  (
    SELECT
      domain_types.type_id,
      representation
    FROM
      domain_types

    INNER JOIN
      base_type_representations
      ON (domain_types.base_type = base_type_representations.type_id)
  ),

  type_representations_json AS
  (
    SELECT
        type_representations.type_id,
        type_representations.representation
        AS result
    FROM
    (
      SELECT * FROM base_type_representations
      UNION
      SELECT * FROM domain_type_representations
      UNION
      SELECT * FROM enum_type_representations
    )
    AS type_representations
  ),

  comparison_functions_json AS
  (
    -- Comparison Operators
    WITH
      comparison_infix_operators_mapped AS
      (
        SELECT
          map.exposed_name,
          op.operator_name,
          map.operator_kind,
          op.argument1_type,
          op.argument2_type,
          op.argument1_cast_chain,
          op.argument1_cast_chain_length,
          op.argument2_cast_chain,
          op.argument2_cast_chain_length,
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
          'custom' as operator_kind,
          argument1_type,
          argument2_type,
          argument1_cast_chain,
          argument1_cast_chain_length,
          argument2_cast_chain,
          argument2_cast_chain_length,
          is_infix -- always 'f'
        FROM
          comparison_operators_cast_extended
        WHERE
          is_infix = 'f'
      ),

      -- We need to include `in` as a comparison operator in the schema, and
      -- since it is syntax, it is not introspectable. Instead, we will check
      -- if the scalar type defines an equals operator and if yes, we will
      -- insert the `_in` operator as well.
      comparison_operators_in AS
      (
        SELECT
          '_in' AS exposed_name,
          'IN' AS operator_name,
          'in' AS operator_kind,
          type_id AS argument1_type,
          type_id AS argument2_type,
          '' AS argument1_cast_chain,
          0 AS argument1_cast_chain_length,
          '' AS argument2_cast_chain,
          0 AS argument2_cast_chain_length,
          true AS is_infix
        FROM
          scalar_types
      ),

      comparison_operators_processed AS
      (
        SELECT * FROM comparison_infix_operators_mapped
        UNION
        SELECT * FROM comparison_prefix_operators
        UNION
        SELECT * FROM comparison_operators_in
      ),

      comparison_operators_by_first_arg AS
      (
        SELECT
          op.argument1_type,
          jsonb_object_agg(
            op.exposed_name,
            jsonb_build_object(
              'operatorName', op.operator_name,
              'operatorKind', op.operator_kind,
              'argumentType', argument2_type_names.name_in_ndc_schema,
              'isInfix', op.is_infix,

              -- The below columns serve to aid with debugging
              -- the selection of implicit casts. They do not
              -- appear in the final metadata
              'argument1_cast_chain',
              op.argument1_cast_chain,
              'argument2_cast_chain',
              op.argument2_cast_chain
            )
          )
          AS result
        FROM
          comparison_operators_processed
          AS op
        INNER JOIN
          scalar_type_names
          AS argument2_type_names
          ON (op.argument2_type = argument2_type_names.type_id)
        INNER JOIN
          live_types
          ON (live_types.type_id = argument2_type_names.type_id)
        GROUP BY op.argument1_type
      )
    SELECT
        op.argument1_type as type_id,
        op.result
    FROM
      comparison_operators_by_first_arg
      AS op
  ),

  -- Aggregation functions
  aggregate_functions_json AS
  (
    WITH
      aggregate_by_argument_type AS
      (
        SELECT
          agg.proc_name,
          agg.argument_type,
          agg.argument_cast_chain,
          return_type_names.name_in_ndc_schema as return_type_name
        FROM
          aggregates_cast_extended AS agg
        INNER JOIN
          scalar_type_names
          AS return_type_names
          ON (agg.return_type = return_type_names.type_id)
        ORDER BY argument_type, proc_name, return_type
      )
    SELECT
      agg.argument_type as type_id,
      jsonb_object_agg(
        -- Since we are _not_ grouping by a key we need 'agg' to be ordered
        -- and distinct to get deterministic results.
        -- I.e. both functions 'f: A -> B' and 'f: A -> C' can coexist, but we
        -- can only chose one with our current scheme
        agg.proc_name,
        jsonb_build_object(
          'returnType',
          return_type_name,
          'argument_cast_chain',
          argument_cast_chain
        )
      ) AS result
    FROM
      aggregate_by_argument_type
      AS agg
    GROUP BY agg.argument_type
  ),

  scalar_types_json AS
  (
    WITH
      scalar_type_definition AS
      (
        SELECT
          names.name_in_ndc_schema,
          jsonb_build_object
          (
            'typeName', type_name,
            'schemaName', schema_name,
            'aggregateFunctions', coalesce(aggregates.result, '{}'::jsonb),
            'comparisonOperators', coalesce(comparisons.result, '{}'::jsonb),
            'typeRepresentation', representation.result
          )
          AS result
        FROM
          scalar_type_names
          AS names
        INNER JOIN
          live_types
          USING (type_id)
        LEFT OUTER JOIN
          aggregate_functions_json
          AS aggregates
          USING (type_id)
        LEFT OUTER JOIN
          comparison_functions_json
          AS comparisons
          USING (type_id)
        LEFT OUTER JOIN
          type_representations_json
          AS representation
          USING (type_id)
      )

    SELECT
      jsonb_object_agg
      (
        name_in_ndc_schema,
        result
      )
      AS result
    FROM
      scalar_type_definition
  ),

  tables_json AS
  (
    WITH

    uniqueness_constraints_json AS
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
    ),

    foreign_key_constraints_json AS
    (
      WITH
        column_mapping_unzipped AS
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
        ),

        column_mapping_json AS
        (
          SELECT
              con.relation_id,
              con.constraint_name,
              con.referenced_relation_id,
              -- The column mapping is an object '{<local column>: <referenced column>}'
              json_object_agg(
                con.key_column,
                con.referenced_column
              ) AS result
          FROM
            column_mapping_unzipped
            AS con
          GROUP BY
            (relation_id, constraint_name, referenced_relation_id)
        )

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
        column_mapping_json.relation_id,
        jsonb_object_agg(
          column_mapping_json.constraint_name,
          jsonb_build_object(
            'foreignSchema',
            foreign_relation.schema_name,
            'foreignTable',
            foreign_relation.relation_name,
            'columnMapping',
            column_mapping_json.result
          )
        )
        AS result
      FROM
        column_mapping_json
      INNER JOIN
        relation_names
        AS foreign_relation
        ON (foreign_relation.relation_id = column_mapping_json.referenced_relation_id)
      GROUP BY column_mapping_json.relation_id
    ),

    columns_json AS
    (
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
            'hasDefault',
            c.has_default,
            'isIdentity',
            c.is_identity,
            'isGenerated',
            c.is_generated,
            'description',
            comm.description
            )
        )
        AS result
      FROM columns
        AS c
      LEFT OUTER JOIN column_types_json
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
    -- Tables and views
    SELECT
      jsonb_object_agg(
        rel.name_in_ndc_schema,
        jsonb_build_object(
          'schemaName',
          rel.schema_name,
          'tableName',
          rel.relation_name,
          'description',
          comm.description,
          'columns',
          columns_json.result,
          'uniquenessConstraints',
          coalesce(uniqueness_constraints_json.result, '{}'::jsonb),
          'foreignRelations',
          coalesce(foreign_key_constraints_json.result, '{}'::jsonb)
        )
      )
      AS result
    FROM
      relation_names
      AS rel

    LEFT OUTER JOIN
      table_comments
      AS comm
      USING (relation_id)

    -- Columns
    INNER JOIN
      columns_json
    USING (relation_id)

    -- Uniqueness constraints
    LEFT OUTER JOIN
      uniqueness_constraints_json
    USING (relation_id)

    -- Foreign-key constraints.
    LEFT OUTER JOIN
      foreign_key_constraints_json
    USING (relation_id)
  )

SELECT
  coalesce(tables_json.result, '{}'::jsonb) AS "Tables",
  coalesce(scalar_types_json.result, '{}'::jsonb) AS "ScalarTypes",
  coalesce(composite_types_json.result, '{}'::jsonb) AS "CompositeTypes"
FROM scalar_types_json
CROSS JOIN composite_types_json
CROSS JOIN tables_json
;

-- Uncomment the following lines to just run the configuration query with reasonable default arguments
--
-- EXECUTE configuration(
--   '{"information_schema", "tiger", "pg_catalog", "topology"}'::varchar[],
--   '{"public"}'::varchar[],
--   '{"public", "pg_catalog", "tiger"}'::varchar[],
--   '[
--     {"operatorName": "=", "exposedName": "_eq", "operatorKind": "equal"},
--     {"operatorName": "!=", "exposedName": "_neq", "operatorKind": "custom"},
--     {"operatorName": "<=", "exposedName": "_lte", "operatorKind": "custom"},
--     {"operatorName": ">", "exposedName": "_gt", "operatorKind": "custom"},
--     {"operatorName": ">=", "exposedName": "_gte", "operatorKind": "custom"},
--     {"operatorName": "<", "exposedName": "_lt", "operatorKind": "custom"},
--     {"operatorName": "~~", "exposedName": "_like", "operatorKind": "custom"},
--     {"operatorName": "!~~", "exposedName": "_nlike", "operatorKind": "custom"},
--     {"operatorName": "~~*", "exposedName": "_ilike", "operatorKind": "custom"},
--     {"operatorName": "!~~*", "exposedName": "_nilike", "operatorKind": "custom"},
--     {"operatorName": "~", "exposedName": "_regex", "operatorKind": "custom"},
--     {"operatorName": "!~", "exposedName": "_nregex", "operatorKind": "custom"},
--     {"operatorName": "~*", "exposedName": "_iregex", "operatorKind": "custom"},
--     {"operatorName": "!~*", "exposedName": "_niregex", "operatorKind": "custom"}
--    ]'::jsonb,
--   '{box_above,box_below, st_covers, st_coveredby}'::varchar[],
--   '{"int4": "integer"}'::jsonb,
--   '{bool}'::varchar[]
-- );

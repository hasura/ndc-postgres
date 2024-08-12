SELECT
  'The organization ' || org.name || ' has ' || no_committees :: text || ' committees, ' || 'the largest of which has ' || max_members || ' members.' AS result
FROM
  (
    SELECT
      orgs.*
    FROM
      unnest({{organizations}}) AS orgs
  ) AS org
  JOIN LATERAL (
    SELECT
      count(committee.*) AS no_committees,
      max(members_agg.no_members) AS max_members
    FROM
      unnest(org.committees) AS committee
      JOIN LATERAL (
        SELECT
          count(*) AS no_members
        FROM
          unnest(committee.members) AS members
      ) AS members_agg ON TRUE
  ) AS coms ON TRUE
;

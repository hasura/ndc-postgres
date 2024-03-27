-- This file is used to test the support of enum types

CREATE TYPE card_suit AS ENUM ('hearts', 'clubs', 'diamonds', 'spades');

CREATE TABLE deck_of_cards (pips int2 not null, suit card_suit not null);

INSERT INTO deck_of_cards
  SELECT
    pips,
    suit
  FROM
    generate_series(1, 13) AS pips(pips),
    unnest(enum_range(null::card_suit)) AS suits(suit);

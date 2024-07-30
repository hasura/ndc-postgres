-- | The purpose of script is to automate some of the actions necessarily to update the changelog
--   before releasing a new version. It will:
--
--   1. Replace the `[Unreleased]` header with a `[<version>] - <date>` header
--   2. Insert a new `[Unreleased]` template at the top
--   3. Fix the references at the bottom

{-# language LambdaCase #-}

import System.Environment
import Data.List

main :: IO ()
main = do
  (filepath, today'sDate, newVersion) <- getArgs >>= \case
    [filepath, date, ver] -> pure (filepath, date, "v" <> ver)
    _ -> error "Usage: runghc changelog.hs <changelog-filepath> <today's date> <version>"
  file <- lines <$> readFile filepath

  -- This is mostly just to force reading the entire file before we can write to it.
  putStrLn $
    "Found "
      <> show (length (filter ("## " `isPrefixOf`) file) - 1)
      <> " versions. Adding: "
      <> newVersion
      <> " to changelog."

  let result = map (replaceUnrelated newVersion) $ addNewTemplate today'sDate newVersion $ drop 4 file
  writeFile filepath $ unlines result

addNewTemplate :: String -> String -> [String] -> [String]
addNewTemplate date newVersion rest =
    [ "# Changelog",
      "",
      "## [Unreleased]",
      "",
      "### Added",
      "",
      "### Changed",
      "",
      "### Fixed",
      "",
      "## [" <> newVersion <> "] - " <> date,
      ""
    ] <> rest

replaceUnrelated :: String -> String -> String
replaceUnrelated newVersion line
  | "[Unreleased]: " `isPrefixOf` line =
    intercalate "\n"
      [ "[Unreleased]: https://github.com/hasura/ndc-postgres/compare/" <> newVersion <> "...HEAD",
        "[" <> newVersion <> "]: https://github.com/hasura/ndc-postgres/releases/tag/" <> newVersion
      ]

  | otherwise = line

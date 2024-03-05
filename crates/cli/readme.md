# ndc-postgres-cli

ndc-postgres-cli is used to configure a deployment of ndc-postgres.
It is intended to be automatically downloaded and invoked via the Hasura CLI, as a plugin.

## Create a configuration

Create a configuration in a new directory using the following commands:

1. Initialize a configuration:

   ```sh
   CONNECTION_URI='<postgres-connection-string>' cargo run --bin ndc-postgres-cli -- --context='<directory>' initialize
   ```

2. Update the configuration by introspecting the database:

   ```sh
   CONNECTION_URI='<postgres-connection-string>' cargo run --bin ndc-postgres-cli -- --context='<directory>' update
   ```

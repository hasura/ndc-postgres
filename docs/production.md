# Hasura PostgreSQL Connector in Production

We ship the various connectors as Docker images, built with Nix.

## Build

You can build each one with `nix build '.#docker'`, which will build a Docker tarball.

For example, to build the PostgreSQL image and load it into your Docker image registry, run:

```
gunzip < "$(nix build --no-warn-dirty --no-link --print-out-paths '.#docker')" | docker load
```

This will build an image named `ghcr.io/hasura/ndc-postgres:dev`.

As a shortcut, `just build-docker-with-nix` will build the PostgreSQL image.

## Run

Set up the PostgreSQL database you wish to connect to. For example, in order to create a transient database loaded with
Chinook, you could use the following Docker Compose configuration:

```yaml
services:
  db:
    image: postgres
    platform: linux/amd64
    environment:
      POSTGRES_PASSWORD: "password"
    volumes:
      - type: tmpfs
        target: /var/lib/postgresql/data
      - type: bind
        source: ./static/chinook-postgres.sql
        target: /docker-entrypoint-initdb.d/chinook-postgres.sql
        read_only: true
    healthcheck:
      test:
        - CMD-SHELL
        - psql -U "$${POSTGRES_USER:-postgres}" < /dev/null && sleep 5 && psql -U "$${POSTGRES_USER:-postgres}" < /dev/null
      start_period: 5s
      interval: 5s
      timeout: 10s
      retries: 20
```

Next, create a configuration file. For the example above, you can do this by copying `./static/postgres/chinook-ndc-metadata.json`
to a new file (e.g. `./ndc-metadata.json`) and changing the `"connectionUri"` to
`{"uri":"postgresql://postgres:password@db"}`.

Once that's set up, you can set up the connector to point at your PostgreSQL database:

```yaml
services:
  connector:
    image: ghcr.io/hasura/ndc-postgres:dev
    command:
      - serve
      - --configuration=/ndc-metadata.json
    ports:
      - 8100:8100
    volumes:
      - type: bind
        source: ./ndc-metadata.json
        target: /ndc-metadata.json
        read_only: true
    healthcheck:
      test:
        - CMD
        - ndc-postgres
        - check-health
      start_period: 5s
      interval: 5s
      timeout: 10s
      retries: 3
    depends_on:
      db:
        condition: service_healthy
```

Running `docker compose up --detach --wait` will start the container running on port 8100.

Note that the `healthcheck` section refers to the binary `ndc-postgres`. This will vary per connector flavor.

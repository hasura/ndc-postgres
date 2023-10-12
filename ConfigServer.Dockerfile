## This dockerfile builds the configuration server of the ndc-postgres

## Use base image to build the binaries
FROM rust:1.68.2-slim-buster AS build

WORKDIR app

RUN apt-get update \
 && DEBIAN_FRONTEND=noninteractive \
    apt-get install --no-install-recommends --assume-yes \
      lld protobuf-compiler libssl-dev ssh git pkg-config

RUN mkdir -p -m 0700 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts

ENV RUSTFLAGS="-C link-arg=-fuse-ld=lld"

COPY . .

RUN --mount=type=ssh cargo build --release --bin ndc-postgres

## Copy the binaries and serve the configuration server
FROM debian:buster-slim as ndc-postgres
ENV PORT=9100

## Install curl for the health check
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends --assume-yes curl
COPY --from=build /app/target/release/ndc-postgres ./ndc-postgres
CMD ["sh", "-c", "./ndc-postgres configuration serve"]

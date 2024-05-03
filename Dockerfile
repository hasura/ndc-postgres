# See https://github.com/LukeMathWalker/cargo-chef
# this should match the Rust version in rust-toolchain.yaml and the
# dev-auth-webhook
FROM rust:1.77.0 as chef

WORKDIR app

RUN apt-get update \
 && DEBIAN_FRONTEND=noninteractive \
    apt-get install --no-install-recommends --assume-yes \
      lld protobuf-compiler libssl-dev ssh git pkg-config curl jq

ENV CARGO_HOME=/app/.cargo

RUN cargo install cargo-chef

# Building with build.rs require git context to be available across directories
ENV GIT_DISCOVERY_ACROSS_FILESYSTEM=1

# Install standard tooling once
COPY rust-toolchain.toml .
RUN rustup show

###
# Plan recipe
FROM chef AS planner

ENV CARGO_HOME=/app/.cargo
ENV RUSTFLAGS="-C link-arg=-fuse-ld=lld"

COPY . .
RUN cargo chef prepare --recipe-path recipe.json

###
# Build recipe
FROM chef AS builder

# Use lld
ENV CARGO_HOME=/app/.cargo
ENV PATH="$PATH:$CARGO_HOME/bin"
ENV RUSTFLAGS="-C link-arg=-fuse-ld=lld"

COPY --from=planner /app/recipe.json recipe.json

# Build dependencies - this is the caching Docker layer!
RUN cargo chef cook --release --bin ndc-postgres --recipe-path recipe.json

# Copies the source after building dependencies to allow caching
COPY . .

###
# Builds the application
FROM builder AS built
# Build the app
RUN cargo build --release --bin ndc-postgres

###
# Ship the app in an image with `curl` and very little else
FROM ubuntu:jammy

# Install `curl` for health checks
RUN set -ex; \
    apt-get update -q; \
    apt-get install -q -y curl

# Install the engine
COPY --from=built /app/target/release/ndc-postgres /usr/local/bin
ENTRYPOINT ["ndc-postgres"]

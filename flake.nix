{
  description = "PostgreSQL data connector";

  inputs = {
    nixpkgs.url = github:NixOS/nixpkgs/nixos-unstable;
    flake-utils.url = github:numtide/flake-utils;

    crane = {
      url = "github:ipetkov/crane";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    rust-overlay = {
      url = "github:oxalica/rust-overlay";
      inputs = {
        nixpkgs.follows = "nixpkgs";
        flake-utils.follows = "flake-utils";
      };
    };
  };

  outputs = { self, nixpkgs, flake-utils, crane, rust-overlay }:
    flake-utils.lib.eachDefaultSystem (localSystem:
      let
        pkgs = import nixpkgs {
          system = localSystem;
          overlays = [ rust-overlay.overlays.default ];
        };

        rust = import ./nix/rust.nix {
          inherit nixpkgs rust-overlay crane localSystem;
        };
      in
      {
        packages = {
          # a binary for whichever is the local computer
          default = rust.callPackage ./nix/app.nix { };

          # cross compiler an x86_64 linux binary
          x86_64-linux = (import ./nix/rust.nix {
            inherit nixpkgs rust-overlay crane localSystem;
            crossSystem = "x86_64-linux";
          }).callPackage ./nix/app.nix
            { };
          # cross compile a aarch64 linux binary
          aarch64-linux = (import ./nix/rust.nix {
            inherit nixpkgs rust-overlay crane localSystem;
            crossSystem = "aarch64-linux";
          }).callPackage ./nix/app.nix
            { };

          # docker for local system
          docker = pkgs.callPackage ./nix/docker.nix {
            package = self.packages.${localSystem}.default;
            image-name = "ghcr.io/hasura/ndc-postgres";
            tag = "dev";
          };
          # docker for x86_64-linux
          docker-x86_64-linux = pkgs.callPackage ./nix/docker.nix {
            package = self.packages.${localSystem}.x86_64-linux;
            architecture = "amd64";
            image-name = "ghcr.io/hasura/ndc-postgres-x86_64";
          };
          # docker for aarch64-linux
          docker-aarch64-linux = pkgs.callPackage ./nix/docker.nix {
            package = self.packages.${localSystem}.aarch64-linux;
            architecture = "arm64";
            image-name = "ghcr.io/hasura/ndc-postgres-aarch64";
          };

          publish-docker-image = pkgs.writeShellApplication {
            name = "publish-docker-image";
            runtimeInputs = with pkgs; [ coreutils skopeo ];
            text = builtins.readFile ./ci/deploy.sh;
          };
        };

        checks = {
          # Build the crate as part of `nix flake check`
          ndc-postgres = self.packages.${localSystem}.default;
        };

        formatter = pkgs.nixpkgs-fmt;

        devShells.default = pkgs.mkShell {
          # build-time inputs
          nativeBuildInputs = [
            # Development
            pkgs.just
            pkgs.nixpkgs-fmt
            pkgs.nodePackages.prettier
            pkgs.pkg-config

            # Rust
            pkgs.cargo-edit
            pkgs.cargo-expand
            pkgs.cargo-flamegraph
            pkgs.cargo-insta
            pkgs.cargo-machete
            pkgs.cargo-nextest
            pkgs.cargo-watch
            pkgs.rnix-lsp
            rust.rustToolchain

            # Benchmarks
            pkgs.k6

            # Deployment
            pkgs.skopeo
          ];

          # runtime inputs
          buildInputs = [
            pkgs.openssl
            pkgs.protobuf
          ];
        };

        # This performance-testing shell will only work on Linux.
        devShells.perf = pkgs.mkShell {
          inputsFrom = [
            self.devShells.${localSystem}.default
          ];

          # build-time inputs
          nativeBuildInputs = [
            pkgs.heaptrack
            pkgs.linuxPackages_latest.perf
            pkgs.mold-wrapped
            pkgs.valgrind
          ];
        };
      }
    );
}

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

        # Edit ./nix/ndc-agent.nix to adjust library and buildtime
        # dependencies or other build configuration for postgres-agent
        crateExpression = import ./nix/ndc-agent.nix;

        cargoBuild = import ./nix/cargo-build.nix;

        binary-name = "ndc-postgres";

        package = cargoBuild {
          inherit binary-name crateExpression;
          rust = import ./nix/rust.nix {
            inherit nixpkgs rust-overlay crane localSystem;
          };
        };
      in
      {
        packages = rec {
          # a binary for whichever is the local computer
          default = package;

          # cross compiler an x86_64 linux binary
          x86_64-linux = cargoBuild {
            inherit binary-name crateExpression;
            rust = import ./nix/rust.nix {
              inherit nixpkgs rust-overlay crane localSystem;
              crossSystem = "x86_64-linux";
            };
          };
          # cross compile a aarch64 linux binary
          aarch64-linux = cargoBuild {
            inherit binary-name crateExpression;
            rust = import ./nix/rust.nix {
              inherit nixpkgs rust-overlay crane localSystem;
              crossSystem = "aarch64-linux";
            };
          };

          # docker for local system
          docker = pkgs.callPackage ./nix/docker.nix {
            inherit binary-name;
            ndc-agent = default;
            image-name = "ghcr.io/hasura/ndc-postgres";
            tag = "dev";
          };
          # docker for x86_64-linux
          docker-x86_64-linux = pkgs.callPackage ./nix/docker.nix {
            inherit binary-name;
            ndc-agent = x86_64-linux;
            architecture = "amd64";
            image-name = "ghcr.io/hasura/ndc-postgres-x86_64";
          };
          # docker for aarch64-linux
          docker-aarch64-linux = pkgs.callPackage ./nix/docker.nix {
            inherit binary-name;
            ndc-agent = aarch64-linux;
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
          ndc-postgres = package;
        };

        formatter = pkgs.nixpkgs-fmt;

        devShells.default = pkgs.mkShell {
          inputsFrom = builtins.attrValues self.checks.${localSystem};
          nativeBuildInputs = [
            # runtime
            pkgs.protobuf

            # development
            pkgs.cargo-edit
            pkgs.cargo-flamegraph
            pkgs.cargo-insta
            pkgs.cargo-machete
            pkgs.cargo-nextest
            pkgs.cargo-watch
            pkgs.just
            pkgs.k6
            pkgs.nixpkgs-fmt
            pkgs.nodePackages.prettier
            pkgs.pkg-config
            pkgs.rnix-lsp
            pkgs.skopeo
            pkgs.nodePackages.prettier
            rust.rustToolchain
          ] ++ (
            pkgs.lib.optionals
              pkgs.stdenv.isLinux
              [
                pkgs.heaptrack
                pkgs.linuxPackages_latest.perf
                pkgs.mold-wrapped
                pkgs.valgrind
              ]
          );
        };
      });
}

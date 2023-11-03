# This is a function that returns a derivation for the compiled Rust project.
{ rust }:
let
  inherit (rust) pkgs;

  buildArgs = {
    pname = "ndc-postgres";

    src =
      let
        isJsonFile = path: _type: builtins.match ".*json" path != null;
        isSqlFile = path: _type: builtins.match ".*sql" path != null;
        isSourceFile = path: type:
          isJsonFile path type
          || isSqlFile path type
          || rust.craneLib.filterCargoSources path type;
      in
      pkgs.lib.cleanSourceWith { src = rust.craneLib.path ./..; filter = isSourceFile; };

    buildInputs = [
      pkgs.openssl
    ] ++ pkgs.lib.optionals pkgs.stdenv.hostPlatform.isDarwin [
      pkgs.libiconv
      pkgs.darwin.apple_sdk.frameworks.Security
      pkgs.darwin.apple_sdk.frameworks.SystemConfiguration
    ];

    nativeBuildInputs = [
      pkgs.pkg-config # required for non-static builds
      pkgs.protobuf # required by opentelemetry-proto, a dependency of axum-tracing-opentelemetry
    ];
  };

  # Build the dependencies first.
  cargoArtifacts = rust.craneLib.buildDepsOnly buildArgs;

  # Then build the crate.
  crate = rust.craneLib.buildPackage
    (buildArgs // {
      inherit cargoArtifacts;
      doCheck = false;
    });
in
# Override the derivation to add cross-compilation and static linking environment variables.
crate.overrideAttrs (previous: rust.buildArgs // {
  # We also have to override the `cargoArtifacts` derivation with the same changes.
  cargoArtifacts = previous.cargoArtifacts.overrideAttrs (previous: rust.buildArgs);
})

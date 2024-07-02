# This is a function that returns a derivation for the compiled Rust project.
{ craneLib
, lib
, hostPlatform
, openssl
, libiconv
, pkg-config
, protobuf
, darwin
}:
let
  buildArgs = {
    pname = "ndc-postgres";
    version = "0.1.0";

    src =
      let
        isJsonFile = path: _type: builtins.match ".*json" path != null;
        isSqlFile = path: _type: builtins.match ".*sql" path != null;
        isSourceFile = path: type:
          isJsonFile path type
          || isSqlFile path type
          || craneLib.filterCargoSources path type;
      in
      lib.cleanSourceWith { src = craneLib.path ./..; filter = isSourceFile; };

    strictDeps = true;

    # build-time inputs
    nativeBuildInputs = [
      openssl.dev # required to build Rust crates that can conduct TLS connections
      pkg-config # required to find OpenSSL
    ];

    # runtime inputs
    buildInputs = [
      openssl # required for TLS connections
      protobuf # required by opentelemetry-proto, a dependency of axum-tracing-opentelemetry
    ] ++ lib.optionals hostPlatform.isDarwin [
      # macOS-specific dependencies
      libiconv
      darwin.apple_sdk.frameworks.CoreFoundation
      darwin.apple_sdk.frameworks.Security
      darwin.apple_sdk.frameworks.SystemConfiguration
    ];
  };

  # Build the dependencies first.
  cargoArtifacts = craneLib.buildDepsOnly buildArgs;
in
# Then build the crate.
craneLib.buildPackage
  (buildArgs // {
    inherit cargoArtifacts;
    doCheck = false;
  })

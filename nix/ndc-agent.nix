# Dependencies and build configuration for the postgres-agent crate.
#
# To add runtime library dependencies, add packge names to the argument set
# here, and add the same name to the `buildInputs` list below.
#
# To add buildtime dependencies, add packge names to the argument set
# here, and add the same name to the `nativeBuildInputs` list below.
#
# To add environment variables add attributes to `buildArgs`.
#
# To set Cargo options, or other configuration see the Crane documentation,
# https://crane.dev/API.html#cranelibbuildpackage
#
{ craneLib
, lib
, openssl
, libiconv
, pkg-config
, protobuf
, stdenv
, pkgsStatic
, binary-name
}:

let
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

  buildArgs = {
    inherit src;

    pname = binary-name;

    buildInputs = [
      openssl
    ] ++ lib.optionals stdenv.hostPlatform.isDarwin [
      libiconv
      pkgsStatic.darwin.apple_sdk.frameworks.Security
      pkgsStatic.darwin.apple_sdk.frameworks.SystemConfiguration
    ];

    nativeBuildInputs = [
      pkg-config # required for non-static builds
      protobuf # required by opentelemetry-proto, a dependency of axum-tracing-opentelemetry
    ];
  };

  cargoArtifacts = craneLib.buildDepsOnly buildArgs;

  crate = craneLib.buildPackage
    (buildArgs // {
      inherit cargoArtifacts;
      doCheck = false;
      cargoExtraArgs = "--locked --bin ${binary-name}";
    });
in
crate.overrideAttrs (prev: {
  # Add buildArgs to the returned derivation so that we can access it from the
  # caller. cargoArtifacts is included automatically.
  passthru.buildArgs = buildArgs;
})

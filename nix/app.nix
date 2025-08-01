# This is a function that returns a derivation for the compiled Rust project.
{ craneLib
, lib
, pkgsStatic
, hostPlatform
, openssl
, libiconv
, pkg-config
, protobuf
, darwin
, binaryName
, staticallyLinked
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
    ];
  
  } // lib.optionalAttrs staticallyLinked {
    # Configure openssl-sys for static linking. The build script for the
    # openssl-sys crate requires openssl lib and include locations to be
    # specified explicitly for this case.
    #
    # `pkgsStatic` provides versions of nixpkgs that are compiled with musl
    OPENSSL_STATIC = "1";
    OPENSSL_LIB_DIR = "${pkgsStatic.openssl.out}/lib";
    OPENSSL_INCLUDE_DIR = "${pkgsStatic.openssl.dev}/include";
  };

  # Build the dependencies first.
  cargoArtifacts = craneLib.buildDepsOnly buildArgs;
in
# Then build the crate.
craneLib.buildPackage
  (buildArgs // {
    inherit cargoArtifacts;
    cargoExtraArgs = "--bin ${binaryName} --locked";
    doCheck = false;
  })

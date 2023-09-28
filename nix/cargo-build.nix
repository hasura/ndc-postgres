# This is a function that returns a derivation for the compiled Rust project.
# Supports cross-compiling, and statically-links builds compiled for Linux.
#
# The derivation includes some extra attributes with some of the resources that
# were used to produce the derivation:
#
# - buildArgs
# - cargoArtifacts
# - craneLib
# - rustToolchain
{
  # `crateExpression` must be a function that takes an arguments set, and
  # returns a derivation made by calling `craneLib.buildPackage`. Any packages
  # listed in the argument set will be populated automatically. In addition
  # these special attributes will be given:
  #
  # - craneLib - see https://crane.dev/API.html#cranelibbuildpackage
  # - staticallyLinked - boolean to indicate whether we are linking statically
  #
  crateExpression
, nixpkgs
, crane
, rust-overlay
, localSystem
, binary-name
, crossSystem ? localSystem
}:

let
  pkgs = import nixpkgs {
    inherit crossSystem localSystem;
    overlays = [ rust-overlay.overlays.default ];
  };

  # `hostPlatform` is the cross-compilation output platform;
  # `buildPlatform` is the platform we are compiling on
  buildPlatform = pkgs.stdenv.buildPlatform;
  hostPlatform = pkgs.stdenv.hostPlatform;

  # We can statically-link if the cross-compilation target is Linux, and the
  # build system is 64-bit because these are the conditions where Nix has musl
  # packages available.
  staticallyLinked = hostPlatform.isLinux && buildPlatform.is64bit;

  # `config` is a cpu-vendor-os-abi string like "aarch64-unknown-linux-gnu". To
  # statically link we need to change the ABI from "gnu" to "musl".
  #
  # Ideally we would pass in a crossSystem argument of the form
  # "aarch64-unknown-linux-musl" instead of doing this fixup. But that doesn't
  # seem to work.
  buildTarget =
    if staticallyLinked then builtins.replaceStrings [ "gnu" ] [ "musl" ] hostPlatform.config
    else hostPlatform.config;

  # When possibly cross-compiling we get several versions of nixpkgs of the
  # form, `pkgs.pkgs<where it runs><platform it produces outputs for>`. We use
  # `pkgs.pkgsBuildHost` to get packages that run at build time (so run on the
  # build platform), and that produce outputs for the host platform which is the
  # cross-compilation target.
  rustToolchain = (pkgs.pkgsBuildHost.rust-bin.fromRustupToolchainFile ../rust-toolchain.toml).override {
    targets = [ buildTarget ];
  };

  lib = pkgs.pkgsBuildHost.lib;

  craneLib = (crane.mkLib pkgs).overrideToolchain rustToolchain;

  # Converts host system string for use in environment variable names
  envCase = triple: lib.strings.toUpper (builtins.replaceStrings [ "-" ] [ "_" ] triple);

  buildArgs = {
    CARGO_BUILD_TARGET = buildTarget;
    "CARGO_TARGET_${envCase buildTarget}_LINKER" = "${pkgs.stdenv.cc.targetPrefix}cc";

    # This environment variable may be necessary if any of your dependencies use
    # a build-script which invokes the `cc` crate to build some other code. The
    # `cc` crate should automatically pick up on our target-specific linker
    # above, but this may be necessary if the build script needs to compile and
    # run some extra code on the build system.
    HOST_CC = "${pkgs.stdenv.cc.nativePrefix}cc";
  }
  // lib.optionalAttrs staticallyLinked {
    CARGO_BUILD_RUSTFLAGS = "-C target-feature=+crt-static";
  };

  # Call the given crateExpression to build the crate - or rather to get
  # a derivation that will build the crate.
  crate = pkgs.callPackage crateExpression {
    inherit craneLib staticallyLinked binary-name;
  };
in
# Override the derivation to add cross-compilation and static linking environment variables.
crate.overrideAttrs (previous: buildArgs // {
  # We also have to override the cargoArtifacts derivation with the same
  # changes.
  cargoArtifacts = previous.cargoArtifacts.overrideAttrs (previous: buildArgs);

  # Add craneLib and rustToolchain to the returned derivation so that we can
  # access them from the caller. And pass buildArgs forward from the
  # outupt of crateExpression.
  passthru = {
    inherit craneLib rustToolchain;
    inherit (crate) buildArgs;
  };
})

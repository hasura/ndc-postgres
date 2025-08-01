# Sets up our Rust toolchain and Crane for cross-compilation.
# This is mostly a copy of the example provided at:
# https://crane.dev/examples/cross-rust-overlay.html
{ nixpkgs
, rust-overlay
, crane
, localSystem
, crossSystem ? localSystem
, staticallyLinked ? false
}:
let
  pkgs = import nixpkgs {
    inherit crossSystem localSystem;
    overlays = [ rust-overlay.overlays.default ];
  };

  lib = pkgs.pkgsBuildHost.lib;

  # Converts host system string for use in environment variable names
  envCase = triple: lib.strings.toUpper (builtins.replaceStrings [ "-" ] [ "_" ] triple);

  # `hostPlatform` is the cross-compilation output platform;
  # `buildPlatform` is the platform we are compiling on
  buildPlatform = pkgs.stdenv.buildPlatform;
  hostPlatform = pkgs.stdenv.hostPlatform;

  # nixpkgs decided to change the name of the darwin targets which wrecks everything
  hostPlatformName =
    if hostPlatform.config == "arm64-apple-darwin"
    then "aarch64-apple-darwin"
    else hostPlatform.config;

  # We can statically-link if the cross-compilation target is Linux, and the
  # build system is 64-bit because these are the conditions where Nix has musl
  # packages available.
  isStaticallyLinked = staticallyLinked && hostPlatform.isLinux && buildPlatform.is64bit;

  # `config` is a cpu-vendor-os-abi string like "aarch64-unknown-linux-gnu". To
  # statically link we need to change the ABI from "gnu" to "musl".
  #
  # Ideally we would pass in a crossSystem argument of the form
  # "aarch64-unknown-linux-musl" instead of doing this fixup. But that doesn't
  # seem to work.
  hostPlatformNameWithLinking =
    if isStaticallyLinked then builtins.replaceStrings [ "gnu" ] [ "musl" ] hostPlatformName 
    else hostPlatformName;

  # When possibly cross-compiling we get several versions of nixpkgs of the
  # form, `pkgs.pkgs<where it runs><platform it produces outputs for>`. We use
  # `pkgs.pkgsBuildHost` to get packages that run at build time (so run on the
  # build platform), and that produce outputs for the host platform which is the
  # cross-compilation target.
  rustBin = pkgs.pkgsBuildHost.rust-bin.fromRustupToolchainFile ../rust-toolchain.toml;
  rustToolchain = rustBin.override { targets = [ (builtins.trace "${hostPlatformNameWithLinking}" hostPlatformNameWithLinking) ]; };
  craneLib = (crane.mkLib pkgs).overrideToolchain rustToolchain;

  buildEnv = {
    CARGO_BUILD_TARGET = hostPlatformNameWithLinking;
    "CARGO_TARGET_${envCase hostPlatformNameWithLinking}_LINKER" = "${pkgs.stdenv.cc.targetPrefix}cc";
    CC = "x86_64-linux-gnu-gcc";

    # This environment variable may be necessary if any of your dependencies use
    # a build-script which invokes the `cc` crate to build some other code. The
    # `cc` crate should automatically pick up on our target-specific linker
    # above, but this may be necessary if the build script needs to compile and
    # run some extra code on the build system.
    HOST_CC = "${pkgs.stdenv.cc.nativePrefix}cc";
  } // lib.optionalAttrs isStaticallyLinked {
      CARGO_BUILD_RUSTFLAGS = "-C target-feature=+crt-static";
    };
in
{
  inherit rustToolchain;

  callPackage = (package: args:
    # Call the package, providing `craneLib` as an extra.
    let crate = pkgs.callPackage package (args // { inherit craneLib; staticallyLinked = isStaticallyLinked; });
    in
    # Override the derivation to add cross-compilation environment variables.
    crate.overrideAttrs (previous: (builtins.trace "${buildEnv.CARGO_BUILD_TARGET} ${buildEnv.CARGO_BUILD_RUSTFLAGS}" buildEnv) // {
      # We also have to override the `cargoArtifacts` derivation with the same changes.
      cargoArtifacts = previous.cargoArtifacts.overrideAttrs (previous: buildEnv);
    }));
}

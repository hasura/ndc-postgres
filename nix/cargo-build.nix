# This is a function that returns a derivation for the compiled Rust project.
{ rust
  # `crateExpression` must be a function that takes an arguments set, and
  # returns a derivation made by calling `craneLib.buildPackage`. Any packages
  # listed in the argument set will be populated automatically. In addition
  # these special attributes will be given:
, crateExpression
, binary-name
}:

let
  # Call the given crateExpression to build the crate - or rather to get
  # a derivation that will build the crate.
  crate = rust.pkgs.callPackage crateExpression {
    inherit (rust) craneLib;
    inherit binary-name;
  };
in
# Override the derivation to add cross-compilation and static linking environment variables.
crate.overrideAttrs (previous: rust.buildArgs // {
  # We also have to override the `cargoArtifacts` derivation with the same changes.
  cargoArtifacts = previous.cargoArtifacts.overrideAttrs (previous: rust.buildArgs);
})

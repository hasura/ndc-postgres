fn main() {
    // Ensure that we rebuild if the version is specified.
    println!("cargo:rerun-if-env-changed=RELEASE_VERSION");
}

fn main() {
    // Ensure that we rebuild if the version is specified.
    println!("cargo:rerun-if-env-changed=RELEASE_VERSION");

    // On release builds, use the Git commit as a backup if the version is not set.
    // On debug builds, don't bother.
    // If we fail to get the Git information, give up and proceed anyway.
    let build_profile = std::env::var("PROFILE").unwrap();
    if build_profile == "release" && option_env!("RELEASE_VERSION").is_none() {
        if let Ok(git_commit_ref) = build_data::get_git_commit_short() {
            let git_dirty = build_data::get_git_dirty().unwrap_or(false);
            let release_version = if git_dirty {
                format!("{git_commit_ref}-dirty")
            } else {
                git_commit_ref
            };
            println!("cargo:rustc-env=RELEASE_VERSION={release_version}");
        }
    }
}

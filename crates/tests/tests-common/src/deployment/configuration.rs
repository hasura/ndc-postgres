//! Deployment configuration functions used across test cases.
//! Use via helpers in `mod.rs` rather than directly.
//!
use super::helpers::get_path_from_project_root;
use serde_json::Value;
use std::fs;

/// Load deployment at `main_deployment_path`
/// replace url with `new_postgres_url`
/// save at `new_deployment_path`
pub fn copy_deployment_with_new_postgres_url(
    main_deployment_path: &str,
    new_postgres_url: &str,
    new_deployment_path: &str,
) {
    let full_path = get_path_from_project_root(main_deployment_path);

    // load and decode deployment
    let deployment: Value = serde_json::from_str(&fs::read_to_string(full_path).unwrap()).unwrap();

    let new_json = match deployment {
        Value::Object(mut map) => {
            map.insert(
                "postgres_database_url".to_string(),
                Value::String(new_postgres_url.to_string()),
            );
            Value::Object(map)
        }
        other => other,
    };

    let new_absolute_deployment_path = get_path_from_project_root(new_deployment_path);

    let new_deployment = new_json.to_string();

    fs::write(new_absolute_deployment_path, new_deployment).unwrap()
}

/// Erase test deployment file created at `deployment_path`
pub fn delete_deployment(deployment_path: &str) {
    let absolute_path = get_path_from_project_root(deployment_path);

    fs::remove_file(absolute_path).unwrap()
}

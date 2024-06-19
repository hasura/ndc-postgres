//! Some common helper functions.

use std::collections::BTreeSet;

/// Create a description string for keys. For example:
/// > "'TrackId' key", or
/// > "'TrackId', 'PlaylistId' and 'OtherId' keys".
pub fn description_keys(keys: &BTreeSet<String>) -> String {
    let mut string = String::new();

    // Case we have only one key.
    #[allow(clippy::comparison_chain)]
    if keys.len() == 1 {
        for key in keys {
            string.push_str(format!("'{key}'").as_str());
        }
        string.push_str(" key");
    // Otherwise (we don't expect to be called without any keys).
    } else {
        for (index, key) in keys.iter().enumerate() {
            string.push_str(format!("'{key}'").as_str());
            // Push a comma if we haven't reached the key before last.
            if index + 2 < keys.len() {
                string.push_str(", ");
            }
            // Push an "and" if we reached the key before last.
            else if index + 2 == keys.len() {
                string.push_str(" and ");
            }
        }
        string.push_str(" keys");
    }

    string
}

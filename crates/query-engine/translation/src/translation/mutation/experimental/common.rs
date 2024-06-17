//! Some common helper functions.

use std::collections::BTreeSet;

pub fn description_keys(keys: &BTreeSet<String>) -> String {
    let mut string = String::new();

    #[allow(clippy::comparison_chain)]
    if keys.len() == 1 {
        for key in keys {
            string.push_str(format!("'{key}'").as_str());
        }
        string.push_str(" key");
    } else {
        for (index, key) in keys.iter().enumerate() {
            string.push_str(format!("'{key}'").as_str());
            if index + 2 < keys.len() {
                string.push_str(", ");
            } else if index + 2 == keys.len() {
                string.push_str(" and ");
            }
        }
        string.push_str(" keys");
    }

    string
}

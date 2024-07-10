use std::collections::HashMap;

use ndc_postgres_configuration::version5::connection_settings::DEFAULT_CONNECTION_URI_VARIABLE;
use ndc_postgres_configuration::version5::{introspect, ParsedConfiguration};

const CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64002";

#[tokio::test]
async fn postgres_current_only_configure_initial_configuration_is_unchanged() {
    let args = ParsedConfiguration::empty();
    let connection_string = CONNECTION_URI;
    let environment = HashMap::from([(
        DEFAULT_CONNECTION_URI_VARIABLE.into(),
        connection_string.into(),
    )]);

    let default_configuration = introspect(args, environment)
        .await
        .expect("configuration::introspect");

    insta::assert_json_snapshot!(default_configuration);
}

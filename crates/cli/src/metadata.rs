//! Structures that represent the connector metadata definition.
//!
//! See https://github.com/hasura/ndc-hub/blob/main/rfcs/0001-packaging.md#connector-definition.

use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConnectorMetadataDefinition {
    pub packaging_definition: PackagingDefinition,
    pub supported_environment_variables: Vec<EnvironmentVariableDefinition>,
    pub commands: Commands,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub cli_plugin: Option<CliPluginDefinition>,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub docker_compose_watch: DockerComposeWatch,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "PascalCase", tag = "type")]
pub enum PackagingDefinition {
    PrebuiltDockerImage(PrebuiltDockerImagePackaging),
    ManagedDockerBuild,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PrebuiltDockerImagePackaging {
    pub docker_image: String,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EnvironmentVariableDefinition {
    pub name: String,
    pub description: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub default_value: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Commands {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub update: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub watch: Option<String>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct CliPluginDefinition {
    pub name: String,
    pub version: String,
}

pub type DockerComposeWatch = Vec<DockerComposeWatchItem>;

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct DockerComposeWatchItem {
    pub path: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub target: Option<String>,
    pub action: DockerComposeWatchAction,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub ignore: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum DockerComposeWatchAction {
    Rebuild,
    Sync,
    #[serde(rename = "sync+restart")]
    SyncAndRestart,
}

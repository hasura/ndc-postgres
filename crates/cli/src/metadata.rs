//! Structures that represent the connector metadata definition.
//!
//! See https://github.com/hasura/ndc-hub/blob/main/rfcs/0001-packaging.md#connector-definition.

use std::collections::BTreeMap;

use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ConnectorMetadataDefinition {
    pub version: Version,
    pub ndc_spec_generation: NdcSpecGeneration,
    pub packaging_definition: PackagingDefinition,
    pub supported_environment_variables: Vec<EnvironmentVariableDefinition>,
    pub commands: Commands,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub cli_plugin: Option<CliPluginDefinition>,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub docker_compose_watch: DockerComposeWatch,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub native_toolchain_definition: Option<NativeToolchainDefinition>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum Version {
    V1,
    V2,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub enum NdcSpecGeneration {
    #[serde(rename = "v0.1")]
    V0_1,
    #[serde(rename = "v0.2")]
    V0_2,
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

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NativeToolchainDefinition {
    pub commands: BTreeMap<CommandName, CommandDefinition>,
}

pub type CommandName = String;

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "PascalCase", tag = "type")]
pub enum CommandDefinition {
    #[serde(rename_all = "camelCase")]
    ShellScript { bash: String, powershell: String },
    #[serde(rename_all = "camelCase")]
    DockerizedCommand {
        docker_image: String,
        command_args: Vec<String>,
    },
}

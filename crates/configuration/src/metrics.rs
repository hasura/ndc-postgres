//! Metrics setup and update for our connector.

use prometheus::{IntGauge, Registry};

use crate::VersionTag;

/// The collection of configuration-related metrics exposed through the `/metrics` endpoint.
#[derive(Debug, Clone)]
#[allow(clippy::struct_field_names)]
pub struct Metrics {
    configuration_version_3: IntGauge,
    configuration_version_4: IntGauge,
    configuration_version_5: IntGauge,
}

impl Metrics {
    /// Set up counters and gauges used to produce Prometheus metrics
    pub fn initialize(metrics_registry: &mut Registry) -> Result<Self, prometheus::Error> {
        let configuration_version_3 = add_int_gauge_metric(
            metrics_registry,
            "ndc_postgres_configuration_version_3",
            "Get whether configuration version 3 is used",
        )?;

        let configuration_version_4 = add_int_gauge_metric(
            metrics_registry,
            "ndc_postgres_configuration_version_4",
            "Get whether configuration version 4 is used",
        )?;

        let configuration_version_5 = add_int_gauge_metric(
            metrics_registry,
            "ndc_postgres_configuration_version_5",
            "Get whether configuration version 5 is used",
        )?;

        Ok(Self {
            configuration_version_3,
            configuration_version_4,
            configuration_version_5,
        })
    }

    /// Set the configuration version used by this connector instance.
    pub fn set_configuration_version(&self, version: VersionTag) {
        match version {
            VersionTag::Version3 => self.configuration_version_3.set(1),
            VersionTag::Version4 => self.configuration_version_4.set(1),
            VersionTag::Version5 => self.configuration_version_5.set(1),
        }
    }
}

/// Create a new int gauge metric and register it with the provided Prometheus Registry
fn add_int_gauge_metric(
    metrics_registry: &mut Registry,
    metric_name: &str,
    metric_description: &str,
) -> Result<IntGauge, prometheus::Error> {
    let int_gauge = IntGauge::with_opts(prometheus::Opts::new(metric_name, metric_description))?;
    register_collector(metrics_registry, int_gauge)
}

/// Register a new collector with the registry, and returns it for later use.
fn register_collector<Collector: prometheus::core::Collector + std::clone::Clone + 'static>(
    metrics_registry: &mut Registry,
    collector: Collector,
) -> Result<Collector, prometheus::Error> {
    metrics_registry.register(Box::new(collector.clone()))?;
    Ok(collector)
}

use ndc_citus::connector::Citus;
use ndc_sdk::default_main::default_main;

#[tokio::main]
pub async fn main() {
    default_main::<Citus>().await.unwrap()
}

use ndc_cockroach::connector::Cockroach;
use ndc_sdk::default_main::default_main;

#[tokio::main]
pub async fn main() {
    default_main::<Cockroach>().await.unwrap()
}

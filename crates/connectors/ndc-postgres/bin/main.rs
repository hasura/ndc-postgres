use ndc_postgres::connector::Postgres;
use ndc_sdk::default_main::default_main;

#[tokio::main]
pub async fn main() {
    default_main::<Postgres>().await.unwrap()
}

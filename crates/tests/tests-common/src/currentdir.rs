//! Lock operations over the current directory.

use async_lock::RwLock;
use once_cell::sync::Lazy;

/// init_server_state changes the current directory to whatever was given to it.
/// Since this code is run multiple times in parallel with different directories,
/// We sync this function with this type.
///
/// This type allows multiple readers single writer.
static CURRENT_DIR_LOCK: Lazy<RwLock<std::path::PathBuf>> =
    Lazy::new(|| RwLock::new(std::env::current_dir().unwrap()));

/// Some functions may change the current directory to whatever was given to it.
/// Since this code is run multiple times in parallel with different directories,
/// We sync this function with this type.
///
/// Use this function for operations that run async.
pub async fn lock_async<T, Fun, Future>(
    absolute_configuration_directory: &std::path::PathBuf,
    action: Fun,
) -> T
where
    Fun: FnOnce() -> Future,
    Future: std::future::Future<Output = T>,
{
    // get a read lock, check if our desired directory matches the current directory.
    // if yes, run the action without changing the current directory.
    let read_lock = CURRENT_DIR_LOCK.read().await;
    if *read_lock == *absolute_configuration_directory {
        action().await
    } else {
        // if no, drop the read lock and wait for a write lock,
        // then change the directory, write the new directory to the lock,
        // and run the action.
        drop(read_lock);
        let mut write_lock = CURRENT_DIR_LOCK.write().await;
        std::env::set_current_dir(absolute_configuration_directory)
            .map_err(|err| {
                anyhow::anyhow!("{}: {}", absolute_configuration_directory.display(), err)
            })
            .unwrap();
        *write_lock = absolute_configuration_directory.clone();
        action().await
    }
}

/// Some functions may change the current directory to whatever was given to it.
/// Since this code is run multiple times in parallel with different directories,
/// We sync this function with this type.
///
/// Use this function for operations that do not run async.
pub async fn lock_not_async<T, Fun>(
    absolute_configuration_directory: &std::path::PathBuf,
    action: Fun,
) -> T
where
    Fun: FnOnce() -> T,
{
    let read_lock = CURRENT_DIR_LOCK.read().await;
    if *read_lock == *absolute_configuration_directory {
        action()
    } else {
        drop(read_lock);
        let mut write_lock = CURRENT_DIR_LOCK.write().await;
        *write_lock = absolute_configuration_directory.clone();
        std::env::set_current_dir(absolute_configuration_directory)
            .map_err(|err| {
                anyhow::anyhow!("{}: {}", absolute_configuration_directory.display(), err)
            })
            .unwrap();
        action()
    }
}

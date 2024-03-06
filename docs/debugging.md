# Debugging the PostgreSQL connector

We can use GDB as a step-debugger for Rust code to debug ndc-postgres.

You can start ndc-postgres in gdb in the terminal using the command `just debug`.
That will start a gdb session to which you can add breakpoints and then run the program.

Here's an example session:

```rust
$ just debug
...
GNU gdb (GDB) Fedora Linux 13.2-2.fc38
Copyright (C) 2023 Free Software Foundation, Inc.
...

For help, type "help".
Type "apropos word" to search for commands related to "word"...
Reading symbols from target/debug/ndc-postgres...
(gdb) break crates/query-engine/src/phases/translation.rs:148
Breakpoint 1 at 0x919267: crates/query-engine/src/phases/translation.rs:148. (2 locations)
(gdb) run
Starting program: /home/gilmi/code/ndc-postgres/target/debug/ndc-postgres serve --configuration static/chinook-ndc-metadata.json

This GDB supports auto-downloading debuginfo from the following URLs:
  <https://debuginfod.fedoraproject.org/>
Enable debuginfod for this session? (y or [n]) n
Debuginfod has been disabled.
To make this setting permanent, add 'set debuginfod enabled off' to .gdbinit.
[Thread debugging using libthread_db enabled]
Using host libthread_db library "/lib64/libthread_db.so.1".
[New Thread 0x7ffff77406c0 (LWP 143304)]
[New Thread 0x7ffff753f6c0 (LWP 143305)]
...
[New Thread 0x7ffff57306c0 (LWP 143320)]
Starting server on 0.0.0.0:8080

```

Then interact with it from the GraphiQL, or via `curl` from a different terminal.
For example, running a test:

```sh
curl -H "Content-Type: application/json" \
  --data "@crates/ndc-postgres/tests/goldenfiles/dup_array_relationship.json" \
  http://localhost:8080/query
```

Then we can go back to our GDB window:

```rust
2023-08-01T08:29:03.927123Z DEBUG hyper::proto::h1::io: parsed 5 headers
2023-08-01T08:29:03.927167Z DEBUG hyper::proto::h1::conn: incoming body is content-length (943 bytes)
2023-08-01T08:29:03.927305Z DEBUG hyper::proto::h1::conn: incoming body completed
2023-08-01T08:29:03.927440Z DEBUG request{method=POST uri=/query version=HTTP/1.1}: tower_http::trace::on_request: started processing request
2023-08-01T08:29:03.927992Z  INFO request{method=POST uri=/query version=HTTP/1.1}: ndc_postgres::connector: {"table":"Artist","query":{"fields":{"Albums":{"type":"relationship","query":{"fields":{"title":{"type":"column","column":"Title","arguments":{}}}},"relationship":"ArtistAlbums","arguments":{}},"albums":{"type":"relationship","query":{"fields":{"title":{"type":"column","column":"Title","arguments":{}}}},"relationship":"ArtistAlbums","arguments":{}}},"limit":5},"arguments":{},"table_relationships":{"ArtistAlbums":{"column_mapping":{"ArtistId":"ArtistId"},"relationship_type":"array","source_table_or_type":"Artist","target_table":"Album","arguments":{}}}}
2023-08-01T08:29:03.928040Z  INFO request{method=POST uri=/query version=HTTP/1.1}: ndc_postgres::connector: QueryRequest { table: "Artist", query: Query { aggregates: None, fields: Some({"Albums": Relationship { query: Query { aggregates: None, fields: Some({"title": Column { column: "Title", arguments: {} }}), limit: None, offset: None, order_by: None, predicate: None }, relationship: "ArtistAlbums", arguments: {} }, "albums": Relationship { query: Query { aggregates: None, fields: Some({"title": Column { column: "Title", arguments: {} }}), limit: None, offset: None, order_by: None, predicate: None }, relationship: "ArtistAlbums", arguments: {} }}), limit: Some(5), offset: None, order_by: None, predicate: None }, arguments: {}, table_relationships: {"ArtistAlbums": Relationship { column_mapping: {"ArtistId": "ArtistId"}, relationship_type: Array, source_table_or_type: "Artist", target_table: "Album", arguments: {} }}, variables: None }
[Switching to Thread 0x7ffff77406c0 (LWP 143304)]

Thread 2 "tokio-runtime-w" hit Breakpoint 1.1, query_engine::phases::translation::Translate::translate_query (self=0x7ffff772bf28, tables_info=0x7ffff000a658, table_name=0x7ffff772bfe8, relationships=0x7ffff772c030, query=...)
    at crates/query-engine/src/phases/translation.rs:149
149	        let mut columns: Vec<(sql_ast::ColumnAlias, sql_ast::Expression)> = fields
Missing separate debuginfos, use: dnf debuginfo-install glibc-2.37-4.fc38.x86_64 libgcc-13.1.1-4.fc38.x86_64 openssl-libs-3.0.9-1.fc38.x86_64 zlib-1.2.13-3.fc38.x86_64
(gdb)
```

And interact with GDB as one would. For example, you can:

1. Make the window display the code with `Ctrl+X+A`.
2. Display the value of a variable with `print`:
   ```rust
   (gdb) print fields
   $1 = HashMap(size=2) = {["Albums"] = ndc_client::models::Field::Relationship{query: 0x7ffff000b980, relationship: "ArtistAlbums", arguments: HashMap(size=0)},
     ["albums"] = ndc_client::models::Field::Relationship{query: 0x7ffff0005840, relationship: "ArtistAlbums", arguments: HashMap(size=0)}}
   ```
3. Step to the next instruction with `step` or `next`:
   ```rust
   (gdb) next
   query_engine::phases::translation::Translate::translate_query (self=0x7ffff772bf28, tables_info=0x7ffff000a658, table_name=0x7ffff772bfe8, relationships=0x7ffff772c030, query=...)
       at crates/query-engine/src/phases/translation.rs:158
   158	            .map(|(alias, field)| match field {
   ```

And so on.

## Resources

- https://blog.logrocket.com/debugging-rust-apps-with-gdb/
- https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf

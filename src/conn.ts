import { MongoClient } from "https://deno.land/x/mongo@v0.31.2/mod.ts";
import { DB_CONNECTION, DB_NAME } from "./config.ts";


const client = new MongoClient();

// const client = new MongoClient(DB_CONNECTION, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// } as ConnectOptions);

let conn;
let db;

try {
  conn = await client.connect(DB_CONNECTION);
  db = await conn.db(DB_NAME);
  console.log("[CONN] connected", DB_NAME);
} catch (e) {
  console.error("[CONN] ERROR:", e);
  console.error("[CONN] DB_CONNECTION:", DB_CONNECTION);
  throw e;
}

export default db;

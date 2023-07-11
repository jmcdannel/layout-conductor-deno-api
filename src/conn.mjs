import { MongoClient, ServerApiVersion } from 'mongodb';
import { DB_CONNECTION, DB_NAME } from './config.js';

const client = new MongoClient(DB_CONNECTION, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let conn;
let db;

try {
  conn = await client.connect();
  db = await conn.db(DB_NAME);;
  console.log('[CONN] connected', DB_NAME);
} catch(e) {
  console.error('[CONN] ERROR:', e, DB_CONNECTION);
  throw e;
}

export default db;

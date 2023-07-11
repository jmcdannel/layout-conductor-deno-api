import { MongoClient, ServerApiVersion } from 'mongodb';
import { DB_CONNECTION, DB_NAME } from './src/config.js';

export const client = new MongoClient(DB_CONNECTION, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

async function run() {
  
}

export async function connect() {
  try {
    if (db) { return db; }
  
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
        
    db = await client.db(DB_NAME);

    console.log('Database connected', DB_NAME);

    return db;    

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function getDb() {
  return db ? db : await connect();
}

run().catch(console.dir);

export default {
  connect,
  client,
  getDb
}
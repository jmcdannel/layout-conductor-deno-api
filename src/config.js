import { load } from "https://deno.land/std/dotenv/mod.ts";

const env = await load();

export const DB_CONNECTION = `mongodb+srv://${env['DENO_API_DB_USR']}:${env['DENO_API_DB_PWD']}@trestlemongodb.p0zygcb.mongodb.net/?retryWrites=true&w=majority`;
export const DB_NAME = 'trestledb';
export const API_PORT = 5001;
export const LAYOUT_ID = 'betatrack';

export default {
  DB_CONNECTION,
  DB_NAME ,
  API_PORT
};

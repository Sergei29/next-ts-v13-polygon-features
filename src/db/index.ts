import { JsonDB, Config } from 'node-json-db';

const db = new JsonDB(new Config('./db.json', true, true, '/'));

export { db };

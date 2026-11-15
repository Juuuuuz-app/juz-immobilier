import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';
const file = path.resolve(process.cwd(), process.env.DATABASE_PATH || './data/juz.db');
fs.mkdirSync(path.dirname(file),{recursive:true});
const g=globalThis as unknown as {juzDb?:Database.Database};
export const db=g.juzDb || new Database(file);
if(!g.juzDb) {
 db.pragma('journal_mode = WAL');
 db.exec(`CREATE TABLE IF NOT EXISTS listings(
 id INTEGER PRIMARY KEY AUTOINCREMENT, ref TEXT NOT NULL UNIQUE,
 title TEXT NOT NULL, city TEXT NOT NULL, type TEXT NOT NULL DEFAULT 'Maison',
 price INTEGER NOT NULL DEFAULT 0, surface REAL NOT NULL DEFAULT 0,
 rooms INTEGER NOT NULL DEFAULT 0, bedrooms INTEGER NOT NULL DEFAULT 0,
 description TEXT NOT NULL DEFAULT '', image_url TEXT NOT NULL DEFAULT '',
 dpe TEXT NOT NULL DEFAULT '', ges TEXT NOT NULL DEFAULT '',
 status TEXT NOT NULL DEFAULT 'brouillon', updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);
 CREATE TABLE IF NOT EXISTS leads(
 id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT NOT NULL,last_name TEXT NOT NULL,
 email TEXT NOT NULL,phone TEXT NOT NULL,city TEXT NOT NULL,
 property_type TEXT NOT NULL, surface REAL NOT NULL, rooms INTEGER NOT NULL,
 property_condition TEXT NOT NULL, notes TEXT NOT NULL DEFAULT '',
 min_estimate INTEGER, max_estimate INTEGER, consent INTEGER NOT NULL,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);`);
 g.juzDb=db;
}
export type Listing={id:number;ref:string;title:string;city:string;type:string;price:number;surface:number;rooms:number;bedrooms:number;description:string;image_url:string;dpe:string;ges:string;status:string};

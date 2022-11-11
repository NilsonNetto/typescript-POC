import pg from "pg"
pg.defaults.parseInt8 = true;
import dotenv from "dotenv";
dotenv.config()

const {Pool} = pg;

const databaseConfig = {
  connectionString: process.env.DATABASE_URL
} 

const connection = new Pool(databaseConfig)

export default connection;
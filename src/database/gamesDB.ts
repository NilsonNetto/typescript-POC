import pg from "pg"

const {Pool} = pg;

const databaseConfig = {
  connectionString: "postgresql://postgres:123456@localhost:5432/gamespoc"
} 

const connection = new Pool(databaseConfig)

export default connection;
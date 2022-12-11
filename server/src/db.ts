import mysql from "mysql2/promise";

import keys from "./keys";

const pool = mysql.createPool(keys.database);

console.log("DB sucessfully connected");

export default pool;

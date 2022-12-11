import mysql from "promise-mysql";

import keys from "./keys";

const pool = mysql.createPool(keys.database);

pool.then((Pool: any) =>
    Pool.getConnection().then((connection: any) => {
        Pool.releaseConnection(connection);
        console.log("DB connected");
    })
);

export default pool;

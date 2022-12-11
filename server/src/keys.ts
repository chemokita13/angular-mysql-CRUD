// General config
export default {
    database: {
        // db config
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: process.env.DB_PASSWORD || "0000",
        database: "games_db",
    },
};

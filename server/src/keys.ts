// General config
export default {
    database: {
        // db config
        host: "localhost",
        user: "root",
        password: process.env.DB_PASSWORD || "0000",
        database: "games_db",
    },
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: "postgres",
        connection: {
            host: env("DATABASE_HOST", "localhost"),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", "strapi_db"),
            user: env("DATABASE_USERNAME", "postgres"),
            password: env("DATABASE_PASSWORD", "1234"),
            ssl: env.bool("DATABASE_SSL", false),
        },
    },
});

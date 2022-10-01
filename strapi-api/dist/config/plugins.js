"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    "users-permissions": {
        config: {
            jwt: {
                expiresIn: "30d",
            },
        },
    },
    upload: {
        config: {
            providerOptions: {
                localServer: {
                    maxage: 300000,
                },
            },
        },
    },
});

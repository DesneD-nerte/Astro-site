"use strict";
/**
 * product controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::product.product", ({ strapi }) => ({
    async update(ctx) {
        const response = await super.update(ctx);
        strapi.$io.raw("productsChanged", response);
        return response;
    },
}));

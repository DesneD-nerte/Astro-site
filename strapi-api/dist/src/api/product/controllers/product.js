"use strict";
/**
 * product controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::product.product", ({ strapi }) => ({
    async create(ctx) {
        const { data, meta } = await super.create(ctx);
        strapi.$io.raw("productsChanged", data);
        return { data, meta };
    },
    async update(ctx) {
        const { data, meta } = await super.update(ctx);
        strapi.$io.raw("productsChanged", data);
        return { data, meta };
    },
    async delete(ctx) {
        const { data, meta } = await super.delete(ctx);
        strapi.$io.raw("productsChanged", data);
        return { data, meta };
    },
}));

/**
 * product controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }: any) => ({
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
  })
);

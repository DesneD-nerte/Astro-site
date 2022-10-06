/**
 * product controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }: any) => ({
    async update(ctx) {
      const response = await super.update(ctx);

      strapi.$io.raw("productsChanged", response);

      return response;
    },
  })
);

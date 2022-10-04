import type { Product } from "./Product";

export interface Cart {
  Cart: {
    id: number;
    products: [Product];
  };
}

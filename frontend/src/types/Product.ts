import type { Image } from "./Image";

export interface Product {
  id: number;
  attributes: {
    Title: string;
    Price: string;
    Image?: {
      data: [Image];
    };
  };
}

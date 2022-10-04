import type { Cart } from "./Cart";

export interface User {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  Cart?: Cart;
}

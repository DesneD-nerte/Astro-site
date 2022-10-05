export interface User {
    id: number;
    username: string;
    email: string;
    confirmed: boolean;
    blocked: boolean;
    Cart?: Cart;
}

export interface Cart {
    id: number;
    products: UserProductPopulate[];
}

export interface UserProductPopulate {
    id: number;
    Title: string;
    Price: string;
    Image: UserImagePopulate[];
}

export interface UserImagePopulate {
    id: number;
    name: string;
    url: string;
}

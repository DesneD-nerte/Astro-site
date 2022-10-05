export interface Card {
    id: number;
    title: string;
    price: string;
    image?: {
        name: string;
        url: string;
    }[];
}

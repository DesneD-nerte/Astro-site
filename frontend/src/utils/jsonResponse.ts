import type { Product } from "../types/Product";
import type { Image } from "../types/Image";
import type { Card } from "../types/Card";

export function toCardProps(data: Product[]) {
    const responseArray: Card[] = [];

    data.forEach((oneProduct: Product) => {
        let responseObject: Card = {
            id: oneProduct.id,
            title: oneProduct.attributes.Title,
            price: oneProduct.attributes.Price,
        };

        if (oneProduct.attributes.Image.data) {
            responseObject.image = oneProduct.attributes.Image.data.map((oneImage: Image) => oneImage.attributes);
        }

        responseArray.push(responseObject);
    });

    return responseArray;
}

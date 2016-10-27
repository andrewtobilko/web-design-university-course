
import {Product} from "../product/product.model";

export class Category {

    constructor(private id: number,
                private title: string,
                private description: string,
                private products: Product[]) {}

}
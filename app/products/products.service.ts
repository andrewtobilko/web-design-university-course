import {Injectable} from "@angular/core";
import {Product} from "../product";

@Injectable
export class ProductsService {

    getProduct(id: number): Promise<Product> {
        return Promise.all(null);
    }

    getProducts(): Promise<Product[]> {
        return Promise.all(null);
    }

}
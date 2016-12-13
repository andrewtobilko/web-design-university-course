import {Injectable} from "@angular/core";
import {Product} from "../product/product.model";

export class CategoryService {

    getProducts(): Promise<Product[]> {
        return Promise.resolve([
            new Product(0, "t1", "d1", 1, "m1"),
            new Product(1, "t2", "d2", 2, "m2"),
            new Product(2, "t3", "d3", 3, "m3"),
            new Product(3, "t4", "d4", 4, "m4"),
            new Product(4, "t5", "d5", 5, "m5"),
            new Product(5, "t6", "d6", 6, "m6"),
            new Product(6, "t7", "d7", 7, "m7"),
            new Product(7, "t8", "d8", 8, "m8")
        ])
    }

}
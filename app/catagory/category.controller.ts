import {Component, OnInit} from "@angular/core";
import {CategoryService} from "./category.service";
import {Product} from "../product/product.model";

@Component({
    selector: 'category',
    templateUrl: "category.template.html",
    providers: [CategoryService]
})
export class CategoryController implements OnInit {

    private products: Product[];

    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {
        this.categoryService.getProducts().then(
            (data) => {
                console.log(data)
                this.products = data;
            },
            (error) => {}
        )
    }

}
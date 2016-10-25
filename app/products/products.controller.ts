import {Component, OnInit} from "@angular/core";
import {ProductsService} from "./products.service";

@Component({
    selector: 'products',
    templateUrl: "products.template.html",
    providers: [ProductsService]
})
export class ProductsController implements OnInit {

    private products;

    constructor(private service: ProductsService) {}


    ngOnInit(): void {
        // initialize products on controller's startup
        this.service.getProducts().then(
            (data) => {
                this.products = data;
            },
            (error) => {

            }
        )
    }

}
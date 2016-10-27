import {Component, OnInit} from "@angular/core";
import {CategoryService} from "./category.service";

@Component({
    selector: 'category',
    templateUrl: "category.template.html",
    providers: [CategoryService]
})
export class CategoryController implements OnInit {

    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {
        /*this.categoryService.getProducts().then(
            (data) => {},
            (error) => {}
        )*/
    }

}
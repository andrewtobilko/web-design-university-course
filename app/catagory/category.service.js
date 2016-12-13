"use strict";
var product_model_1 = require("../product/product.model");
var CategoryService = (function () {
    function CategoryService() {
    }
    CategoryService.prototype.getProducts = function () {
        return Promise.resolve([
            new product_model_1.Product(0, "t1", "d1", 1, "m1"),
            new product_model_1.Product(1, "t2", "d2", 2, "m2"),
            new product_model_1.Product(2, "t3", "d3", 3, "m3"),
            new product_model_1.Product(3, "t4", "d4", 4, "m4"),
            new product_model_1.Product(4, "t5", "d5", 5, "m5"),
            new product_model_1.Product(5, "t6", "d6", 6, "m6"),
            new product_model_1.Product(6, "t7", "d7", 7, "m7"),
            new product_model_1.Product(7, "t8", "d8", 8, "m8")
        ]);
    };
    return CategoryService;
}());
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map
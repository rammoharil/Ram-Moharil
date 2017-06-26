"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var products_service_1 = require("./products.service");
require("rxjs/add/operator/map");
var ProductDetails = (function () {
    function ProductDetails(_product) {
        this._product = _product;
    }
    ProductDetails.prototype.ngOnInit = function () {
        this.iproducts = JSON.parse(localStorage.getItem("ItemDetails"));
    };
    ProductDetails.prototype.DownloadPDF = function () {
        var pdf = new jsPDF();
        var options = {
            pagesplit: true
        };
        pdf.addHTML(this.el.nativeElement, 0, 0, options, function () {
            pdf.save("test1.pdf");
        });
    };
    return ProductDetails;
}());
__decorate([
    core_1.ViewChild('keywordsInput'),
    __metadata("design:type", core_1.ElementRef)
], ProductDetails.prototype, "el", void 0);
ProductDetails = __decorate([
    core_1.Component({
        selector: 'demo-app',
        templateUrl: 'app/ProductDetails.html',
        providers: [products_service_1.ProductService],
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService])
], ProductDetails);
exports.ProductDetails = ProductDetails;
//# sourceMappingURL=ProductDetails.js.map
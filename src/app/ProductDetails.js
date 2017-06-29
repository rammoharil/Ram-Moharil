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
        //var myimg = localStorage.getItem('productImage');
        this.iproducts.imageHref = localStorage.getItem('productImage');
    };
    ProductDetails.prototype.DownloadPDF = function (product) {
        //html2canvas(document.getElementById('rammoharil'),{
        html2canvas(document.body, {
            onrendered: function (canvas) {
                var img = canvas.toDataURL("image/png");
                var doc = new jsPDF();
                doc.addImage(img, "JPEG", 0, 0);
                doc.save('ItWorks.pdf');
            }
        });
        // var printButton = document.getElementById("printbtn");
        // var menu = document.getElementById("menu");
        //     //Set the print button visibility to 'hidden' 
        //     printButton.style.display = 'none';
        //     menu.style.display = 'none';
        // window.print();
        // printButton.style.display = 'block';
        // menu.style.display = 'block';
    };
    return ProductDetails;
}());
ProductDetails = __decorate([
    core_1.Component({
        selector: 'demo-app',
        templateUrl: 'app/Pages/ProductDetails.html',
        providers: [products_service_1.ProductService],
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService])
], ProductDetails);
exports.ProductDetails = ProductDetails;
//# sourceMappingURL=ProductDetails.js.map
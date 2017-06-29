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
var router_1 = require("@angular/router");
var Companies = (function () {
    function Companies(_product, router) {
        this._product = _product;
        this.router = router;
    }
    Companies.prototype.ngOnInit = function () {
        var _this = this;
        this._product.getproducts()
            .subscribe(function (iproducts) { return _this.iproducts = iproducts; });
    };
    Companies.prototype.CompanyRowClick = function (item) {
        var img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        var dataURL;
        img.src = item.imageHref;
        img.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var context = canvas.getContext('2d');
            context.drawImage(img, 0, 0);
            dataURL = canvas.toDataURL('image/png');
            localStorage.setItem('productImage', dataURL);
        };
        localStorage.setItem("ItemDetails", JSON.stringify(item));
        setTimeout(function () {
            //this.router.navigate(['/ProductDetails']);    
            window.location.href = 'ProductDetails';
        }, 2000);
    };
    return Companies;
}());
Companies = __decorate([
    core_1.Component({
        selector: 'demo-app',
        templateUrl: 'app/Pages/Companies.html',
        providers: [products_service_1.ProductService],
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService, router_1.Router])
], Companies);
exports.Companies = Companies;
//# sourceMappingURL=companies.component.js.map
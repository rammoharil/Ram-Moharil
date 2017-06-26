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
var technology = (function () {
    function technology(_product) {
        this._product = _product;
    }
    technology.prototype.ngOnInit = function () {
        var _this = this;
        this._product.getproducts()
            .subscribe(function (iproducts) { return _this.iproducts = iproducts; });
    };
    technology.prototype.CompanyRowClick = function (item) {
        localStorage.setItem("ItemDetails", JSON.stringify(item));
        window.location.href = '/ProductDetails';
    };
    return technology;
}());
technology = __decorate([
    core_1.Component({
        selector: 'demo-app',
        templateUrl: 'app/Technology.html',
        providers: [products_service_1.ProductService],
    }),
    __metadata("design:paramtypes", [products_service_1.ProductService])
], technology);
exports.technology = technology;
//# sourceMappingURL=technology.component.js.map
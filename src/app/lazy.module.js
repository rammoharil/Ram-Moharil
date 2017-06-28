<<<<<<< HEAD
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var companies_component_1 = require("./companies.component");
var lazy_routing_1 = require("./lazy.routing");
var CompaniesPipe_1 = require("./CompaniesPipe");
var LazyModule = (function () {
    function LazyModule() {
    }
    return LazyModule;
}());
LazyModule = __decorate([
    core_1.NgModule({
        imports: [lazy_routing_1.routing, common_1.CommonModule],
        declarations: [companies_component_1.Companies, CompaniesPipe_1.CompanyPipe]
    })
], LazyModule);
exports.LazyModule = LazyModule;
=======
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var companies_component_1 = require("./companies.component");
var lazy_routing_1 = require("./lazy.routing");
var CompaniesPipe_1 = require("./CompaniesPipe");
var LazyModule = (function () {
    function LazyModule() {
    }
    return LazyModule;
}());
LazyModule = __decorate([
    core_1.NgModule({
        imports: [lazy_routing_1.routing, common_1.CommonModule],
        declarations: [companies_component_1.Companies, CompaniesPipe_1.CompanyPipe]
    })
], LazyModule);
exports.LazyModule = LazyModule;
>>>>>>> fcd28ffae3e4e3f06b6691ff9f0f05e195690282
//# sourceMappingURL=lazy.module.js.map
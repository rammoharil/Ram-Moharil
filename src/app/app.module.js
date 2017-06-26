"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var UniqueFilterPipe_1 = require("./UniqueFilterPipe");
var CompaniesPipe_1 = require("./CompaniesPipe");
var TechnologyPipe_1 = require("./TechnologyPipe");
var home_component_1 = require("./home.component");
var companies_component_1 = require("./companies.component");
var technology_component_1 = require("./technology.component");
var ProductDetails_1 = require("./ProductDetails");
var router_1 = require("@angular/router");
var appRoutes = [
    { path: '', component: home_component_1.Home },
    { path: 'Home', component: home_component_1.Home },
    { path: 'Companies', component: companies_component_1.Companies },
    { path: 'Technologies', component: technology_component_1.technology },
    { path: 'ProductDetails', component: ProductDetails_1.ProductDetails },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, UniqueFilterPipe_1.UniqueFilterPipe, CompaniesPipe_1.CompanyPipe, TechnologyPipe_1.TechnologiesPipe, home_component_1.Home, companies_component_1.Companies, technology_component_1.technology, ProductDetails_1.ProductDetails],
        bootstrap: [app_component_1.AppComponent, home_component_1.Home, companies_component_1.Companies, technology_component_1.technology, ProductDetails_1.ProductDetails]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
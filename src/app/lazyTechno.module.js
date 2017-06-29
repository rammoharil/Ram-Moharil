"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var technology_component_1 = require("./technology.component");
var lazyTechno_routing_1 = require("./lazyTechno.routing");
var TechnologyPipe_1 = require("./TechnologyPipe");
var LazyTechModule = (function () {
    function LazyTechModule() {
    }
    return LazyTechModule;
}());
LazyTechModule = __decorate([
    core_1.NgModule({
        imports: [lazyTechno_routing_1.routing, common_1.CommonModule],
        declarations: [technology_component_1.technology, TechnologyPipe_1.TechnologiesPipe]
    })
], LazyTechModule);
exports.LazyTechModule = LazyTechModule;
//# sourceMappingURL=lazyTechno.module.js.map
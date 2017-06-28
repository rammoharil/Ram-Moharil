"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var CompanyPipe = (function () {
    function CompanyPipe() {
    }
    CompanyPipe.prototype.transform = function (value, args) {
        // Remove the duplicate elements
        // let uniqueArray = value.filter(function (el, index, array) { 
        //   return array.indexOf(el) == index;
        // });
        if (value != null) {
            var arrycount = value.length;
            while (arrycount > 0) {
                if (value[arrycount - 1].category != "Companies") {
                    value.splice(arrycount - 1, 1);
                }
                else {
                    var imageUrl = value[arrycount - 1].imageHref;
                    var pattern = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                    if (!pattern.test(imageUrl)) {
                        value.splice(arrycount - 1, 1);
                    }
                }
                arrycount = arrycount - 1;
            }
        }
        var uniqueArray = value;
        return uniqueArray;
    };
    return CompanyPipe;
}());
CompanyPipe = __decorate([
    core_1.Pipe({
        name: 'company',
        pure: false
    })
], CompanyPipe);
exports.CompanyPipe = CompanyPipe;
//# sourceMappingURL=CompaniesPipe.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TechnologiesPipe = (function () {
    function TechnologiesPipe() {
    }
    TechnologiesPipe.prototype.transform = function (value, args) {
        // Remove the duplicate elements
        // let uniqueArray = value.filter(function (el, index, array) { 
        //   return array.indexOf(el) == index;
        // });
        if (value != null) {
            var arrycount = value.length;
            while (arrycount > 0) {
                if (value[arrycount - 1].category != "Technologies") {
                    value.splice(arrycount - 1, 1);
                }
                else {
                    var imageUrl = value[arrycount - 1].imageHref;
                    var http = new XMLHttpRequest();
                    http.open('HEAD', imageUrl, false);
                    http.send();
                    if (http.status == 404) {
                        value.splice(arrycount - 1, 1);
                    }
                }
                arrycount = arrycount - 1;
            }
        }
        var uniqueArray = value;
        return uniqueArray;
    };
    return TechnologiesPipe;
}());
TechnologiesPipe = __decorate([
    core_1.Pipe({
        name: 'technology',
        pure: false
    })
], TechnologiesPipe);
exports.TechnologiesPipe = TechnologiesPipe;
//# sourceMappingURL=TechnologyPipe.js.map
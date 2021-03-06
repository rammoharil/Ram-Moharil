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
        //Take the rows matching technologies only
        //If the image url is invalid, discard the row
        if (value != null) {
            var arrycount = value.length;
            while (arrycount > 0) {
                if (value[arrycount - 1].category != "Technologies") {
                    value.splice(arrycount - 1, 1);
                }
                else {
                    var imageUrl = value[arrycount - 1].imageHref;
                    var pattern = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
                    if (!pattern.test(imageUrl)) {
                        value.splice(arrycount - 1, 1);
                    }
                    else {
                        var filename = imageUrl.split('/').pop();
                        var arr = filename.split('?');
                        filename = arr[0];
                        console.log(filename);
                        var imagePattern = /\.(gif|jpg|jpeg|tiff|png)$/i;
                        if (!imagePattern.test(filename)) {
                            value.splice(arrycount - 1, 1);
                        }
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
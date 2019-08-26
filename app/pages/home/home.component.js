"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ocr_service_1 = require("../../shared/ocr.service");
var HomeComponent = (function () {
    function HomeComponent(ocr, router) {
        this.ocr = ocr;
        this.router = router;
        this.message = "";
        this.isParseBtnClicked = false;
    }
    HomeComponent.prototype.onTap = function () {
        var _this = this;
        this.isParseBtnClicked = true;
        this.message = "Parsing...";
        this.ocr.parsePinCode().then(function (parsedString) {
            _this.message = parsedString.text;
            console.log("result : " + parsedString.text);
        }, function (error) { return _this.message = error; });
    };
    HomeComponent.prototype.takeScreenshot = function () {
        this.router.navigate(["capture"]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [ocr_service_1.OcrService],
        templateUrl: "pages/home/home.html",
    }),
    __metadata("design:paramtypes", [ocr_service_1.OcrService, router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
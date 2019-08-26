"use strict";
var core_1 = require("@angular/core");
var Camera = require("camera");
var imageSource = require("image-source");
var enums = require("ui/enums");
var fs = require("file-system");
var router_1 = require("nativescript-angular/router");
var icModule = require("nativescript-imagecropper");
var CaptureComponent = (function () {
    function CaptureComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    CaptureComponent.prototype.takeScreenshot = function () {
        var _this = this;
        console.log("take screenshot called");
        Camera.takePicture().then(function (photo) {
            console.log("Image taken");
            var tempImgFolder = fs.path.join(fs.knownFolders.currentApp().path, "tmpCaptures");
            var filePath = fs.path.join(tempImgFolder, "capture.png");
            if (fs.File.exists(filePath)) {
                fs.knownFolders.currentApp().getFolder("tmpCaptures")
                    .clear().then(function (arg) { return console.log("cleared existing files"); });
            }
            var cropper = new icModule.ImageCropper();
            cropper.show(photo).then(function (args) {
                console.log(JSON.stringify(args));
            }).catch(function (e) {
                console.log(e);
            });
            photo.saveToFile(filePath, enums.ImageFormat.png);
            _this.imgSource = filePath;
        });
    };
    CaptureComponent.prototype.goBack = function () {
        if (this.routerExtensions.canGoBack()) {
            this.routerExtensions.back();
        }
    };
    return CaptureComponent;
}());
CaptureComponent = __decorate([
    core_1.Component({
        selector: "capture",
        templateUrl: "pages/capture/capture.html"
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions])
], CaptureComponent);
exports.CaptureComponent = CaptureComponent;
//# sourceMappingURL=capture.component.js.map
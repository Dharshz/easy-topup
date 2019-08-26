"use strict";
var core_1 = require("@angular/core");
var OCR = require("nativescript-ocr");
var imageSource = require("image-source");
var fs = require("file-system");
var OcrService = (function () {
    function OcrService() {
        this.pinCode = "";
    }
    OcrService.prototype.parsePinCode = function () {
        var appDirectory = fs.knownFolders.currentApp();
        var filepath = fs.path.join(appDirectory.path, "tmpCaptures/capture.png");
        console.log(filepath);
        return OCR.retrieveText({
            image: imageSource.fromFile(filepath)
        });
    };
    return OcrService;
}());
OcrService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], OcrService);
exports.OcrService = OcrService;
//# sourceMappingURL=ocr.service.js.map
import { Component } from "@angular/core";
import Camera = require("camera");
var imageSource = require("image-source");
import enums = require("ui/enums");
import fs = require("file-system");
import { RouterExtensions } from "nativescript-angular/router";
var icModule = require("nativescript-imagecropper");

@Component({
    selector: "capture",
    templateUrl: "pages/capture/capture.html"
})
export class CaptureComponent {
    imgSource: String;
    isCaptured : boolean = false;
    constructor(private routerExtensions: RouterExtensions) { }

    takeScreenshot() {
        console.log("take screenshot called");
        Camera.takePicture().then((photo) => {
            console.log("Image taken");
            this.isCaptured = true;
            var tempImgFolder = fs.path.join(fs.knownFolders.currentApp().path, "tmpCaptures");
            var filePath = fs.path.join(tempImgFolder, "capture.png");
            if (fs.File.exists(filePath)) {
                fs.knownFolders.currentApp().getFolder("tmpCaptures")
                    .clear().then((arg) => console.log("cleared existing files"));
            }
            var cropper = new icModule.ImageCropper();
            cropper.show(photo).then(function (args) {
                console.log(JSON.stringify(args));
            }).catch(function (e) {
                    console.log(e);
                });
            photo.saveToFile(filePath, enums.ImageFormat.png);
            this.imgSource = filePath;
        });
    }

    goBack() {
        if (this.routerExtensions.canGoBack()) {
            this.routerExtensions.back();
        }
    }
}
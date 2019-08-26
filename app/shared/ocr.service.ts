import { Injectable } from "@angular/core";
import * as OCR from "nativescript-ocr";
var imageSource = require("image-source");
import fs = require("file-system");

@Injectable()
export class OcrService {
    pinCode: String = "";
    parsePinCode(): Promise<any> {
        var appDirectory = fs.knownFolders.currentApp();
        var filepath = fs.path.join(appDirectory.path, "tmpCaptures/capture.png");
        console.log(filepath);
        return OCR.retrieveText({
            image: imageSource.fromFile(filepath)
        });
    }

}
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { OcrService } from "../../shared/ocr.service";

@Component({
    selector: "my-app",
    providers:[OcrService],
    templateUrl: "pages/home/home.html",
})
export class HomeComponent {
    message : String = "";
    isParseBtnClicked : boolean = false;

    constructor(private ocr : OcrService, private router : Router){}

    onTap(){
        this.isParseBtnClicked = true;
        this.message = "Parsing...";
        this.ocr.parsePinCode().then((parsedString) => {
        this.message = parsedString.text;
            console.log("result : " + parsedString.text);
        }, (error) => this.message = error);
    }

    takeScreenshot(){
        this.router.navigate(["capture"]);
    }
}
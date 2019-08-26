import { AppComponent } from "./app.component";
import { CaptureComponent } from "./pages/capture/capture.component";
import { HomeComponent } from "./pages/home/home.component";


export const routes = [
    { path: "", component: HomeComponent },
    { path: "capture", component: CaptureComponent  }
];

export const navigatableComponents = [
    CaptureComponent, HomeComponent
];
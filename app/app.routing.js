"use strict";
var capture_component_1 = require("./pages/capture/capture.component");
var home_component_1 = require("./pages/home/home.component");
exports.routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "capture", component: capture_component_1.CaptureComponent }
];
exports.navigatableComponents = [
    capture_component_1.CaptureComponent, home_component_1.HomeComponent
];
//# sourceMappingURL=app.routing.js.map
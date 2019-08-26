import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
    declarations: [AppComponent, ...navigatableComponents],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,NativeScriptFormsModule, NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)]
})
export class AppModule { }


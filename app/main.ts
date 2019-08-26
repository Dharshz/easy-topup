// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import {enableProdMode} from '@angular/core';

//enableProdMode();
const platform = platformNativeScriptDynamic();
platform.bootstrapModule(AppModule);

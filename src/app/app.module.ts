import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { UserService } from "./auth/user.service";

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, AppRoutingModule],
    declarations: [AppComponent, LoginComponent],
    providers: [UserService],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}

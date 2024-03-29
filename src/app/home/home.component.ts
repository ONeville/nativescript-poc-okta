import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { UserService } from "../auth/user.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    message =
        "You have successfully authenticated. This is where you build your core application functionality.";

    constructor(
        private userService: UserService,
        private routerExtensions: RouterExtensions
    ) {}

    ngOnInit(): void {}

    logout() {
        this.userService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }
}

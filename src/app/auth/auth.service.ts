import { Injectable } from "@angular/core";
import * as OktaAuth from "@okta/okta-auth-js";
import { of, from, Subject } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { User } from "./user.model";
import { CONFIG } from "./okta.config";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    private authClient: any;

    constructor() {
        this.authClient = new OktaAuth(CONFIG);
    }

    public login(userInfo: User) {
        const me = this;
        return from(
            this.authClient.signIn({
                ...userInfo,
                username: `ELASTIC:INT:${userInfo.email}`
            })
        ).pipe(
            map((transaction: any) => {
                if (transaction.status === "SUCCESS") {
                    me.authClient.session.setCookieAndRedirect(
                        transaction.sessionToken,
                        "http://localhost:4300/home"
                    );
                    return true;
                }
                return false;
            })
        );
    }

    public isLoggedIn() {
        return from(this.authClient.session.exists()).pipe(
            map((exists: any) => exists as boolean)
        );
    }

    public logout() {
        return from(this.authClient.signOut());
    }
}

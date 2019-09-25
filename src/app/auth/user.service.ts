// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { of } from "rxjs";

@Injectable()
export class UserService {
    constructor() {}

    register(user: User) {
        return of({
            username: user.email,
            password: user.password
        }).toPromise();
    }

    login(user: User) {
        return of(user.email, user.password).toPromise();
    }

    logout() {
        return of(true).toPromise();
    }

    resetPassword(email) {
        return of(email).toPromise();
    }
}

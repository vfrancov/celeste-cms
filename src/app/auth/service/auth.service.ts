import { Injectable } from "@angular/core";
import { IAuthRepository } from "@domain/auth/IAuthRepository";

@Injectable()
export class AuthService implements IAuthRepository {

    authentication(body: any) {
        console.log('hola mundo repository!', body);
    }

    recovery(user: any) {
        console.log('recovery password');
    }
}

import { Provider } from "@angular/core";
import { AuthService } from "./auth.service";

export const AuthProvider: Provider = {
    provide: 'AuthRepository',
    useClass: AuthService
}
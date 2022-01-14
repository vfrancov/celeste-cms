import { Validators } from "@angular/forms";
import { IAuthenticationFields } from "@domain/auth/UserDto";

export enum AuthProviderEnum {
  AuthRespository = 'AuthRepository'
}

export const AuthenticationFormFields: IAuthenticationFields = {
  username: ['deivisvb', Validators.required],
  password: ['davb2882D&%', Validators.required]
}

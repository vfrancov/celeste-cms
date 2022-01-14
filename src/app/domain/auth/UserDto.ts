import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface IAuthenticationFields {
  username: (string | ((control: AbstractControl) => ValidationErrors))[],
  password: (string | ((control: AbstractControl) => ValidationErrors))[]
}

export interface UserDto {
  firstName: string
  lastName: string,
  token: string,
  rolId: number,
  expirationToken: string
}

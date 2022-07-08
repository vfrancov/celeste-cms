import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface IAuthenticationFields {
  username: (string | ((control: AbstractControl) => ValidationErrors))[],
  password: (string | ((control: AbstractControl) => ValidationErrors))[],
  rememberPassword: (boolean | ((control: AbstractControl) => ValidationErrors))[]
}

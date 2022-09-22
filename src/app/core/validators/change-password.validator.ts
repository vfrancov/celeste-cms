import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface ChangePasswordFields {
  code: (string | ((control: AbstractControl) => ValidationErrors))[],
  password: (string | ((control: AbstractControl) => ValidationErrors))[],
  confirm?: (string | ((control: AbstractControl) => ValidationErrors))[],
}

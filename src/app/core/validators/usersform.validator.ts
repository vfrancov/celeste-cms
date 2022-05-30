import { AbstractControl, FormControl, ValidationErrors, Validators } from "@angular/forms";

export interface IUsersField {
  id?: (number | ((control: AbstractControl) => ValidationErrors))[],
  firstName: (string | ((control: AbstractControl) => ValidationErrors))[],
  lastName: (string | ((control: AbstractControl) => ValidationErrors))[],
  username?: (string | ((control: AbstractControl) => ValidationErrors))[],
  password?: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  confirm?: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  phoneNumber?: (string | ((control: AbstractControl) => ValidationErrors))[],
  statusName?: (string | ((control: AbstractControl) => ValidationErrors))[],
  statusId?: (string | ((control: AbstractControl) => ValidationErrors))[],
  roleId?: (number | ((control: AbstractControl) => ValidationErrors))[],
  roleNname?: (string | ((control: AbstractControl) => ValidationErrors))[],
  companyId?: (string | ((control: AbstractControl) => ValidationErrors))[],
  companyName?: (string | ((control: AbstractControl) => ValidationErrors))[],
  token?: (string | ((control: AbstractControl) => ValidationErrors))[],
  rolId?: (number | ((control: AbstractControl) => ValidationErrors))[],
  expirationToken?: string
}

export type ChangeUserPasswordFields = Pick<IUsersField, 'id' | 'password' | 'username' | 'confirm'>

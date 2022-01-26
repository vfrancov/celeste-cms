import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface ICompaniesField {
  id?: (number | ((control: AbstractControl) => ValidationErrors))[],
  name: (string | ((control: AbstractControl) => ValidationErrors)[])[]
  nit: (string | ((control: AbstractControl) => ValidationErrors)[])[]
  email: (string | ((control: AbstractControl) => ValidationErrors)[])[]
  address: (string | ((control: AbstractControl) => ValidationErrors))[]
  phoneNumber: (string | ((control: AbstractControl) => ValidationErrors))[]
  statusId?: (number | ((control: AbstractControl) => ValidationErrors))[],
  statusName: (string | ((control: AbstractControl) => ValidationErrors))[]
}

export type CreateCompanieForm = Omit<ICompaniesField, 'statusName'>;

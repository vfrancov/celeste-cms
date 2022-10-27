import { AbstractControl, ValidationErrors } from "@angular/forms"

export interface DeviceFields {
  companyId: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  name: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  code: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  expireLicenseDate: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  statusId: (string | ((control: AbstractControl) => ValidationErrors)[])[]
}

import { AbstractControl, ValidationErrors } from "@angular/forms"

export interface DeviceFields {
  companyId: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  deviceName: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  codeDevice: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  expireLicenseDate: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  statusDevice: (string | ((control: AbstractControl) => ValidationErrors)[])[]
}

import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface ZoneFields {
  id?: (number | ((control: AbstractControl) => ValidationErrors)[])[]
  name?: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  companyId?: (number | ((control: AbstractControl) => ValidationErrors))[]
}

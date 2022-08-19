import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface RatesFields {
  concept?: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  value?: (number | ((control: AbstractControl) => ValidationErrors))[]
}

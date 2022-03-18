import { AbstractControl, ValidationErrors } from "@angular/forms"

export interface FloorFields {
  id?: (number | ((control: AbstractControl) => ValidationErrors)[])[]
  name?: (string | ((control: AbstractControl) => ValidationErrors)[])[],
  appZoneId?: (number | ((control: AbstractControl) => ValidationErrors))[]
}

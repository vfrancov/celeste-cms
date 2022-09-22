import { Validators } from "@angular/forms";
import { ChangePasswordFields } from "@core/validators/change-password.validator";


export const ChangePasswordFormFields: ChangePasswordFields = {
  code: ['', Validators.required],
  password: ['', Validators.required],
  confirm: ['', Validators.required]
}

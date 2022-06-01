import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { ChangeUserPasswordFields, IUsersField } from "@core/validators/usersform.validator";

export class PasswordValidation {

  static matchPassword(form: FormControl): ValidationErrors {
    if (form && form.get('password'))
      return (form.get('password').value === form.get('confirm').value) ? { match: true } : { match: false }

    return null;
  }
}

export const UsersField: IUsersField = {
  id: [0],
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  username: ['', Validators.required],
  password: ['', [Validators.required]],
  confirm: ['asd', [Validators.required, PasswordValidation.matchPassword]],
  phoneNumber: [''],
  roleId: [0, Validators.required],
  companyId: ['', Validators.required],
  statusId: ['']
}

export const ChangePasswordField: ChangeUserPasswordFields = {
  id: [0],
  username: [''],
  password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
  confirm: ['', [Validators.required, PasswordValidation.matchPassword, Validators.minLength(8), Validators.maxLength(8)]]
}



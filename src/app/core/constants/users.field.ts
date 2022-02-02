import { AbstractControl, Validators } from "@angular/forms";
import { ChangeUserPasswordFields, IUsersField } from "@core/validators/usersform.validator";

export const UsersField: IUsersField = {
  id: [0],
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  username: ['', Validators.required],
  password: ['', [Validators.required]],
  phoneNumber: [''],
  roleId: [0, Validators.required],
  companyId: ['', Validators.required],
  statusId: ['']
}

export const ChangePasswordField: ChangeUserPasswordFields = {
  id: [0],
  username: [''],
  password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
  confirm: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
}

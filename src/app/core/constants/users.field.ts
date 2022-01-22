import { Validators } from "@angular/forms";
import { IUsersField } from "@core/validators/usersform.validator";

export const UsersField: IUsersField = {
  id: [0],
  firstName: ['', Validators.required],
  lastName: ['', Validators.required],
  username: ['', Validators.required],
  password: ['', Validators.required],
  phoneNumber: [''],
  roleId: [0, Validators.required],
  companyId: ['', Validators.required],
  statusId: ['']
}

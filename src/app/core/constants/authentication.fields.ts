import { Validators } from "@angular/forms";
import { IAuthenticationFields } from "@core/validators/authform.validator";

export const AuthenticationFormFields: IAuthenticationFields = {
  username: ['vfrancov25', Validators.required],
  password: ['87654321', Validators.required]
}

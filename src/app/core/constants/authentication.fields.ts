import { Validators } from "@angular/forms";
import { IAuthenticationFields } from "@core/validators/authform.validator";

export const AuthenticationFormFields: IAuthenticationFields = {
  username: ['dairoaguasv', Validators.required],
  password: ['12345678', Validators.required]
}

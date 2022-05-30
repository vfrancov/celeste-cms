import { Validators } from "@angular/forms";
import { IAuthenticationFields } from "@core/validators/authform.validator";
import { environment } from "@environment/environment";

export const AuthenticationFormFields: IAuthenticationFields = {
  username: [(environment.production) ? '' : 'deivisvb', Validators.required],
  password: [(environment.production) ? '' : 'davb2882D&%', Validators.required]
}

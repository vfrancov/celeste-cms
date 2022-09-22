import { HttpResponse } from "@angular/common/http";
import { IAuthenticationFields } from "@core/validators/authform.validator";
import { Observable } from "rxjs";
import { UserDto } from "../user/user.dto";
import { ChangePassword, ResetPassword } from "./recovery.dto";

export interface IAuthRepository {
  authentication(payload: IAuthenticationFields): Observable<HttpResponse<UserDto>>
  recoveryPassword(payload: ResetPassword): Observable<HttpResponse<any>>
  chagePassword(payload: ChangePassword): Observable<HttpResponse<any>>
}

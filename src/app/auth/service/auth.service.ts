import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAuthRepository } from "@domain/auth/authentication.repository";
import { UserDto } from "@domain/user/user.dto";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";
import { IAuthenticationFields } from "@core/validators/authform.validator";
import { ChangePassword, ResetPassword } from "@domain/auth/recovery.dto";
import { RecoveryPresenterInput } from "../recovery/presenter/recovery.presenter.input";

@Injectable()
export class AuthService implements IAuthRepository {

  constructor(private http: HttpClient) { }

  authentication(payload: IAuthenticationFields): Observable<HttpResponse<UserDto>> {
    return this.http.post<UserDto>(`${environment.baseUrl}/api/SignIn`, payload, { observe: 'response' });
  }

  recoveryPassword(payload: ResetPassword): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${environment.baseUrl}/api/PasswordRecovery/ResetPassword`, payload, { observe: 'response' });
  }

  chagePassword(payload: ChangePassword): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${environment.baseUrl}/api/PasswordRecovery/ChangePassword`, payload, { observe: 'response' });
  }
}

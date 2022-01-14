import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IAuthRepository } from "@domain/auth/IAuthRepository";
import { IAuthenticationFields, UserDto } from "@domain/auth/UserDto";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class AuthService implements IAuthRepository {

  constructor(private http: HttpClient) { }

  authentication(payload: IAuthenticationFields): Observable<HttpResponse<UserDto>> {
    return this.http.post<UserDto>(`${environment.baseUrl}/api/SignIn`, payload, { observe: 'response' });
  }
}

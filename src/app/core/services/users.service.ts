import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUsersField } from "@core/validators/usersform.validator";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { ChangePassword, UserDto } from "@domain/user/user.dto";
import { IUserRepository } from "@domain/user/users.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class UsersServices implements IUserRepository {

  constructor(private http: HttpClient) { }

  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>> {
    return this.http.post<IResponseBody>(`${environment.baseUrl}/api/Users/All`, payload, { observe: 'response' });
  }

  createUser(payload: IUsersField): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/Users`, payload, { observe: 'response' });
  }

  updateUser(payload: IUsersField): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Users/${payload.id}`, payload, { observe: 'response' });
  }

  getUserById(id: number): Observable<HttpResponse<UserDto>> {
    return this.http.get<UserDto>(`${environment.baseUrl}/api/Users/${id}`, { observe: 'response' });
  }

  deleteUser(id: number, status: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.baseUrl}/api/Users/${id}`, { observe: 'response' });
  }

  changePassword(id: number, payload: ChangePassword): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Users/ChangePassword/${id}`, payload, { observe: 'response' });
  }
}

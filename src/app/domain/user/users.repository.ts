import { HttpResponse } from "@angular/common/http";
import { IUsersField } from "@core/validators/usersform.validator";
import { MenuDTO } from "@domain/configuration/menu.dto";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { ChangePassword, UserDto } from "@domain/user/user.dto";
import { Observable } from "rxjs";

export interface IUserRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody<any>>>
  createUser(payload: IUsersField): Observable<HttpResponse<any>>
  updateUser(payload: IUsersField): Observable<HttpResponse<any>>
  getUserById(id: number): Observable<HttpResponse<UserDto>>
  deleteUser(id: number, status: number): Observable<HttpResponse<any>>
  changePassword(id: number, payload: ChangePassword): Observable<HttpResponse<any>>
  saveConfiguration(configuration: Array<MenuDTO>): Observable<HttpResponse<any>>
  getConfiguration(id: number): Observable<HttpResponse<any>>
  disableUser(id: number, status: number): Observable<HttpResponse<any>>
}

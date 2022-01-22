import { HttpResponse } from "@angular/common/http";
import { IUsersField } from "@core/validators/usersform.validator";
import { IFilterRequestBody } from "@domain/dto/request.body.dto";
import { IResponseBody } from "@domain/dto/response.body.dto";
import { UserDto } from "@domain/dto/user.dto";
import { Observable } from "rxjs";

export interface IUserRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>>
  createUser(payload: IUsersField): Observable<HttpResponse<any>>
  updateUser(payload: IUsersField): Observable<HttpResponse<any>>
  getUserById(id: number): Observable<HttpResponse<UserDto>>
  deleteUser(id: number, status: number): Observable<HttpResponse<any>>
}

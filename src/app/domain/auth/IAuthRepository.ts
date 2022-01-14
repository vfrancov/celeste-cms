import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { IAuthenticationFields, UserDto } from "./UserDto";

export interface IAuthRepository {
  authentication(payload: IAuthenticationFields): Observable<HttpResponse<UserDto>>
}

import { HttpResponse } from "@angular/common/http";
import { IAuthenticationFields } from "@core/validators/authform.validator";
import { Observable } from "rxjs";
import { UserDto } from "../dto/user.dto";

export interface IAuthRepository {
  authentication(payload: IAuthenticationFields): Observable<HttpResponse<UserDto>>
}

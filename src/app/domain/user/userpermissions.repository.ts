import { HttpResponse } from "@angular/common/http";
import { UserPermissions } from "@domain/shared/menu.dto";
import { Observable } from "rxjs";

export interface IUserPermissionsRepository {
    getPermissions(path: string): UserPermissions
    updatePermissions(payload: any): Observable<HttpResponse<any>>
}

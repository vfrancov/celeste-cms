import { HttpClient, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { ILocalStorageRepository } from "@domain/localstorage/localstorage.repository";
import { UserPermissions } from "@domain/shared/menu.dto";
import { IUserPermissionsRepository } from "@domain/user/userpermissions.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ACLUserPermissions implements IUserPermissionsRepository {

  private userPermissions: UserPermissions;

  constructor(
    private http: HttpClient,
    @Inject(RepositoryProvider.localStorageProvider) private _userStorage: ILocalStorageRepository
  ) { }

  getPermissions(path: string): UserPermissions {
    for (let menu of this._userStorage.getPermissions().listMenu) {
      if (menu.route === this.whichModule(path))
        this.userPermissions = menu.actionMenu;
    }

    return this.userPermissions;
  }

  private whichModule(module: string): string {
    return module.split('/')[3];
  }

  updatePermissions(payload: any): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/Menu`, payload, { observe: 'response' });
  }
}

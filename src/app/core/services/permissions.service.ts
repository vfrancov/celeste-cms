import { Inject, Injectable } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { ILocalStorageRepository } from "@domain/localstorage/localstorage.repository";
import { UserPermissions } from "@domain/shared/menu.dto";
import { IUserPermissionsRepository } from "@domain/user/userpermissions.repository";

@Injectable({ providedIn: 'root' })
export class ACLUserPermissions implements IUserPermissionsRepository {

    private userPermissions: UserPermissions;

    constructor(@Inject(RepositoryProvider.localStorageProvider) private _userStorage: ILocalStorageRepository) { }

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
}
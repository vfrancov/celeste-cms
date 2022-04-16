import { Navigation } from "@core/constants/navigataion.enum";
import { ILocalStorageRepository } from "@domain/localstorage/localstorage.repository";
import { UserDto } from "@domain/user/user.dto";

export class LocalStorageService implements ILocalStorageRepository {

  saveItem(key: string, data: any): void {
    return window.localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string): any {
    return JSON.parse(window.localStorage.getItem(key));
  }

  removeItem(): void {
    return window.localStorage.clear();
  }

  getPermissions(): UserDto {
    return this.getItem(Navigation.userSession);
  }
}      

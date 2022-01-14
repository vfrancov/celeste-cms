import { Injectable, Inject } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Navigation } from "@core/constants/Navigation";
import { RepositoryProvider } from "@core/constants/Repository.enum";
import { UserDto } from "@domain/auth/UserDto";
import { ILocalStorageRepository } from "@domain/localstorage/ILocalStorageRepository";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    @Inject(RepositoryProvider.localStorageProvider) private localstorage: ILocalStorageRepository
  ) { }

  canActivate(): boolean {
    let userSession: UserDto = this.localstorage.getItem(Navigation.userSession);
    return (userSession) ? true : this.redirectToLogin();
  }

  private redirectToLogin(): boolean {
    this.router.navigate([Navigation.login]);
    return false;
  }
}

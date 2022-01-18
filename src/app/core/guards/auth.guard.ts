import { Injectable, Inject } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Navigation } from "@core/constants/navigataion.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { UserDto } from "@domain/dto/user.dto";
import { ILocalStorageRepository } from "@domain/repository/localstorage.repository";

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

import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from '@core/constants/navigataion.enum';
import { RepositoryProvider } from '@core/constants/repository.enum';
import { ILocalStorageRepository } from '@domain/localstorage/localstorage.repository';
import { UserDto } from '@domain/user/user.dto';

@Component({
  selector: 'topbar-component',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  userSession: UserDto;

  constructor(
    private router: Router,
    @Inject(RepositoryProvider.localStorageProvider) private localstorage: ILocalStorageRepository) { }

  ngOnInit(): void {
    this.recoverySessionFromLocalStorage();
  }

  recoverySessionFromLocalStorage(): void {
    this.userSession = this.localstorage.getItem(Navigation.userSession);
  }

  logoutSession(): void {
    this.localstorage.removeItemByKey(Navigation.userSession);
    this.router.navigate([Navigation.login]);
  }
}

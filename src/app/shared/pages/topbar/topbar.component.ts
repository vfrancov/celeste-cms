import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from '@core/constants/Navigation';
import { RepositoryProvider } from '@core/constants/Repository.enum';
import { UserDto } from '@domain/auth/UserDto';
import { ILocalStorageRepository } from '@domain/localstorage/ILocalStorageRepository';

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
    this.localstorage.removeItem();
    this.router.navigate([Navigation.login]);
  }
}

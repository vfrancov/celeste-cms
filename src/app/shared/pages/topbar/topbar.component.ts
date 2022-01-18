import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from '@core/constants/navigataion.enum';
import { RepositoryProvider } from '@core/constants/repository.enum';
import { UserDto } from '@domain/dto/user.dto';
import { ILocalStorageRepository } from '@domain/repository/localstorage.repository';

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

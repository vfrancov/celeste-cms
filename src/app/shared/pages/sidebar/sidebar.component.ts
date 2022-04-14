import { Component, Inject, OnInit } from '@angular/core';
import { Navigation } from '@core/constants/navigataion.enum';
import { RepositoryProvider } from '@core/constants/repository.enum';
import { ILocalStorageRepository } from '@domain/localstorage/localstorage.repository';
import { MenuUserDto } from '@domain/shared/menu.dto';
import { UserDto } from '@domain/user/user.dto';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public userMenu: Array<MenuUserDto> = [];

  constructor(@Inject(RepositoryProvider.localStorageProvider) private localStorage: ILocalStorageRepository) { }

  ngOnInit(): void {
    this.fetchUserMenu();
  }

  fetchUserMenu(): void {
    this.userMenu = this.localStorage.getItem(Navigation.userSession).listMenu;
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { Navigation } from '@core/constants/navigataion.enum';
import { RepositoryProvider } from '@core/constants/repository.enum';
import { ILocalStorageRepository } from '@domain/localstorage/localstorage.repository';
import { MenuUserDto } from '@domain/shared/menu.dto';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public userMenu: Array<MenuUserDto> = [];
  public roleUserId: number;
  private readonly _IS_SUPER_ADMIN: number = 1;

  get checkRole(): boolean {
    return (this.roleUserId !== this._IS_SUPER_ADMIN) ? true : false;
  }

  constructor(@Inject(RepositoryProvider.localStorageProvider) private localStorage: ILocalStorageRepository) { }

  ngOnInit(): void {
    this.fetchUserMenu();
    this.getRoleUser();
  }

  getRoleUser(): void {
    this.roleUserId = this.localStorage.getItem(Navigation.userSession).rolId;
  }

  fetchUserMenu(): void {
    this.userMenu = this.localStorage.getItem(Navigation.userSession).listMenu;
  }
}

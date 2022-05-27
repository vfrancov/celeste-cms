import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { MenuPermissions, permissions } from "@core/constants/permissions.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { configurationCreated } from "@core/constants/sweetalert.config";
import { dataTableHeadConfiguration } from "@core/constants/table.headers";
import { ConfigurationService } from "@core/services/configuration.service";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { ComboDTO } from "@domain/shared/combo.dto";
import { UserPermissions } from "@domain/shared/menu.dto";
import { UserDto } from "@domain/user/user.dto";
import { IUserPermissionsRepository } from "@domain/user/userpermissions.repository";
import { IUserRepository } from "@domain/user/users.repository";
import { ModalComponent } from "@shared/customs/modal/modal.component";
import swal from 'sweetalert2';

@Component({
  selector: 'configuration-component',
  templateUrl: './configuration.component.html'
})
export class ConfigurationPageComponent implements OnInit {

  @ViewChild(ModalComponent) modalConfiguration: IModalComponent;

  userData: UserDto[];
  dataTableHead: any[] = dataTableHeadConfiguration;
  userRequest: IFilterRequestBody = new RequestBody;
  userPermissions: UserPermissions;
  modules: ComboDTO;
  permissions: MenuPermissions[] = permissions;
  userModules: Array<ComboDTO> = [];
  uPermissions: Array<MenuPermissions> = [];
  userId: number;
  errorConfiguration: HttpErrorResponse;
  amountOfPages: number;
  amountOfRows: number;
  isDescOrAsc: boolean = false;

  constructor(
    @Inject(RepositoryProvider.usersRepository) private userService: IUserRepository,
    @Inject(RepositoryProvider.userPermissions) private _permissions: IUserPermissionsRepository,
    private _configurationService: ConfigurationService,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {
    this.userPermissions = this._permissions.getPermissions(this._router.url);
  }

  ngOnInit(): void {
    this.fetchUserData();
    this.getModules();
  }

  fetchUserData(): void {
    this.userService.readAll(this.userRequest).subscribe(
      (response: HttpResponse<IResponseBody>) => this.userData = response.body.list
    );
  }

  getModules(): void {
    this._configurationService.getModules().subscribe(response => this.modules = response.body);
  }

  showUpConfigModal(user: UserDto): void {
    this.userId = user.id;
    this.userService.getConfiguration(user.id).subscribe(response => console.log(response));
  }

  setUserModule(module: ComboDTO): void {
    if (this.userModules.some(menu => menu.id === module.id)) {
      let getIndex = this.userModules.findIndex(menu => menu.id === module.id);
      this.userModules.splice(getIndex, 1);
    } else
      this.userModules.push(module);
  }

  setUserPermissions(permission: MenuPermissions): void {
    if (this.uPermissions.some(perm => perm.name === permission.name)) {
      let getIndex = this.uPermissions.findIndex(perm => perm.name === permission.name);
      this.uPermissions.splice(getIndex, 1);
    } else {
      permission.status = true;
      this.uPermissions.push(permission);
    }
  }

  saveMenuAndUserPermissions(): void {
    let menuSystem: any = [];
    this.userModules.forEach(menu => menuSystem.push({
      menuItemsId: menu.id,
      userId: this.userId,
      ...this.setActionItems(this.uPermissions)
    }));

    this.userService.saveConfiguration(menuSystem).subscribe(response => {
      this.modalConfiguration.closeModal();
      if (response.status === HttpStatusCode.Created)
        swal.fire(configurationCreated);
    }, (error: HttpErrorResponse) => this.errorConfiguration = error);
  }

  private setActionItems(permissions: Array<MenuPermissions>): any {
    let perms = {};

    permissions.forEach(element => {
      (element.status) ? perms[element.alias] = element.status : perms[element.alias] = false
    });

    return perms;
  }

  sort(fieldToSort: string): void {
    this.isDescOrAsc = !this.isDescOrAsc;
    this.userRequest.sort[0].field = fieldToSort;
    this.userRequest.sort[0].dir = (this.isDescOrAsc) ? 'desc' : 'asc';

    this.fetchUserData();
  }

  restoreFilter(event: any): void {
    this.userRequest = new RequestBody;
    this.fetchUserData();
  }

  selectedPage(page: number): void {
    this.userRequest.offset = page;
    this.fetchUserData();
  }

  applyFilter(filter: any): void {
    this.userRequest.filter = filter.filter;
    this.fetchUserData();
  }
}

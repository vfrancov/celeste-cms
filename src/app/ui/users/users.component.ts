import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { userChangePasswordSuccess, userCreatedUser, userDisable, userEdit, userEnable, userWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadUsers } from "@core/constants/table.headers";
import { ChangePasswordField, PasswordValidation, UsersField } from "@core/constants/users.field";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { UserPermissions } from "@domain/shared/menu.dto";
import { UserDto } from "@domain/user/user.dto";
import { IUserPermissionsRepository } from "@domain/user/userpermissions.repository";
import { IUserRepository } from "@domain/user/users.repository";
import { ModalComponent } from "@shared/customs/modal/modal.component";
import swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'usuarios-component',
  templateUrl: './users.component.html'
})
export class UsersPageComponent implements OnInit {

  @ViewChild('modalChageUserPassword') modalChangePassword: ModalComponent;
  @ViewChild('modalCreateAndEditUsers') modalCreateAndEditUsers: ModalComponent;

  dataTableHead: string[] = dataTableHeadUsers;
  userData: UserDto[];
  userRequest: IFilterRequestBody = new RequestBody;
  formCreateUserData: FormGroup;
  formChangeUserPassword: FormGroup;
  isEditUser: boolean = false;
  userErrorService: HttpErrorResponse;
  showErrorUserService: boolean;
  userDtoData: UserDto;
  userPermissions: UserPermissions;
  isDescOrAsc: boolean = false;
  amountOfPages: number;
  amountOfRows: number;
  togglePassword: boolean = false;
  toggleConfirmPassword: boolean = false;
  toggleChangePassword: boolean = false;
  toggleConfirmChangePassword: boolean = false;
  changePasswordService: HttpErrorResponse;
  showErrorChangePassword: boolean;

  constructor(
    @Inject(RepositoryProvider.usersRepository) private userService: IUserRepository,
    @Inject(RepositoryProvider.userPermissions) private _permissions: IUserPermissionsRepository,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {
    this.userPermissions = this._permissions.getPermissions(this._router.url);
  }

  ngOnInit(): void {
    this.fetchUserData();
    this.initializeFormCreateUser();
    this.initializeFormChangePasswordUser();
  }

  fetchUserData(): void {
    this.userService.readAll(this.userRequest).subscribe(
      (response: HttpResponse<IResponseBody<any>>) => {
        this.userData = response.body.list;
        this.amountOfPages = response.body.pages;
        this.amountOfRows = response.body.records;
      }
    );
  }

  initializeFormCreateUser(): void {
    this.formCreateUserData = this.formBuilder.group(UsersField, { validators: PasswordValidation.matchPassword });
  }

  initializeFormChangePasswordUser(): void {
    this.formChangeUserPassword = this.formBuilder.group(ChangePasswordField, { validators: PasswordValidation.matchPassword });
  }

  createUserData(): void {
    this.userService.createUser(this.formCreateUserData.value).subscribe((response: HttpResponse<any>) => {
      if (response.status === HttpStatusCode.Created) {
        this.modalCreateAndEditUsers.closeModal();
        swal.fire(userCreatedUser);
        this.fetchUserData();
      }
    }, (error: HttpErrorResponse) => {
      this.userErrorService = error;
      this.showErrorUserService = !error.ok;
    });
  }

  editUserData(): void {
    this.formCreateUserData.get('statusId').setValue(RequestAction.create);
    this.userService.updateUser(this.formCreateUserData.value).subscribe((response: HttpResponse<any>) => {
      if (response.status === HttpStatusCode.NoContent) {
        this.modalCreateAndEditUsers.closeModal();
        swal.fire(userEdit);
        this.fetchUserData();
      }
    }, (error: HttpErrorResponse) => {
      this.userErrorService = error;
      this.showErrorUserService = !error.ok;
    });
  }

  showModalWithUserData(user: UserDto): void {
    this.showErrorUserService = false;
    this.isEditUser = true;
    this.userService.getUserById(user.id).subscribe((response: HttpResponse<UserDto>) =>
      this.formCreateUserData.patchValue(response.body)
    );
  }

  deleteUserData(user: UserDto): void {
    swal.fire(userWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed)
        this.userService.deleteUser(user.id, RequestAction.delete).subscribe((response: HttpResponse<any>) => {
          if (response.status === HttpStatusCode.Ok)
            this.fetchUserData();
        });
    });
  }

  setUserData(user: UserDto): void {
    this.showErrorChangePassword = false;
    this.userDtoData = user;
    this.formChangeUserPassword.patchValue(user);
  }

  disableUser(user: UserDto): void {
    let message = (user.statusId === 1) ? userDisable : userEnable;
    swal.fire(message).then((action: SweetAlertResult) => {
      if (action.isConfirmed)
        this.userService.disableUser(user.id, (user.statusId === 1) ? RequestAction.disable : RequestAction.enable).subscribe(response => {
          if (response.status === HttpStatusCode.NoContent) {
            this.fetchUserData();
          }
        });
    });
  }

  changeUserPassword(): void {
    this.userService.changePassword(this.userDtoData.id, this.formChangeUserPassword.value).subscribe(response => {
      if (response.status === HttpStatusCode.NoContent) {
        this.modalChangePassword.closeModal();
        swal.fire(userChangePasswordSuccess);
        this.formChangeUserPassword.reset();
      }
    }, (error: HttpErrorResponse) => {
      this.changePasswordService = error;
      this.showErrorChangePassword = !error.ok;
    });
  }

  showFormToCreate(): void {
    this.formCreateUserData.reset();
    this.showErrorUserService = false;
    this.isEditUser = false;
  }

  showPassword(): void {
    this.togglePassword = !this.togglePassword;
  }

  showConfirmPassword(): void {
    this.toggleConfirmPassword = !this.toggleConfirmPassword;
  }

  showChangePassword(): void {
    this.toggleChangePassword = !this.toggleChangePassword;
  }

  showChangeConfirmPassword(): void {
    this.toggleConfirmChangePassword = !this.toggleConfirmChangePassword;
  }

  sort(fieldToSort: string): void {
    this.isDescOrAsc = !this.isDescOrAsc;
    this.userRequest.sort[0].field = fieldToSort;
    this.userRequest.sort[0].dir = (this.isDescOrAsc) ? 'desc' : 'asc';

    this.fetchUserData();
  }

  applyFilter(filter: any): void {
    this.userRequest.filter = filter.filter;
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
}

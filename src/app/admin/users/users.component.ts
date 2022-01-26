import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { userWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadUsers } from "@core/constants/table.headers";
import { UsersField } from "@core/constants/users.field";
import { IFilterRequestBody, RequestBody } from "@domain/dto/request.body.dto";
import { IResponseBody } from "@domain/dto/response.body.dto";
import { UserDto } from "@domain/dto/user.dto";
import { IUserRepository } from "@domain/repository/users.repository";
import swal, { SweetAlertResult } from 'sweetalert2';
@Component({
  selector: 'usuarios-component',
  templateUrl: './users.component.html'
})
export class UsersPageComponent implements OnInit {

  dataTableHead: string[] = dataTableHeadUsers;
  userData: UserDto[];
  userRequest: IFilterRequestBody = new RequestBody;
  formCreateUserData: FormGroup;
  isEditUser: boolean = false;
  userErrorService: HttpErrorResponse;
  showErrorUserService: boolean;

  constructor(
    @Inject(RepositoryProvider.usersRepository) private userService: IUserRepository,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fetchUserData();
    this.initializeFormCreateUser();
  }

  initializeFormCreateUser(): void {
    this.formCreateUserData = this.formBuilder.group(UsersField);
  }

  fetchUserData(): void {
    this.userService.readAll(this.userRequest).subscribe(
      (response: HttpResponse<IResponseBody>) => this.userData = response.body.list
    );
  }

  createUserData(): void {
    this.userService.createUser(this.formCreateUserData.value).subscribe((response: HttpResponse<any>) => {
      if (response.status === HttpStatusCode.Created)
        this.fetchUserData();
    }, (error: HttpErrorResponse) => {
      this.userErrorService = error;
      this.showErrorUserService = !error.ok;
    });
  }

  editUserData(): void {
    this.formCreateUserData.get('statusId').setValue(RequestAction.update);
    this.userService.updateUser(this.formCreateUserData.value).subscribe((response: HttpResponse<any>) => {
      if (response.status === HttpStatusCode.NoContent)
        this.fetchUserData();
    })
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

  showFormToCreate(): void {
    this.formCreateUserData.reset();
    this.showErrorUserService = false;
    this.isEditUser = false;
  }
}

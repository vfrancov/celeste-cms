import { HttpStatusCode } from '@core/constants/httpstatuscode.enum';
import { IAuthRepository } from '@domain/repository/authentication.repository';
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserDto } from '@domain/dto/user.dto';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Navigation } from '@core/constants/navigataion.enum';
import { RepositoryProvider } from '@core/constants/repository.enum';
import { ILocalStorageRepository } from '@domain/repository/localstorage.repository';
import { Status } from '@core/constants/status.enum';
import { AuthenticationFormFields } from '@core/constants/authentication.fields';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  authLoginForm: FormGroup;
  errorAuthentication: boolean = false;
  errorAuthenticationService: HttpErrorResponse;
  isLoading: boolean = Status.notLoading;
  authResponse: HttpResponse<any>;

  constructor(
    @Inject(RepositoryProvider.AuthRepository) private authService: IAuthRepository,
    @Inject(RepositoryProvider.localStorageProvider) private localStorage: ILocalStorageRepository,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeAuthLogin();
  }

  initializeAuthLogin(): void {
    this.authLoginForm = this.formBuilder.group(AuthenticationFormFields);
  }

  initSession(): void {
    this.isLoading = Status.isLoading;
    this.authService.authentication(this.authLoginForm.value).subscribe(
      response => {
        this.checkResponseAuthentication(response);
        this.authResponse = response
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.errorAuthenticationService = error;
        this.isLoading = Status.notLoading;
      }
    );
  }

  private checkResponseAuthentication(response: HttpResponse<UserDto>): void {
    (response.status === HttpStatusCode.NoContent) ?
      this.errorAuthentication = true : this.redirectAndStoreSession(response);
    this.isLoading = Status.notLoading;
  }

  private redirectAndStoreSession(response: HttpResponse<UserDto>): void {
    this.localStorage.saveItem(Navigation.userSession, response.body);
    this.router.navigate([Navigation.dashboard]);
  }
}

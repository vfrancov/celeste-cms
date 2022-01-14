import { HttpStatusCode } from '@core/constants/HttpStatusCode';
import { IAuthRepository } from '@domain/auth/IAuthRepository';
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserDto } from '@domain/auth/UserDto';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Navigation } from '@core/constants/Navigation';
import { RepositoryProvider } from '@core/constants/Repository.enum';
import { ILocalStorageRepository } from '@domain/localstorage/ILocalStorageRepository';
import { AuthenticationFormFields, AuthProviderEnum } from './../auth.enum';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  authLoginForm: FormGroup;
  errorMessage: boolean = false;

  constructor(
    @Inject(AuthProviderEnum.AuthRespository) private authService: IAuthRepository,
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
    this.authService.authentication(this.authLoginForm.value).subscribe(
      response => this.checkResponseAuthentication(response)
    );
  }

  private checkResponseAuthentication(response: HttpResponse<UserDto>): void {
    (response.status === HttpStatusCode.NoContent) ?
      this.errorMessage = true :
      this.redirectAndStoreSession(response);
  }

  private redirectAndStoreSession(response: HttpResponse<UserDto>): void {
    this.localStorage.saveItem(Navigation.userSession, response.body);
    this.router.navigate([Navigation.dashboard]);
  }
}

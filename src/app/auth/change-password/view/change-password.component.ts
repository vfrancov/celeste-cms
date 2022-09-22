import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ChangePasswordFormFields } from "@core/constants/change-password.fields";
import { PasswordValidation } from "@core/constants/users.field";
import { ChangePasswordPresenterInput } from "../presenter/change-password.presenter.input";
import { ChangePasswordPresenterOutput } from "../presenter/change-password.presenter.output";

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html'
})
export class ChangePasswordViewComponent implements OnInit, ChangePasswordPresenterOutput {

  public changePasswordForm: FormGroup;
  public errorResponse: HttpErrorResponse;
  public showError: boolean;
  public isLoading: boolean;

  constructor(
    @Inject('ChangePasswordPresenter') private _changePassword: ChangePasswordPresenterInput,
    private _formBuilder: FormBuilder
  ) {
    this._changePassword.setView(this);
  }

  ngOnInit(): void {
    this.initializeChangePasswordForm();
  }

  initializeChangePasswordForm(): void {
    this.changePasswordForm = this._formBuilder.group(ChangePasswordFormFields, { validators: PasswordValidation.matchPassword });
  }

  changePassword(): void {
    this._changePassword.changePassword(this.changePasswordForm.value);
  }
}

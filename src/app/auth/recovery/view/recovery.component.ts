import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RecoveryPresenterInput } from "../presenter/recovery.presenter.input";
import { RecoveryPresenterOutput } from "../presenter/recovery.presenter.output";

@Component({
  selector: 'view-recovery',
  templateUrl: './recovery.component.html'
})
export class RecoveryViewComponent implements OnInit, RecoveryPresenterOutput {

  public recoveryForm: FormGroup;
  public response: HttpResponse<any>;
  public errorResponse: HttpErrorResponse;
  public showError: boolean;
  public isLoading: boolean;

  constructor(
    @Inject('RecoveryPresenter') private _recoveryPresenter: RecoveryPresenterInput,
    private _formBuilder: FormBuilder
  ) {
    this._recoveryPresenter.setView(this);
  }

  ngOnInit(): void {
    this.initializeRecoveryForm();
  }

  initializeRecoveryForm(): void {
    this.recoveryForm = this._formBuilder.group({ email: ['', Validators.required] });
  }

  sendEmailToRecoveryPassword(): void {
    this._recoveryPresenter.sendEmailToUser(this.recoveryForm.value);
  }
}

import { HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { IAuthRepository } from "@domain/auth/authentication.repository";
import { ResetPassword } from "@domain/auth/recovery.dto";
import { RecoveryPresenterInput } from "../presenter/recovery.presenter.input";
import { RecoveryPresenterOutput } from "../presenter/recovery.presenter.output";
import swal, { SweetAlertResult } from 'sweetalert2';
import { emailSended } from "@core/constants/sweetalert.config";
import { Router } from "@angular/router";
import { Navigation } from "@core/constants/navigataion.enum";

@Injectable()
export class RecoveryInteractor {

  private _view: RecoveryPresenterOutput;
  private _presenter: RecoveryPresenterInput;

  constructor(
    @Inject(RepositoryProvider.AuthRepository) private _auth: IAuthRepository,
    private _router: Router) { }

  setPresenter(presenter: RecoveryPresenterInput): void {
    this._presenter = presenter;
  }

  setView(component: RecoveryPresenterOutput): void {
    this._view = component;
  }

  sendEmail(email: ResetPassword): void {
    this._view.isLoading = true;
    this._auth.recoveryPassword(email).subscribe(response => {
      if (response.status === HttpStatusCode.Created) {
        this._view.recoveryForm.reset();
        swal.fire(emailSended).then((action: SweetAlertResult) => {
          if (action.isConfirmed)
            this._router.navigate([Navigation.changePassword]);
        });
      }
      this._view.isLoading = false;
    }, (error: HttpErrorResponse) => {
      this._view.errorResponse = error;
      this._view.showError = !error.ok;
      this._view.isLoading = false;
    });
  }
}

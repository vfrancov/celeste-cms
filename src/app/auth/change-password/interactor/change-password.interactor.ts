import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { IAuthRepository } from "@domain/auth/authentication.repository";
import { ChangePassword } from "@domain/auth/recovery.dto";
import { ChangePasswordPresenterOutput } from "../presenter/change-password.presenter.output";
import swal, { SweetAlertResult } from 'sweetalert2';
import { Navigation } from "@core/constants/navigataion.enum";
import { emailSended, passwordChanged } from "@core/constants/sweetalert.config";
import { Router } from "@angular/router";

@Injectable()
export class ChangePasswordInteractor {
  private _view: ChangePasswordPresenterOutput;
  private _presenter: any;

  constructor(
    @Inject(RepositoryProvider.AuthRepository) private _auth: IAuthRepository,
    private _router: Router
  ) { }

  setPresenter(presenter: any): void {
    this._presenter = presenter;
  }

  setView(component: any): void {
    this._view = component;
  }

  changePassword(payload: ChangePassword): void {
    this._view.isLoading = true;
    this._auth.chagePassword(payload).subscribe((response: HttpResponse<any>) => {
      if (response.status === HttpStatusCode.Created) {
        this._view.changePasswordForm.reset();
        swal.fire(passwordChanged).then((action: SweetAlertResult) => {
          if (action.isConfirmed)
            this._router.navigate([Navigation.login]);
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

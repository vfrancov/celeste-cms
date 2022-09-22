import { Injectable } from "@angular/core";
import { ResetPassword } from "@domain/auth/recovery.dto";
import { RecoveryInteractor } from "../interactor/recovery.interactor";
import { RecoveryPresenterInput } from "./recovery.presenter.input";
import { RecoveryPresenterOutput } from "./recovery.presenter.output";

@Injectable()
export class RecoveryPresenter implements RecoveryPresenterInput {
  private _view: RecoveryPresenterOutput;

  constructor(private _interactor: RecoveryInteractor) {
    this._interactor.setPresenter(this);
  }

  public setView(component: RecoveryPresenterOutput): void {
    this._interactor.setView(component);
  }

  sendEmailToUser(recoveryForm: ResetPassword): void {
    this._interactor.sendEmail(recoveryForm);
  }
}

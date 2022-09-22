import { Injectable } from "@angular/core";
import { ChangePassword } from "@domain/auth/recovery.dto";
import { ChangePasswordInteractor } from "../interactor/change-password.interactor";
import { ChangePasswordPresenterInput } from "./change-password.presenter.input";
import { ChangePasswordPresenterOutput } from "./change-password.presenter.output";

@Injectable()
export class ChangePasswordPresenter implements ChangePasswordPresenterInput {
  private _view: ChangePasswordPresenterOutput;

  constructor(private _interactor: ChangePasswordInteractor) {
    this._interactor.setPresenter(this);
  }

  public setView(component: ChangePasswordPresenterOutput): void {
    this._interactor.setView(component);
  }

  changePassword(payload: ChangePassword): void {
    this._interactor.changePassword(payload);
  }
}

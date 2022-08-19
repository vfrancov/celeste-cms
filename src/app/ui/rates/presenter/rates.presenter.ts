import { Injectable } from "@angular/core";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { CreateRate, RatesDto } from "@domain/rates/rates.dto";
import { RatesInteractor } from "../interactor/rates.interactor";
import { RatesInteractorOutput } from "../interactor/rates.interactor.output";
import { RatesPresenterInput } from "./rates.presenter.input";
import { RatePresenterOutput } from "./rates.presenter.output";

@Injectable()
export class RatesPresenter implements RatesPresenterInput, RatesInteractorOutput {
  private _view: RatePresenterOutput;

  constructor(private _interactor: RatesInteractor) {
    this._interactor.setPresenter(this);
  }

  public setView(component: RatePresenterOutput): void {
    this._view = component;
    this._interactor.setView(component);
  }

  readAll(requestBody: IFilterRequestBody): void {
    this._interactor.readAll(requestBody);
  }

  createRate(formRate: CreateRate): void {
    this._interactor.createRate(formRate);
  }

  showModalRateWithData(rate: Required<RatesDto>): void {
    this._interactor.showModalWithRateData(rate);
  }

  updateRate(id: number, formRate: Required<RatesDto>): void {
    this._interactor.updateRate(id, formRate);
  }

  deleteRate(id: number): void {
    this._interactor.deleteRate(id);
  }
}

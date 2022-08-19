import { CorePresenter } from "@core/view/core.view";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { CreateRate, GetRate, UpdateRate } from "@domain/rates/rates.dto";

export interface RatesPresenterInput extends CorePresenter {
  readAll(requestBody: IFilterRequestBody): void
  createRate(formRate: CreateRate): void
  showModalRateWithData(rate: GetRate): void;
  updateRate(id: number, formRate: UpdateRate): void;
  deleteRate(id: number): void;
}

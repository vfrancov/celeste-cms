import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { ZonePresenterOutput } from "../presenter/zone.presenter.output";

export interface ZoneInteractorOutput {
  readAll(requestBody: IFilterRequestBody): void
}

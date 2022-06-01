import { IFilterRequestBody } from "@domain/http/request.body.dto";

export interface IFloorInteractorOutput {
  readAll(requestBody: IFilterRequestBody): void
}

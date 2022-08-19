import { HttpResponse } from "@angular/common/http";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { Observable } from "rxjs";
import { CreateRate, RatesDto, UpdateRate } from "./rates.dto";

export interface IRateRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>>
  createRate(payload: CreateRate): Observable<HttpResponse<any>>
  updateRate(id: number, payload: UpdateRate): Observable<HttpResponse<any>>
  getRateById(id: number): Observable<HttpResponse<RatesDto>>
  deleteRate(id: number, status: number): Observable<HttpResponse<any>>
}

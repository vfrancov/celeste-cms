import { HttpResponse } from "@angular/common/http";
import { CreateCompanie, GetCompanie, UpdateCompanie } from "./companies.dto";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { Observable } from "rxjs";

export interface ICompaniesRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody<any>>>
  createCompanie(payload: CreateCompanie): Observable<HttpResponse<any>>
  updateCompanie(payload: UpdateCompanie): Observable<HttpResponse<any>>
  getCompanieById(id: number): Observable<HttpResponse<GetCompanie>>
  deleteCompanie(id: number, status: number): Observable<HttpResponse<any>>
  enableOrDisableCompanie(status: number, companie: UpdateCompanie): Observable<HttpResponse<any>>
}

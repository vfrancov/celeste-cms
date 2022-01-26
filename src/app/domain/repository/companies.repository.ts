import { HttpResponse } from "@angular/common/http";
import { CreateCompanie, GetCompanie, UpdateCompanie } from "@domain/dto/companies.dto";
import { IFilterRequestBody } from "@domain/dto/request.body.dto";
import { IResponseBody } from "@domain/dto/response.body.dto";
import { Observable } from "rxjs";

export interface ICompaniesRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>>
  createCompanie(payload: CreateCompanie): Observable<HttpResponse<any>>
  updateCompanie(payload: UpdateCompanie): Observable<HttpResponse<any>>
  getCompanieById(id: number): Observable<HttpResponse<GetCompanie>>
  deleteCompanie(id: number, status: number): Observable<HttpResponse<any>>
}

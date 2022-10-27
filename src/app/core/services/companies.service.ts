import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateCompanie, GetCompanie, UpdateCompanie } from "@domain/companies/companies.dto";
import { ICompaniesRepository } from "@domain/companies/companies.repository";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class CompaniesService implements ICompaniesRepository {

  constructor(private http: HttpClient) { }

  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>> {
    return this.http.post<IResponseBody>(`${environment.baseUrl}/api/Companies/All`, payload, { observe: 'response' });
  }

  createCompanie(payload: CreateCompanie): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/Companies`, payload, { observe: 'response' });
  }

  getCompanieById(id: number): Observable<HttpResponse<GetCompanie>> {
    return this.http.get<GetCompanie>(`${environment.baseUrl}/api/Companies/${id}`, { observe: 'response' });
  }

  updateCompanie(payload: UpdateCompanie): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Companies/${payload.id}`, payload, { observe: 'response' });
  }

  deleteCompanie(id: number, status: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.baseUrl}/api/Companies/${id}`, { observe: 'response' });
  }

  enableOrDisableCompanie(status: number, payload: UpdateCompanie): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Companies/${payload.id}`, { ...payload, statusId: status }, { observe: 'response' });
  }
}

import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { CreateRate, RatesDto } from "@domain/rates/rates.dto";
import { IRateRepository } from "@domain/rates/rates.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class RatesService implements IRateRepository {

  constructor(private http: HttpClient) { }

  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>> {
    return this.http.post<IResponseBody>(`${environment.baseUrl}/api/Tariff/All`, payload, { observe: 'response' });
  }

  createRate(payload: CreateRate): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/Tariff`, payload, { observe: 'response' });
  }

  updateRate(id: number, payload: Required<RatesDto>): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Tariff/${id}`, payload, { observe: 'response' });
  }

  getRateById(id: number): Observable<HttpResponse<RatesDto>> {
    return this.http.get<RatesDto>(`${environment.baseUrl}/api/Tariff/${id}`, { observe: 'response' });
  }

  deleteRate(id: number, status: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.baseUrl}/api/Tariff/${id}`, { observe: 'response' });
  }
}

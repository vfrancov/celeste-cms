import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BillingDto, InvoicesResponse } from "@domain/billing/billing.dto";
import { IBillingRepository } from "@domain/billing/billing.repository";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class BillingService implements IBillingRepository {

  constructor(private _http: HttpClient) { }

  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody<BillingDto>>> {
    return this._http.post<IResponseBody<BillingDto>>(`${environment.baseUrl}/api/Invoices/All`, payload, { observe: 'response' })
  }

  getBillingById(id: number): Observable<HttpResponse<InvoicesResponse>> {
    return this._http.get<InvoicesResponse>(`${environment.baseUrl}/api/Invoices/${id}`, { observe: 'response' });
  }
}

import { HttpResponse } from "@angular/common/http";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { Observable } from "rxjs";
import { BillingDto, InvoicesResponse } from "./billing.dto";

export interface IBillingRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody<BillingDto>>>
  getBillingById(id: number): Observable<HttpResponse<InvoicesResponse>>
}

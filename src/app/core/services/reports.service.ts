import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class ReportServices {
  constructor(private http: HttpClient) { }

  getResume(payload: IFilterRequestBody): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/Reports/getResume`, payload, { observe: 'response' });
  }
}

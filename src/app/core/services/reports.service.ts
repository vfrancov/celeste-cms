import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class ReportServices {
  constructor(private http: HttpClient) { }

  getResume(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>> {
    return this.http.post<IResponseBody>(`${environment.baseUrl}/api/Report/Novelty`, payload, { observe: 'response' });
  }

  getNoveltieById(id: number): Observable<HttpResponse<any>> {
    return this.http.get(`${environment.baseUrl}/api/Report/Novelty/${id}`, { observe: 'response' });
  }

  downloadReport(fileId: string): Observable<HttpResponse<any>> {
    return this.http.get(`${environment.baseUrl}/api/Download/${fileId}`, { responseType: 'blob' as 'json', observe: 'response' });
  }
}

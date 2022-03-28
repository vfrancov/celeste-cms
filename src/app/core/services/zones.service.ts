import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { CreateZone, GetZone, UpdateZone, ZoneDto } from "@domain/zone/zone.dto";
import { IZoneRepository } from "@domain/zone/zone.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class ZonesService implements IZoneRepository {

  constructor(private http: HttpClient) { }

  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>> {
    return this.http.post<IResponseBody>(`${environment.baseUrl}/api/Zone/All`, payload, { observe: 'response' });
  }

  createZone(payload: CreateZone): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/Zone`, payload, { observe: 'response' });
  }

  getZoneById(id: number): Observable<HttpResponse<ZoneDto>> {
    return this.http.get<ZoneDto>(`${environment.baseUrl}/api/Zone/${id}`, { observe: 'response' });
  }

  updateZone(id: number, payload: UpdateZone): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Zone/${id}`, payload, { observe: 'response' });
  }

  deleteZone(id: number, status: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.baseUrl}/api/Zone/${id}`, { observe: 'response' });
  }
}

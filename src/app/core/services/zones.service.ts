import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IFilterRequestBody } from "@domain/dto/request.body.dto";
import { IResponseBody } from "@domain/dto/response.body.dto";
import { GetZone, ZoneDto } from "@domain/dto/zone.dto";
import { IZoneRepository } from "@domain/repository/zone.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class ZonesService implements IZoneRepository {

  constructor(private http: HttpClient) { }

  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>> {
    return this.http.post<IResponseBody>(`${environment.baseUrl}/api/ZoneAll`, payload, { observe: 'response' });
  }

  createZone(payload: Required<ZoneDto>): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/Zone`, payload, { observe: 'response' });
  }

  getZoneById(id: number): Observable<HttpResponse<ZoneDto>> {
    return this.http.get<ZoneDto>(`${environment.baseUrl}/api/Zone/${id}`, { observe: 'response' });
  }

  updateZone(payload: Required<GetZone>): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Zone/${payload.id}`, payload, { observe: 'response' });
  }

  deleteZone(id: number, status: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.baseUrl}/api/Zone/${id}`, { observe: 'response' });
  }
}

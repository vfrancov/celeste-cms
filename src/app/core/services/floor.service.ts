import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateFloor, FloorDto, UpdateFloor } from "@domain/floor/floor.dto";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { IFloorRepository } from "@domain/floor/floor.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class FloorService implements IFloorRepository {

  constructor(private http: HttpClient) { }

  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody<any>>> {
    return this.http.post<IResponseBody<any>>(`${environment.baseUrl}/api/Floor/All`, payload, { observe: 'response' });
  }

  createFloor(payload: CreateFloor): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/Floor`, payload, { observe: 'response' });
  }

  getFloorById(id: number): Observable<HttpResponse<FloorDto>> {
    return this.http.get<FloorDto>(`${environment.baseUrl}/api/Floor/${id}`, { observe: 'response' });
  }

  updateFloor(id: number, payload: UpdateFloor): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Floor/${id}`, payload, { observe: 'response' });
  }

  deleteFloor(id: number, status: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.baseUrl}/api/Floor/${id}`, { observe: 'response' });
  }
}

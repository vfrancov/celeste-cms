import { HttpResponse } from "@angular/common/http";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { CreateZone, UpdateZone, ZoneDto } from "@domain/zone/zone.dto";
import { Observable } from "rxjs";

export interface IZoneRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>>
  createZone(payload: CreateZone): Observable<HttpResponse<any>>
  updateZone(id: number, payload: UpdateZone): Observable<HttpResponse<any>>
  getZoneById(id: number): Observable<HttpResponse<ZoneDto>>
  deleteZone(id: number, status: number): Observable<HttpResponse<any>>
}

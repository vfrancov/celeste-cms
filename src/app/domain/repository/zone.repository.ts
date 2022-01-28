import { HttpResponse } from "@angular/common/http";
import { IFilterRequestBody } from "@domain/dto/request.body.dto";
import { IResponseBody } from "@domain/dto/response.body.dto";
import { IZoneFields, ZoneDto } from "@domain/dto/zone.dto";
import { Observable } from "rxjs";

export interface IZoneRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>>
  createZone(payload: IZoneFields): Observable<HttpResponse<any>>
  updateZone(payload: IZoneFields): Observable<HttpResponse<any>>
  getZoneById(id: number): Observable<HttpResponse<ZoneDto>>
  deleteZone(id: number, status: number): Observable<HttpResponse<any>>
}

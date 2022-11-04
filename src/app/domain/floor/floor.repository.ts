import { HttpResponse } from "@angular/common/http"
import { CreateFloor, FloorDto, UpdateFloor } from "@domain/floor/floor.dto"
import { IFilterRequestBody } from "@domain/http/request.body.dto"
import { IResponseBody } from "@domain/http/response.body.dto"
import { Observable } from "rxjs"

export interface IFloorRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody<any>>>
  createFloor(payload: CreateFloor): Observable<HttpResponse<any>>
  updateFloor(id: number, payload: UpdateFloor): Observable<HttpResponse<any>>
  getFloorById(id: number): Observable<HttpResponse<FloorDto>>
  deleteFloor(id: number, status: number): Observable<HttpResponse<any>>
}

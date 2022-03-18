import { HttpResponse } from "@angular/common/http"
import { CreateFloor, FloorDto, UpdateFloor } from "@domain/dto/floor.dto"
import { IFilterRequestBody } from "@domain/dto/request.body.dto"
import { IResponseBody } from "@domain/dto/response.body.dto"
import { Observable } from "rxjs"

export interface IFloorRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>>
  createFloor(payload: CreateFloor): Observable<HttpResponse<any>>
  updateFloor(id: number, payload: UpdateFloor): Observable<HttpResponse<any>>
  getFloorById(id: number): Observable<HttpResponse<FloorDto>>
  deleteFloor(id: number, status: number): Observable<HttpResponse<any>>
}

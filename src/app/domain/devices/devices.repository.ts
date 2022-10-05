import { HttpResponse } from "@angular/common/http"
import { IFilterRequestBody } from "@domain/http/request.body.dto"
import { IResponseBody } from "@domain/http/response.body.dto"
import { Observable } from "rxjs"
import { CreateDevice, DeviceDto, UpdateDevice } from "./devices.dto"

export interface IDeviceRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>>
  createDevice(payload: CreateDevice): Observable<HttpResponse<any>>
  updateDevice(id: number, payload: UpdateDevice): Observable<HttpResponse<any>>
  getDeviceById(id: number): Observable<HttpResponse<DeviceDto>>
  deleteDevice(id: number, status: number): Observable<HttpResponse<any>>
}

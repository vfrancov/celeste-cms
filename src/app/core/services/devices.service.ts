import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateDevice, DeviceDto } from "@domain/devices/devices.dto";
import { IDeviceRepository } from "@domain/devices/devices.repository";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class DeviceService implements IDeviceRepository {

  constructor(private http: HttpClient) { }

  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>> {
    return this.http.post<IResponseBody>(`${environment.baseUrl}/api/Devices/All`, payload, { observe: 'response' });
  }

  createDevice(payload: CreateDevice): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/Devices`, payload, { observe: 'response' });
  }

  updateDevice(id: number, payload: Required<DeviceDto>): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/Devices/${id}`, payload, { observe: 'response' });
  }

  getDeviceById(id: number): Observable<HttpResponse<DeviceDto>> {
    return this.http.get<DeviceDto>(`${environment.baseUrl}/api/Devices/${id}`, { observe: 'response' });
  }

  deleteDevice(id: number, status: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.baseUrl}/api/Devices/${id}`, { observe: 'response' });
  }
}

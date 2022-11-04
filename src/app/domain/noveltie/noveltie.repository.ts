import { HttpResponse } from "@angular/common/http";
import { CreateNovelty, GetNovelty, UpdateNovelty } from "@domain/noveltie/novelty.dto";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { Observable } from "rxjs";

export interface INoveltyRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody<any>>>
  createNoveltie(payload: CreateNovelty): Observable<HttpResponse<any>>
  updateNoveltie(id: number, payload: UpdateNovelty): Observable<HttpResponse<any>>
  getNoveltieById(id: number | any): Observable<HttpResponse<GetNovelty>>
  getSubNoveltiesById(id: number): Observable<HttpResponse<IResponseBody<any>>>
  deleteNoveltie(id: number, status: number): Observable<HttpResponse<any>>
}

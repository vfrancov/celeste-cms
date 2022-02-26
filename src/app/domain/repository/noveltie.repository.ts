import { HttpResponse } from "@angular/common/http";
import { CreateNovelty, GetNovelty, UpdateNovelty } from "@domain/dto/novelty.dto";
import { IFilterRequestBody } from "@domain/dto/request.body.dto";
import { IResponseBody } from "@domain/dto/response.body.dto";
import { Observable } from "rxjs";

export interface INoveltyRepository {
  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>>
  createNoveltie(payload: CreateNovelty): Observable<HttpResponse<any>>
  updateNoveltie(id: number, payload: UpdateNovelty): Observable<HttpResponse<any>>
  getNoveltieById(id: number | any): Observable<HttpResponse<GetNovelty>>
  deleteNoveltie(id: number, status: number): Observable<HttpResponse<any>>
}

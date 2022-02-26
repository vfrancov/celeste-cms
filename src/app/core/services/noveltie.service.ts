import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateNovelty, GetNovelty, NoveltyDTO, UpdateNovelty } from "@domain/dto/novelty.dto";
import { IFilterRequestBody } from "@domain/dto/request.body.dto";
import { IResponseBody } from "@domain/dto/response.body.dto";
import { INoveltyRepository } from "@domain/repository/noveltie.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class NoveltieService implements INoveltyRepository {

  constructor(private http: HttpClient) { }

  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>> {
    return this.http.post<IResponseBody>(`${environment.baseUrl}/api/AppNovelty/All`, payload, { observe: 'response' });
  }

  createNoveltie(payload: CreateNovelty): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/AppNovelty`, payload, { observe: 'response' });
  }

  getNoveltieById(id: number): Observable<HttpResponse<Required<NoveltyDTO>>> {
    return this.http.get<GetNovelty>(`${environment.baseUrl}/api/AppNovelty/${id}`, { observe: 'response' });
  }

  updateNoveltie(id: number, payload: UpdateNovelty): Observable<HttpResponse<any>> {
    return this.http.put(`${environment.baseUrl}/api/AppNovelty/${id}`, payload, { observe: 'response' });
  }

  deleteNoveltie(id: number, status: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.baseUrl}/api/AppNovelty/${id}`, { observe: 'response' });
  }
}

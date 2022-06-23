import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { CreateAssociation, CreateSubNoveltie } from "@domain/subnoveltie/subnoveltie.dto";
import { ISubNoveltyRepository } from "@domain/subnoveltie/subnoveltie.repository";
import { environment } from "@environment/environment";
import { Observable } from "rxjs";

@Injectable()
export class SubNoveltieService implements ISubNoveltyRepository {
  constructor(private http: HttpClient) { }

  readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>> {
    return this.http.post<IResponseBody>(`${environment.baseUrl}/api/AppSubNovelty/All`, payload, { observe: 'response' });
  }

  createSubNoveltie(payload: CreateSubNoveltie): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/AppSubNovelty`, payload, { observe: 'response' });
  }

  associateNoveltieAndSubNoveltie(asociation: any): Observable<HttpResponse<any>> {
    return this.http.post(`${environment.baseUrl}/api/AppSubNovelty/NoveltySubNovelty`, asociation, { observe: 'response' });
  }

  listRelNoveltySubNovelty(id: number): Observable<HttpResponse<IResponseBody>> {
    return this.http.get<IResponseBody>(`${environment.baseUrl}/api/AppSubNovelty/ListRelNoveltySubNovelty/${id}`, { observe: 'response' });
  }

  dissasociateNoveltieAndSubnoveltie(dissasosiation: CreateAssociation): Observable<HttpResponse<any>> {
    return this.http.delete(`${environment.baseUrl}/api/AppSubNovelty/DeleteRelNoveltySubNovelty/${dissasosiation.appNoveltysId}/${dissasosiation.appSubNoveltysId}`, { observe: 'response' });
  }
}

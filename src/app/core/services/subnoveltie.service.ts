import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IFilterRequestBody } from "@domain/dto/request.body.dto";
import { IResponseBody } from "@domain/dto/response.body.dto";
import { CreateAssociation, CreateSubNoveltie } from "@domain/dto/subnoveltie.dto";
import { ISubNoveltyRepository } from "@domain/repository/subnoveltie.repository";
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

	associateNoveltieAndSubNoveltie(asociation: CreateAssociation): Observable<HttpResponse<any>> {
		return this.http.post(`${environment.baseUrl}/api/AppSubNovelty/NoveltySubNovelty`, asociation, { observe: 'response' });
	}
}
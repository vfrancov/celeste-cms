import { HttpResponse } from "@angular/common/http";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { CreateAssociation, CreateSubNoveltie } from "@domain/subnoveltie/subnoveltie.dto";
import { Observable } from "rxjs";

export interface ISubNoveltyRepository {
    readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>>
    createSubNoveltie(payload: CreateSubNoveltie): Observable<HttpResponse<any>>
    associateNoveltieAndSubNoveltie(asociation: CreateAssociation): Observable<HttpResponse<any>>
    listRelNoveltySubNovelty(id: any): Observable<HttpResponse<IResponseBody>>
}
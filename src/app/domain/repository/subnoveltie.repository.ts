import { HttpResponse } from "@angular/common/http";
import { GetNovelty, UpdateNovelty } from "@domain/dto/novelty.dto";
import { IFilterRequestBody } from "@domain/dto/request.body.dto";
import { IResponseBody } from "@domain/dto/response.body.dto";
import { CreateAssociation, CreateSubNoveltie } from "@domain/dto/subnoveltie.dto";
import { Observable } from "rxjs";

export interface ISubNoveltyRepository {
    readAll(payload: IFilterRequestBody): Observable<HttpResponse<IResponseBody>>
    createSubNoveltie(payload: CreateSubNoveltie): Observable<HttpResponse<any>>
    associateNoveltieAndSubNoveltie(asociation: CreateAssociation): Observable<HttpResponse<any>>
}
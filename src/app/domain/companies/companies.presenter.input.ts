import { AbstractControl } from "@angular/forms";
import { CorePresenter } from "@core/view/core.view";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { CompaniesDto, CreateCompanie } from "./companies.dto";

export interface CompaniesPresenterInput extends CorePresenter {
    fetchCompanieData(request: IFilterRequestBody): CompaniesDto[]
    registerCompanie(payload: CreateCompanie): void
}
import { AbstractControl } from "@angular/forms";
import { CorePresenter } from "@core/view/core.view";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { CompaniesDto, CreateCompanie, GetCompanie, UpdateCompanie } from "./companies.dto";

export interface CompaniesPresenterInput extends CorePresenter {
    fetchCompanieData(request: IFilterRequestBody): void
    registerCompanie(payload: CreateCompanie): void
    fetchDataInModal(id: number): void
    deleteCompanie(id: number): void
    editCompanie(payload: UpdateCompanie): void
}
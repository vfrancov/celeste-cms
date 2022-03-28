import { CorePresenter } from "@core/view/core.view";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { CompaniesDto } from "./companies.dto";

export interface CompaniesPresenterInput extends CorePresenter {
    fetchCompanieData(request: IFilterRequestBody): CompaniesDto[]
}
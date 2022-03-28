import { Inject, Injectable } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { CompaniesDto, GetCompanie } from "@domain/companies/companies.dto";
import { CompaniesPresenterInput } from "@domain/companies/companies.presenter.input";
import { ICompaniesRepository } from "@domain/companies/companies.repository";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { CompanieInteractor } from "../interactor/companie.interactor";
import { CompaniesPageComponent } from "../view/companies.component";

@Injectable()
export class CompaniePresenter implements CompaniesPresenterInput {
    private _view: CompaniesPageComponent;

    constructor(private _interactor: CompanieInteractor) { }

    setView(component: CompaniesPageComponent) {
        this._view = component;
    }

    fetchCompanieData(request: IFilterRequestBody): CompaniesDto[] {
        return this._interactor.getAllCompanieData(request);
    }
}
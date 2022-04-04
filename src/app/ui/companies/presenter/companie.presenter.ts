import { HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { CompaniesDto, CreateCompanie, GetCompanie } from "@domain/companies/companies.dto";
import { CompaniesPresenterInput } from "@domain/companies/companies.presenter.input";
import { ICompaniesRepository } from "@domain/companies/companies.repository";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { CompanieInteractor } from "../interactor/companie.interactor";
import { CompaniesPageComponent } from "../view/companies.component";

@Injectable()
export class CompaniePresenter implements CompaniesPresenterInput {
    private _view: CompaniesPageComponent;

    constructor(private _interactor: CompanieInteractor) {
        _interactor.setPresenter(this);
    }

    setView(component: CompaniesPageComponent) {
        this._view = component;
    }

    fetchCompanieData(request: IFilterRequestBody): CompaniesDto[] {
        return this._interactor.getAllCompanieData(request);
    }

    registerCompanie(payload: CreateCompanie): void {
        this._interactor.createCompanie(payload);
    }

    isRegister(created: boolean, error?: HttpErrorResponse): void {
        this._view.isCompanieCreated(created, error);
        this._view.modalCompanie.closeModal();
    }
}
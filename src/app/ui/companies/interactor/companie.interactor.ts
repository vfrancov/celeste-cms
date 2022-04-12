import { HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { CompaniesDto, CreateCompanie } from "@domain/companies/companies.dto";
import { ICompaniesRepository } from "@domain/companies/companies.repository";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { CompaniePresenter } from "../presenter/companie.presenter";

@Injectable()
export class CompanieInteractor {
    private _presenter: CompaniePresenter;

    constructor(@Inject(RepositoryProvider.companieRepository) private companieService: ICompaniesRepository) { }

    setPresenter(presenter: CompaniePresenter): void {
        this._presenter = presenter;
    }

    getAllCompanieData(request: IFilterRequestBody): void {
        this.companieService.readAll(request).subscribe(
            response => this._presenter.companyList(response.body.list)
        );
    }

    createCompanie(payload: CreateCompanie): void {
        this.companieService.createCompanie(payload).subscribe(
            response => this._presenter.isRegister(response.status === HttpStatusCode.Created),
            (error: HttpErrorResponse) => this._presenter.isRegister(error.ok, error)
        );
    }

    getCompanie(id: number): void {
        this.companieService.getCompanieById(id).subscribe(
            response => this._presenter.setDataModal(response.body)
        );
    }

    deleteCompanie(id: number): void {
        this.companieService.deleteCompanie(id, RequestAction.delete).subscribe(
            response => console.log(response)
        )
    }
}
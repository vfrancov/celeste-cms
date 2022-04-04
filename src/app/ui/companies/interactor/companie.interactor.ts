import { HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
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

    getAllCompanieData(request: IFilterRequestBody): CompaniesDto[] {
        let companieData: CompaniesDto[] = [];
        this.companieService.readAll(request).subscribe(response => companieData = response.body.list);
        return companieData;
    }

    createCompanie(payload: CreateCompanie): void {
        this.companieService.createCompanie(payload).subscribe(
            response => this._presenter.isRegister(response.status === HttpStatusCode.Created),
            (error: HttpErrorResponse) => this._presenter.isRegister(error.ok, error)
        );
    }
}
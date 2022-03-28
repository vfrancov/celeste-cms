import { Inject, Injectable } from "@angular/core";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { CompaniesDto } from "@domain/companies/companies.dto";
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
}
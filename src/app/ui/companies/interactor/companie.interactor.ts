import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { CompaniesDto, CreateCompanie } from "@domain/companies/companies.dto";
import { CompaniesPresenterOutput } from "@domain/companies/companies.presenter.output";
import { ICompaniesRepository } from "@domain/companies/companies.repository";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { IResponseBody } from "@domain/http/response.body.dto";
import { CompaniePresenter } from "../presenter/companie.presenter";

@Injectable()
export class CompanieInteractor {
  private _presenter: CompaniePresenter;
  private _view: CompaniesPresenterOutput

  constructor(@Inject(RepositoryProvider.companieRepository) private companieService: ICompaniesRepository) { }

  setView(component: CompaniesPresenterOutput): void {
    this._view = component;
  }

  setPresenter(presenter: CompaniePresenter): void {
    this._presenter = presenter;
  }

  getAllCompanieData(request: IFilterRequestBody): void {
    this.companieService.readAll(request).subscribe(
      response => this._presenter.companyList(response.body.list, response.body.pages, response.body.records)
    );
  }

  createCompanie(payload: CreateCompanie): void {
    this.companieService.createCompanie(payload).subscribe(
      (response: HttpResponse<IResponseBody>) => {
        this._presenter.isRegister(response.status === HttpStatusCode.Created)
        this._view.modalCompanie.closeModal();
      },
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

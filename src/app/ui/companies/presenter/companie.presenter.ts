import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CompaniesDto, CreateCompanie, GetCompanie, UpdateCompanie } from "@domain/companies/companies.dto";
import { CompaniesInteractorOutput } from "@domain/companies/companies.interactor.output";
import { CompaniesPresenterInput } from "@domain/companies/companies.presenter.input";
import { CompaniesPresenterOutput } from "@domain/companies/companies.presenter.output";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { CompanieInteractor } from "../interactor/companie.interactor";

@Injectable()
export class CompaniePresenter implements CompaniesPresenterInput, CompaniesInteractorOutput {
  private _view: CompaniesPresenterOutput;

  constructor(private _interactor: CompanieInteractor) {
    _interactor.setPresenter(this);
  }

  setView(component: CompaniesPresenterOutput) {
    this._view = component;
    this._interactor.setView(component);
  }

  fetchCompanieData(request: IFilterRequestBody): void {
    this._interactor.getAllCompanieData(request);
  }

  registerCompanie(payload: CreateCompanie): void {
    this._interactor.createCompanie(payload);
  }

  isRegister(created: boolean, error?: HttpErrorResponse): void {
    this._view.isCompanieCreated(created, error);
  }

  companyList(records: CompaniesDto[], pages: number, rows: number): void {
    this._view.showCompanieRecords(records, pages, rows);
  }

  enableCompanie(companie: UpdateCompanie): void {
    this._interactor.enableCompanie(companie);
  }

  disableCompanie(companie: UpdateCompanie): void {
    this._interactor.disableCompanie(companie);
  }

  fetchDataInModal(id: number): void {
    this._interactor.getCompanie(id);
  }

  setDataModal(companie: GetCompanie): void {
    this._view.setDataInModal(companie);
  }

  deleteCompanie(id: number): void {
    this._interactor.deleteCompanie(id);
  }

  editCompanie(payload: UpdateCompanie): void {
    this._interactor.editCompanie(payload);
  }
}

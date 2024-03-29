import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { CompaniesField } from "@core/constants/companies.field";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { canActivateMessage, companieCreated, companieWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadCompanies } from "@core/constants/table.headers";
import { CompaniesDto, DeleteCompanie, GetCompanie, UpdateCompanie } from "@domain/companies/companies.dto";
import { CompaniesPresenterInput } from "@domain/companies/companies.presenter.input";
import { CompaniesPresenterOutput } from "@domain/companies/companies.presenter.output";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import { UserPermissions } from "@domain/shared/menu.dto";
import { IUserPermissionsRepository } from "@domain/user/userpermissions.repository";
import { ModalComponent } from "@shared/customs/modal/modal.component";
import swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'empresas-component',
  templateUrl: './companies.component.html'
})
export class CompaniesPageComponent implements CompaniesPresenterOutput, OnInit {

  @ViewChild(ModalComponent) modalCompanie: IModalComponent;

  public dataTableHead: any[] = dataTableHeadCompanies;
  public formCompanie: FormGroup;
  private requestBody: IFilterRequestBody = new RequestBody;
  public companieData: GetCompanie[];
  public isEditCompanie: boolean = false;
  public companieErrorService: HttpErrorResponse;
  public showErrorCompanieService: boolean;
  public statusCreatedCompanie: boolean;
  public userPermissions: UserPermissions;
  public isDescOrAsc: boolean = true;
  public amountOfPages: number;
  public amountOfRows: number;

  constructor(
    @Inject('CompaniePresenterInput') private _presenter: CompaniesPresenterInput,
    @Inject(RepositoryProvider.userPermissions) private _permissions: IUserPermissionsRepository,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {
    this._presenter.setView(this);
    this.userPermissions = this._permissions.getPermissions(this._router.url);
    this.requestBody.limit = 9
  }

  get checkEmail(): AbstractControl {
    return this.formCompanie.get('email');
  }

  ngOnInit(): void {
    this.getAllCompanies();
    this.initializeCompanieForm();
  }

  initializeCompanieForm(): void {
    this.formCompanie = this.formBuilder.group(CompaniesField);
  }

  getAllCompanies(): void {
    this._presenter.fetchCompanieData(this.requestBody);
  }

  createCompanie(): void {
    this._presenter.registerCompanie(this.formCompanie.value);
  }

  editCompanie(): void {
    this.formCompanie.get('statusId').setValue(RequestAction.update);
    this._presenter.editCompanie(this.formCompanie.value);
  }

  showModalWithCompanieData(companie: GetCompanie): void {
    this.showErrorCompanieService = false;
    this.isEditCompanie = true;
    this._presenter.fetchDataInModal(companie.id);
  }

  deleteCompanie(companie: DeleteCompanie): void {
    swal.fire(companieWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed)
        this._presenter.deleteCompanie(companie.id);
    });
  }

  showFormToCreate(): void {
    this.formCompanie.reset();
    this.showErrorCompanieService = false;
    this.isEditCompanie = false;
  }

  isCompanieCreated(status: boolean, error?: HttpErrorResponse): void {
    if (!status) {
      this.showErrorCompanieService = !error.ok;
      this.companieErrorService = error;
    } else {
      swal.fire(companieCreated)
      this.getAllCompanies();
    }
  }

  showCompanieRecords(records: CompaniesDto[], pages: number, rows: number): void {
    this.companieData = records;
    this.amountOfPages = pages;
    this.amountOfRows = rows;
  }

  setDataInModal(companie: GetCompanie): void {
    this.formCompanie.patchValue(companie);
  }

  enableOrDisableCompanie(companie: GetCompanie, statusId: number): void {
    swal.fire(canActivateMessage).then((action) => {
      if (action.isConfirmed)
        (statusId === RequestAction.enable) ?
          this.disableCompanie(companie) :
          this.enableCompanie(companie);
    });
  }

  enableCompanie(companie: UpdateCompanie): void {
    this._presenter.enableCompanie(companie);
  }

  disableCompanie(companie: UpdateCompanie): void {
    this._presenter.disableCompanie(companie);
  }

  sort(fieldToSort: string): void {
    this.isDescOrAsc = !this.isDescOrAsc;
    this.requestBody.sort[0].field = fieldToSort;
    this.requestBody.sort[0].dir = (this.isDescOrAsc) ? 'desc' : 'asc';

    this._presenter.fetchCompanieData(this.requestBody);
  }

  applyFilter(filter: any): void {
    this.requestBody.filter = filter.filter;
    this._presenter.fetchCompanieData(this.requestBody);
  }

  restoreFilter(event: any): void {
    this.requestBody = new RequestBody;
    this._presenter.fetchCompanieData(this.requestBody);
  }

  selectedPage(page: number): void {
    this.requestBody.offset = page;
    this._presenter.fetchCompanieData(this.requestBody);
  }
}

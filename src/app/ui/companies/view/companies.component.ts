import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { CompaniesField } from "@core/constants/companies.field";
import { RequestAction } from "@core/constants/requestactions.enum";
import { companieCreated, companieWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadCompanies } from "@core/constants/table.headers";
import { CompaniesDto, DeleteCompanie, GetCompanie } from "@domain/companies/companies.dto";
import { CompaniesPresenterInput } from "@domain/companies/companies.presenter.input";
import { CompaniesPresenterOutput } from "@domain/companies/companies.presenter.output";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import { ModalComponent } from "@shared/customs/modal/modal.component";
import swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'empresas-component',
  templateUrl: './companies.component.html'
})
export class CompaniesPageComponent implements CompaniesPresenterOutput, OnInit {

  @ViewChild('modalCreateAndEditCompanie') modalCompanie: ModalComponent;

  public dataTableHead: string[] = dataTableHeadCompanies;
  public formCompanie: FormGroup;
  private requestBody: IFilterRequestBody = new RequestBody;
  public companieData: GetCompanie[];
  public isEditCompanie: boolean = false;
  public companieErrorService: HttpErrorResponse;
  public showErrorCompanieService: boolean;
  public statusCreatedCompanie: boolean;

  constructor(
    @Inject('CompaniePresenterInput') private _presenter: CompaniesPresenterInput,
    private formBuilder: FormBuilder
  ) {
    this._presenter.setView(this);
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
      if(action.isConfirmed)
        this._presenter.deleteCompanie(companie.id);
    });
  }

  showFormToCreate(): void {
    this.formCompanie.reset();
    this.showErrorCompanieService = false;
    this.isEditCompanie = false;
  }

  isCompanieCreated(status: boolean, error?: HttpErrorResponse): void {
    (status) ? swal.fire(companieCreated) : this.showErrorCompanieService = error.ok;
    this.getAllCompanies();
  }

  showCompanieRecords(records: CompaniesDto[]): void {
    this.companieData = records;
  }

  setDataInModal(companie: GetCompanie): void {
    this.formCompanie.patchValue(companie);
  }
}
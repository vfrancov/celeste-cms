import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup } from "@angular/forms";
import { CompaniesField } from "@core/constants/companies.field";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { companieCreated, companieDeleted, companieUpdated, companieWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadCompanies } from "@core/constants/table.headers";
import { DeleteCompanie, GetCompanie } from "@domain/companies/companies.dto";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import { ICompaniesRepository } from "@domain/companies/companies.repository";
import { ModalComponent } from "@shared/customs/modal/modal.component";
import swal, { SweetAlertResult } from 'sweetalert2';
import { CompaniePresenter } from "../presenter/companie.presenter";
import { CompaniesPresenterInput } from "@domain/companies/companies.presenter.input";

@Component({
  selector: 'empresas-component',
  templateUrl: './companies.component.html'
})
export class CompaniesPageComponent implements OnInit {

  @ViewChild('modalCreateAndEditCompanie') modalCompanie: ModalComponent;

  public dataTableHead: string[] = dataTableHeadCompanies;
  public formCompanie: FormGroup;
  private requestBody: IFilterRequestBody = new RequestBody;
  public companieData: GetCompanie[];
  public isEditCompanie: boolean = false;
  public companieErrorService: HttpErrorResponse;
  public showErrorCompanieService: boolean;

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
    this.companieData = this._presenter.fetchCompanieData(this.requestBody);
  }

  createCompanie(): void {
    /* this.companieService.createCompanie(this.formCompanie.value).subscribe(response => {
      if (response.status === HttpStatusCode.Created) {
        this.modalCompanie.closeModal();
        swal.fire(companieCreated);
        this.fetchData();
      }
    }, (error: HttpErrorResponse) => {
      this.companieErrorService = error;
      this.showErrorCompanieService = !error.ok;
    }); */
  }

  editCompanie(): void {
    /* this.formCompanie.get('statusId').setValue(RequestAction.update);
    this.companieService.updateCompanie(this.formCompanie.value).subscribe(response => {
      if (response.status === HttpStatusCode.NoContent) {
        this.modalCompanie.closeModal();
        swal.fire(companieUpdated);
        this.fetchData();
      }
    }, (error: HttpErrorResponse) => {
      this.companieErrorService = error;
      this.showErrorCompanieService = !error.ok;
    }) */
  }

  showModalWithCompanieData(companie: GetCompanie): void {
    /* this.showErrorCompanieService = false;
    this.isEditCompanie = true;
    this.companieService.getCompanieById(companie.id).subscribe(
      response => this.formCompanie.patchValue(response.body)
    ); */
  }

  deleteCompanie(companie: DeleteCompanie): void {
    /* swal.fire(companieWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed) {
        this.companieService.deleteCompanie(companie.id, RequestAction.delete).subscribe(response => {
          if (response.status === HttpStatusCode.Ok) {
            swal.fire(companieDeleted);
            this.fetchData();
          }
        });
      }
    }); */
  }

  showFormToCreate(): void {
    this.formCompanie.reset();
    this.showErrorCompanieService = false;
    this.isEditCompanie = false;
  }
}
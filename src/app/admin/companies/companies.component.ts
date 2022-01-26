import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CompaniesField } from "@core/constants/companies.field";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { RequestAction } from "@core/constants/requestactions.enum";
import { companieWarning } from "@core/constants/sweetalert.config";
import { dataTableHeadCompanies } from "@core/constants/table.headers";
import { DeleteCompanie, GetCompanie } from "@domain/dto/companies.dto";
import { IFilterRequestBody, RequestBody } from "@domain/dto/request.body.dto";
import { ICompaniesRepository } from "@domain/repository/companies.repository";
import swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'empresas-component',
  templateUrl: './companies.component.html'
})
export class CompaniesPageComponent implements OnInit {

  dataTableHead: string[] = dataTableHeadCompanies;
  formCompanie: FormGroup;
  requestBody: IFilterRequestBody = new RequestBody;
  companieData: GetCompanie[];
  isEditCompanie: boolean = false;
  companieErrorService: HttpErrorResponse;
  showErrorCompanieService: boolean;

  constructor(
    @Inject(RepositoryProvider.companieRepository) private companieService: ICompaniesRepository,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeCompanieForm();
    this.fetchData();
  }

  initializeCompanieForm(): void {
    this.formCompanie = this.formBuilder.group(CompaniesField);
  }

  fetchData(): void {
    this.companieService.readAll(this.requestBody).subscribe(response => this.companieData = response.body.list);
  }

  createCompanie(): void {
    this.companieService.createCompanie(this.formCompanie.value).subscribe(response => {
      if (response.status === HttpStatusCode.Created)
        this.fetchData();
    }, (error: HttpErrorResponse) => {
      this.companieErrorService = error;
      this.showErrorCompanieService = !error.ok;
    });
  }

  editCompanie(): void {
    this.formCompanie.get('statusId').setValue(RequestAction.update);
    this.companieService.updateCompanie(this.formCompanie.value).subscribe(response => {
      if (response.status === HttpStatusCode.NoContent)
        this.fetchData();
    }, (error: HttpErrorResponse) => {
      this.companieErrorService = error;
      this.showErrorCompanieService = !error.ok;
    })
  }

  showModalWithCompanieData(companie: GetCompanie): void {
    this.showErrorCompanieService = false;
    this.isEditCompanie = true;
    this.companieService.getCompanieById(companie.id).subscribe(
      response => this.formCompanie.patchValue(response.body)
    );
  }

  deleteCompanie(companie: DeleteCompanie): void {
    swal.fire(companieWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed) {
        this.companieService.deleteCompanie(companie.id, RequestAction.delete).subscribe(response => {
          if(response.status === HttpStatusCode.Ok)
            this.fetchData();
        });
      }
    });
  }

  showFormToCreate(): void {
    this.formCompanie.reset();
    this.showErrorCompanieService = false;
    this.isEditCompanie = false;
  }
}

import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ratesFields } from "@core/constants/rates.fields";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { dataTableHeadRates } from "@core/constants/table.headers";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import { RatesDto } from "@domain/rates/rates.dto";
import { UserPermissions } from "@domain/shared/menu.dto";
import { IUserPermissionsRepository } from "@domain/user/userpermissions.repository";
import { RatesPresenterInput } from "../presenter/rates.presenter.input";
import { RatePresenterOutput } from "../presenter/rates.presenter.output";

@Component({
  selector: 'rate-component',
  templateUrl: './rates.component.html'
})
export class RatePageComponent implements OnInit, RatePresenterOutput {

  @ViewChild('modalCreateAndEditRate') modalCreateAndEditRate: IModalComponent;

  public dataTableHead: string[] = dataTableHeadRates;
  public ratesData: RatesDto[] = [];
  public userPermissions: UserPermissions;
  public requestBody: IFilterRequestBody = new RequestBody;
  public formRates: FormGroup;
  public showErrorRateService: boolean;
  public rateErrorService: HttpErrorResponse;
  public rates: RatesDto;
  public isEditRate: boolean;
  public isDescOrAsc: boolean = false;
  public amountOfPages: number;
  public amountOfRows: number;

  constructor(
    @Inject(RepositoryProvider.userPermissions) private _permissions: IUserPermissionsRepository,
    @Inject('RatesPresenter') private _ratesPresenter: RatesPresenterInput,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {
    this.userPermissions = this._permissions.getPermissions(this._router.url);
    this._ratesPresenter.setView(this);
  }

  ngOnInit(): void {
    this.readAll();
    this.initializeRateForm();
  }

  readAll(): void {
    this._ratesPresenter.readAll(this.requestBody);
  }

  initializeRateForm(): void {
    this.formRates = this.formBuilder.group(ratesFields);
  }

  createRate(): void {
    this._ratesPresenter.createRate(this.formRates.value);
  }

  updateRate(): void {
    this._ratesPresenter.updateRate(this.rates.id, this.formRates.value);
  }

  showModalRateWithData(rate: RatesDto): void {
    this._ratesPresenter.showModalRateWithData(rate);
  }

  showModalCreateRate(): void {
    this.showErrorRateService = false;
    this.isEditRate = false;
    this.formRates.reset();
  }

  deleteRate(rate: RatesDto): void {
    this._ratesPresenter.deleteRate(rate.id);
  }

  sort(fieldToSort: string): void {
    this.isDescOrAsc = !this.isDescOrAsc;
    this.requestBody.sort[0].field = fieldToSort;
    this.requestBody.sort[0].dir = (this.isDescOrAsc) ? 'desc' : 'asc';

    this.readAll();
  }

  applyFilter(filter: any): void {
    this.requestBody.filter = filter.filter;
    this.readAll();
  }

  restoreFilter(event: any): void {
    this.requestBody = new RequestBody;
    this.readAll();
  }

  selectedPage(page: number): void {
    this.requestBody.offset = page;
    this.readAll();
  }
}

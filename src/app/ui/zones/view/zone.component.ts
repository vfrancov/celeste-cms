import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { dataTableHeadZones } from "@core/constants/table.headers";
import { zoneFields } from "@core/constants/zones.field";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import { UserPermissions } from "@domain/shared/menu.dto";
import { IUserPermissionsRepository } from "@domain/user/userpermissions.repository";
import { ZoneDto } from "@domain/zone/zone.dto";
import { ZonePresenterInput } from "../presenter/zone.presenter.input";
import { ZonePresenterOutput } from "../presenter/zone.presenter.output";

@Component({
  selector: 'zone-component',
  templateUrl: './zone.component.html'
})
export class ZonePageComponent implements OnInit, ZonePresenterOutput {

  @ViewChild('modalCreateAndEditZone') modalCreateAndEditZone: IModalComponent;

  dataTableHead: string[] = dataTableHeadZones;
  zoneData: ZoneDto[] = [];
  requestBody: IFilterRequestBody = new RequestBody;
  formZone: FormGroup;
  isEditZone: boolean = false;
  zoneErrorService: HttpErrorResponse;
  showErrorZoneService: boolean;
  zone: ZoneDto;
  public userPermissions: UserPermissions;
  public isDescOrAsc: boolean = false;
  amountOfPages: number;
  amountOfRows: number;

  constructor(
    @Inject(RepositoryProvider.userPermissions) private _permissions: IUserPermissionsRepository,
    @Inject('zonePresenter') private _zonePresenter: ZonePresenterInput,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {
    this.userPermissions = this._permissions.getPermissions(this._router.url);
    this._zonePresenter.setView(this);
  }

  ngOnInit(): void {
    this.readAll();
    this.initializeZoneForm();
  }

  readAll(): void {
    this._zonePresenter.readAll(this.requestBody);
  }

  initializeZoneForm(): void {
    this.formZone = this.formBuilder.group(zoneFields);
  }

  createZone(): void {
    this._zonePresenter.createZone(this.formZone.value);
  }

  showModalZonaWithData(zone: ZoneDto): void {
    this._zonePresenter.showModalZonaWithData(zone);
  }

  showModalCreateZone(): void {
    this.showErrorZoneService = false;
    this.isEditZone = false;
    this.formZone.reset();
  }

  updateZone(): void {
    this._zonePresenter.updateZone(this.zone.id, this.formZone.value);
  }

  deleteZone(zone: ZoneDto): void {
    this._zonePresenter.deleteZone(zone.id);
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

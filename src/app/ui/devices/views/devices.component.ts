import { HttpErrorResponse } from "@angular/common/http";
import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { deviceFields } from "@core/constants/devices.fields";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { dataTableHeadDevices } from "@core/constants/table.headers";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { DeviceDto } from "@domain/devices/devices.dto";
import { IFilterRequestBody, RequestBody } from "@domain/http/request.body.dto";
import { UserPermissions } from "@domain/shared/menu.dto";
import { IUserPermissionsRepository } from "@domain/user/userpermissions.repository";
import { DevicePresenterInput } from "../presenter/devices.presenter.input";
import { DevicePresenterOutput } from "../presenter/devices.presenter.output";

@Component({
  selector: 'devices-component',
  templateUrl: './devices.component.html'
})
export class DevicesPageComponent implements OnInit, DevicePresenterOutput {

  @ViewChild('modalCreateAndEditDevice') modalCreateAndEditDevice: IModalComponent;

  public dataTableHead: string[] = dataTableHeadDevices;
  public deviceData: DeviceDto[] = [];
  public userPermissions: UserPermissions;
  public requestBody: IFilterRequestBody = new RequestBody;
  public formDevice: FormGroup;
  public showErrorDeviceService: boolean;
  public deviceErrorService: HttpErrorResponse;
  public devices: DeviceDto;
  public isEditDevice: boolean;
  public isDescOrAsc: boolean = false;
  public amountOfPages: number;
  public amountOfRows: number;

  constructor(
    @Inject(RepositoryProvider.userPermissions) private _permissions: IUserPermissionsRepository,
    @Inject('DevicePresenter') private _devicePresenter: DevicePresenterInput,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {
    this.userPermissions = this._permissions.getPermissions(this._router.url);
    this._devicePresenter.setView(this);
  }

  ngOnInit(): void {
    this.readAll();
    this.initializeDeviceForm();
  }

  readAll(): void {
    this._devicePresenter.readAll(this.requestBody);
  }

  initializeDeviceForm(): void {
    this.formDevice = this.formBuilder.group(deviceFields);
  }

  createDevice(): void {
    this._devicePresenter.createDevice(this.formDevice.value);
  }

  updateDevice(): void {
    this._devicePresenter.updateDevice(this.devices.id, this.formDevice.value);
  }

  showModalDeviceWithData(device: DeviceDto): void {
    this._devicePresenter.showModalDeviceWithData(device);
  }

  showModalCreateDevice(): void {
    this.showErrorDeviceService = false;
    this.isEditDevice = false;
    this.formDevice.reset();
  }

  deleteDevice(device: DeviceDto): void {
    this._devicePresenter.deleteDevice(device.id);
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

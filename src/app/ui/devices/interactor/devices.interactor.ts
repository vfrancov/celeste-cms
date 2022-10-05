import { Inject, Injectable } from "@angular/core";
import { HttpStatusCode } from "@core/constants/httpstatuscode.enum";
import { RepositoryProvider } from "@core/constants/repository.enum";
import { CreateDevice, DeviceDto, UpdateDevice } from "@domain/devices/devices.dto";
import { IDeviceRepository } from "@domain/devices/devices.repository";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { DevicePresenterInput } from "../presenter/devices.presenter.input";
import { DevicePresenterOutput } from "../presenter/devices.presenter.output";
import swal, { SweetAlertResult } from 'sweetalert2';
import { deviceCreated, deviceDeleted, deviceUpdated, deviceWarning } from "@core/constants/sweetalert.config";
import { HttpErrorResponse } from "@angular/common/http";
import { RequestAction } from "@core/constants/requestactions.enum";

@Injectable()
export class DeviceInteractor {
  private _view: DevicePresenterOutput;
  private _presenter: DevicePresenterInput;

  constructor(@Inject(RepositoryProvider.deviceRepository) private deviceService: IDeviceRepository) { }

  setPresenter(presenter: DevicePresenterInput): void {
    this._presenter = presenter;
  }

  setView(view: DevicePresenterOutput): void {
    this._view = view;
  }

  readAll(requestBody: IFilterRequestBody): void {
    this.deviceService.readAll(requestBody).subscribe(
      response => {
        this._view.deviceData = response.body.list;
        this._view.amountOfPages = response.body.pages;
        this._view.amountOfRows = response.body.records;
      }
    );
  }

  createDevice(formDevice: CreateDevice): void {
    this.deviceService.createDevice(formDevice).subscribe(response => {
      if (response.status === HttpStatusCode.Created) {
        this._view.modalCreateAndEditDevice.closeModal();
        swal.fire(deviceCreated);
        this._view.readAll();
      }
    }, (error: HttpErrorResponse) => {
      this._view.deviceErrorService = error;
      this._view.showErrorDeviceService = !error.ok;
    });
  }

  updateDevice(id: number, formDevice: UpdateDevice): void {
    this.deviceService.updateDevice(id, formDevice).subscribe(response => {
      if (response.status === HttpStatusCode.NoContent) {
        this._view.modalCreateAndEditDevice.closeModal();
        swal.fire(deviceUpdated);
        this._view.isEditDevice = false;
        this._view.readAll();
      }
    }, (error: HttpErrorResponse) => {
      this._view.deviceErrorService = error;
      this._view.showErrorDeviceService = !error.ok;
    });
  }

  deleteDevice(id: number): void {
    swal.fire(deviceWarning).then((action: SweetAlertResult) => {
      if (action.isConfirmed) {
        this.deviceService.deleteDevice(id, RequestAction.delete).subscribe(response => {
          if (response.status === HttpStatusCode.Ok) {
            swal.fire(deviceDeleted);
            this._view.readAll();
          }
        });
      }
    });
  }

  showModalWithDeviceData(rate: DeviceDto): void {
    this._view.showErrorDeviceService = false;
    this.deviceService.getDeviceById(rate.id).subscribe(response => {
      this._view.formDevice.patchValue(response.body);
      this._view.isEditDevice = true;
      this._view.devices = response.body;
    });
  }
}

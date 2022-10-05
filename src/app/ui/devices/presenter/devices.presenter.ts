import { Injectable } from "@angular/core";
import { CreateDevice, DeviceDto } from "@domain/devices/devices.dto";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { DeviceInteractor } from "../interactor/devices.interactor";
import { DeviceInteractorOutput } from "../interactor/devices.interactor.output";
import { DevicePresenterInput } from "./devices.presenter.input";
import { DevicePresenterOutput } from "./devices.presenter.output";

@Injectable()
export class DevicePresenter implements DevicePresenterInput, DeviceInteractorOutput {
  private _view: DevicePresenterOutput;

  constructor(private _interactor: DeviceInteractor) {
    this._interactor.setPresenter(this);
  }

  public setView(component: DevicePresenterOutput): void {
    this._view = component;
    this._interactor.setView(component);
  }

  readAll(requestBody: IFilterRequestBody): void {
    this._interactor.readAll(requestBody);
  }

  showModalDeviceWithData(device: Required<DeviceDto>): void {
    this._interactor.showModalWithDeviceData(device);
  }

  createDevice(formDevice: CreateDevice): void {
    this._interactor.createDevice(formDevice);
  }

  updateDevice(id: number, formDevice: Required<DeviceDto>): void {
    this._interactor.updateDevice(id, formDevice);
  }

  deleteDevice(id: number): void {
    this._interactor.deleteDevice(id);
  }
}

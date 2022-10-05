import { CorePresenter } from "@core/view/core.view";
import { CreateDevice, GetDevice, UpdateDevice } from "@domain/devices/devices.dto";
import { IFilterRequestBody } from "@domain/http/request.body.dto";

export interface DevicePresenterInput extends CorePresenter {
  readAll(requestBody: IFilterRequestBody): void
  createDevice(formDevice: CreateDevice): void
  showModalDeviceWithData(rate: GetDevice): void;
  updateDevice(id: number, formRate: UpdateDevice): void;
  deleteDevice(id: number): void;
}

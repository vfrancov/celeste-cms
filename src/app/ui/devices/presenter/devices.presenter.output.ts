import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup } from "@angular/forms";
import { IModalComponent } from "@domain/companies/IModalComponent";
import { DeviceDto } from "@domain/devices/devices.dto";
import { IFilterRequestBody } from "@domain/http/request.body.dto";
import { UserPermissions } from "@domain/shared/menu.dto";

export interface DevicePresenterOutput {
  modalCreateAndEditDevice: IModalComponent;
  deviceData: DeviceDto[];
  userPermissions: UserPermissions;
  requestBody: IFilterRequestBody;
  formDevice: FormGroup;
  showErrorDeviceService: boolean;
  deviceErrorService: HttpErrorResponse;
  devices: DeviceDto;
  isEditDevice: boolean;
  isDescOrAsc: boolean;
  amountOfRows: number;
  amountOfPages: number;
  readAll(): void;
}

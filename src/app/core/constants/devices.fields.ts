import { Validators } from "@angular/forms";
import { DeviceFields } from "@core/validators/devices.validators";

export const deviceFields: DeviceFields = {
  companyId: ['', [Validators.required]],
  deviceName: ['', [Validators.required]],
  codeDevice: ['', [Validators.required]],
  expireLicenseDate: ['', [Validators.required]],
  statusDevice: ['', [Validators.required]]
}

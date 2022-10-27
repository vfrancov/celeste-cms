import { Validators } from "@angular/forms";
import { DeviceFields } from "@core/validators/devices.validators";

export const deviceFields: DeviceFields = {
  companyId: ['', [Validators.required]],
  name: ['', [Validators.required]],
  code: ['', [Validators.required]],
  expireLicenseDate: ['', [Validators.required]],
  statusId: ['', [Validators.required]]
}

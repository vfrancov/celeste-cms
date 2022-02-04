import { Validators } from "@angular/forms";
import { ZoneFields } from "@core/validators/zoneform.validators";

export const zoneFields: ZoneFields = {
  name: ['', [Validators.required]],
  companyId: [0, Validators.required]
}

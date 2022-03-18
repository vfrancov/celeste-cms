import { Validators } from "@angular/forms";
import { FloorFields } from "@core/validators/floors.validators";

export const floorFields: FloorFields = {
  name: ['', [Validators.required]],
  appZoneId: [0, Validators.required]
}

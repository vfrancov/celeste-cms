import { Validators } from "@angular/forms";
import { RatesFields } from "@core/validators/rates.validators";

export const ratesFields: RatesFields = {
  concept: ['', [Validators.required]],
  value: [0, Validators.required]
}

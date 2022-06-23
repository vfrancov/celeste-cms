import { Validators } from "@angular/forms";
import { SubNoveltieFormFields } from "@domain/subnoveltie/subnoveltie.dto";

export const subNoveltieFields: SubNoveltieFormFields = {
    companyId: [null, [Validators.required]],
    name: [null, [Validators.required]]
}

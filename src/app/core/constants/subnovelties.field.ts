import { Validators } from "@angular/forms";
import { SubNoveltieFormFields } from "@domain/subnoveltie/subnoveltie.dto";

export const subNoveltieFields: SubNoveltieFormFields = {
    companyId: [0, [Validators.required]],
    name: ['', [Validators.required]]
}
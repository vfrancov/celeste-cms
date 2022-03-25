import { Validators } from "@angular/forms";
import { SubNoveltieFormFields } from "@domain/dto/subnoveltie.dto";

export const subNoveltieFields: SubNoveltieFormFields = {
    companyId: [0, [Validators.required]],
    name: ['', [Validators.required]]
}
import { Validators } from "@angular/forms";
import { NoveltiesFormFields } from "@domain/dto/novelty.dto";


export const NoveltieFields: NoveltiesFormFields = {
  id: [0],
  name: ['', [Validators.required, Validators.minLength(3)]],
  typeNoveltyId: [0, Validators.required],
  companyId: [0, Validators.required],
  fileName: ['', Validators.required]
}

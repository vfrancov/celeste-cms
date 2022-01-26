import { Validators } from "@angular/forms";
import { CreateCompanieForm } from "@core/validators/companies.validators";

export const CompaniesField: CreateCompanieForm = {
  id: [0],
  name: ['', [Validators.required, Validators.min(2)]],
  nit: ['', [Validators.required, Validators.min(3)]],
  email: ['', [Validators.required, Validators.email]],
  address: ['', Validators.required],
  phoneNumber: ['', Validators.required],
  statusId: [0]
}

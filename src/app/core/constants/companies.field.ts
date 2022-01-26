import { Validators } from "@angular/forms";
import { CreateCompanieForm } from "@core/validators/companies.validators";

export const CompaniesField: CreateCompanieForm = {
  id: [0],
  name: ['', Validators.required],
  nit: ['', Validators.required],
  email: ['', Validators.required],
  address: ['', Validators.required],
  phoneNumber: ['', Validators.required],
  statusId: [0]
}

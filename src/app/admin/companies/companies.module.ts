import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { CompaniesPageComponent } from './companies.component';
import { empresasRoute } from "./companies.routing";

@NgModule({
  declarations: [CompaniesPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(empresasRoute)
  ]
})
export class EmpresasModule { }

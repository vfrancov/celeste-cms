import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CompanieProvider } from "@domain/providers/companies.provider";
import { DataTableModule } from "@shared/customs/data-table/datatable.module";
import { SharedModule } from "@shared/shared.module";
import { CompaniesPageComponent } from './companies.component';
import { empresasRoute } from "./companies.routing";

@NgModule({
  declarations: [CompaniesPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    RouterModule.forChild(empresasRoute)
  ],
  providers: [CompanieProvider]
})
export class EmpresasModule { }

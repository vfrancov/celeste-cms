import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CompanieProvider } from "@domain/companies/companies.provider";
import { DataTableModule } from "@shared/customs/data-table/datatable.module";
import { SharedModule } from "@shared/shared.module";
import { CompaniesPageComponent } from './view/companies.component';
import { empresasRoute } from "./companies.routing";
import { CompaniePresenter } from "./presenter/companie.presenter";
import { CompanieInteractor } from "./interactor/companie.interactor";

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
  providers: [
    CompanieProvider,
    CompanieInteractor,
    { provide: 'CompaniePresenterInput', useClass: CompaniePresenter }
  ]
})
export class EmpresasModule { }

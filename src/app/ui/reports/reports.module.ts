import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { reportsRoute } from './reports.routing';
import { SharedModule } from '@shared/shared.module';
import { ReportsPageComponent } from './reports.component';
import { ReportServices } from '@core/services/reports.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from '@shared/customs/data-table/datatable.module';

@NgModule({
  declarations: [ReportsPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    RouterModule.forChild(reportsRoute)
  ],
  providers: [ReportServices]
})
export class ReportsModule { }

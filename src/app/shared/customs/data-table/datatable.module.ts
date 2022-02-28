import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { DataTableTemplateDirective } from '@core/directives/datatable.directive';
import { DataFilterComponent } from './data-filter/data-filter.component';

@NgModule({
  declarations: [
    DataTableComponent,
    DataFilterComponent,
    DataTableTemplateDirective
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    DataTableComponent,
    DataFilterComponent,
    DataTableTemplateDirective
  ]
})
export class DataTableModule { }

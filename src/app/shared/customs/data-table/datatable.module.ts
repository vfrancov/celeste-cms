import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { DataTableTemplateDirective } from '@core/directives/datatable.directive';

@NgModule({
  declarations: [
    DataTableComponent,
    DataTableTemplateDirective
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    DataTableComponent,
    DataTableTemplateDirective
  ]
})
export class DataTableModule { }

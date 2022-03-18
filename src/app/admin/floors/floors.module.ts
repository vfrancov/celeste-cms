import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { SharedModule } from '@shared/shared.module';
import { floorsRoute } from './floors.routing';
import { FloorsPageComponent } from './floors.component';
import { DataTableModule } from '@shared/customs/data-table/datatable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloorProvider } from '@domain/providers/floor.provider';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FloorsPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(floorsRoute)
  ],
  providers: [FloorProvider]
})
export class FloorsModule { }

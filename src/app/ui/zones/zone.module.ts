import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ZoneProvider } from '@domain/zone/zone.provider';
import { DataTableModule } from '@shared/customs/data-table/datatable.module';
import { SharedModule } from '@shared/shared.module';
import { ZonePageComponent } from './zone.component';
import { zoneRoutes } from './zone.routing';

@NgModule({
  declarations: [ZonePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    RouterModule.forChild(zoneRoutes)
  ],
  providers: [ZoneProvider]
})
export class ZoneModule { }

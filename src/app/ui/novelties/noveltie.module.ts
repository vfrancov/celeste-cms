import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoveltieProvider } from '@domain/noveltie/noveltie.provider';
import { SubNoveltieProvider } from '@domain/subnoveltie/subnoveltie.provider';
import { DataTableModule } from '@shared/customs/data-table/datatable.module';
import { SharedModule } from "@shared/shared.module";
import { NoveltiePageComponent } from './noveltie.component';
import { noveltieRoutes } from './noveltie.routing';

@NgModule({
  declarations: [NoveltiePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    RouterModule.forChild(noveltieRoutes)
  ],
  providers: [NoveltieProvider, SubNoveltieProvider]
})
export class NoveltieModule { }

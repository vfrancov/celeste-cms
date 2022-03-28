import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NoveltiePageComponent } from './noveltie.component';
import { noveltieRoutes } from './noveltie.routing';
import { CommonModule } from '@angular/common';
import { NoveltieProvider } from '@domain/noveltie/noveltie.provider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from '@shared/customs/data-table/datatable.module';
import { SubNoveltieProvider } from '@domain/subnoveltie/subnoveltie.provider';
import { SharedModule } from "@shared/shared.module";

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

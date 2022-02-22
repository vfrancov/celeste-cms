import { SharedModule } from './../../shared/shared.module';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NoveltiePageComponent } from './noveltie.component';
import { noveltieRoutes } from './noveltie.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [NoveltiePageComponent],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(noveltieRoutes)
    ]
})
export class NoveltieModule { }

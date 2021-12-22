import { SharedModule } from './../../shared/shared.module';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { NoveltiePageComponent } from './noveltie.component';
import { noveltieRoutes } from './noveltie.routing';

@NgModule({
    declarations: [NoveltiePageComponent],
    imports: [
        SharedModule,
        RouterModule.forChild(noveltieRoutes)
    ]
})
export class NoveltieModule { }
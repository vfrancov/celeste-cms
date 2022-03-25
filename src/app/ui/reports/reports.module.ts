import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { reportsRoute } from './reports.routing';
import { SharedModule } from '@shared/shared.module';
import { ReportsPageComponent } from './reports.component';

@NgModule({
  declarations: [ReportsPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(reportsRoute)
  ]
})
export class ReportsModule { }

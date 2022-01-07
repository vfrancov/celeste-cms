import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { SharedModule } from '@shared/shared.module';
import { floorsRoute } from './floors.routing';
import { FloorsPageComponent } from './floors.component';

@NgModule({
  declarations: [FloorsPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(floorsRoute)
  ]
})
export class FloorsModule { }

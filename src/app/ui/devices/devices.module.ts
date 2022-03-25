import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { SharedModule } from '@shared/shared.module';
import { DevicesPageComponent } from './devices.component';
import { devicesRoute } from './devices.routing';

@NgModule({
  declarations: [DevicesPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(devicesRoute)
  ]
})
export class DevicesModule { }

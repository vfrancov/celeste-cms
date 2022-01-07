import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ZonePageComponent } from './zone.component';
import { zoneRoutes } from './zone.routing';

@NgModule({
  declarations: [ZonePageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(zoneRoutes)
  ]
})
export class ZoneModule { }

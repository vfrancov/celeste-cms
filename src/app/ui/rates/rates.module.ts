import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { RatePageComponent } from './rates.component';
import { ratesRoutes } from './rates.routing';

@NgModule({
  declarations: [RatePageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(ratesRoutes)
  ]
})
export class RateModule { }

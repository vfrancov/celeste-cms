import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { SubnoveltiesPageComponent } from './subnovelties.component';
import { subnoveltiesRoutes } from './subnovelties.routing';

@NgModule({
  declarations: [SubnoveltiesPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(subnoveltiesRoutes)
  ]
})
export class SubnoveltiesModule { }

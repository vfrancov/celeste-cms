import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { SharedModule } from '@shared/shared.module';
import { graphicsRoute } from './graphics.routing';
import { GraphicsPageComponent } from './graphics.component';

@NgModule({
  declarations: [GraphicsPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(graphicsRoute)
  ]
})
export class GraphicsModule { }

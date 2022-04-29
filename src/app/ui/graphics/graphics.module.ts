import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { SharedModule } from '@shared/shared.module';
import { graphicsRoute } from './graphics.routing';
import { GraphicsPageComponent } from './graphics.component';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

@NgModule({
  declarations: [GraphicsPageComponent],
  imports: [
    SharedModule,
    NvD3Module,
    RouterModule.forChild(graphicsRoute)
  ]
})
export class GraphicsModule { }

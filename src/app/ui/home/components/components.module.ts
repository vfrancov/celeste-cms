import { NgModule } from "@angular/core";
import { DashboardProvider } from "@domain/dashboard/dashboard.provider";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';

@NgModule({
  declarations: [DashboardComponent],
  imports: [NvD3Module],
  exports: [DashboardComponent],
  providers: [DashboardProvider]
})
export class DashboardComponentsModule { }

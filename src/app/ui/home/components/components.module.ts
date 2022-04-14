import { NgModule } from "@angular/core";
import { DashboardProvider } from "@domain/dashboard/dashboard.provider";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  providers: [DashboardProvider]
})
export class DashboardComponentsModule { }

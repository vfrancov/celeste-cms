import { NgModule } from "@angular/core";
import { DashboardProvider } from "@domain/dashboard/dashboard.provider";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [DashboardComponent],
  imports: [],
  exports: [DashboardComponent],
  providers: [DashboardProvider]
})
export class DashboardComponentsModule { }

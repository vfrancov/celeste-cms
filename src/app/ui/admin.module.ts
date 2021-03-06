import { DashboardComponentsModule } from './home/components/components.module';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { AdminRoute } from "./admin.routing";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardComponentsModule,
    RouterModule.forChild(AdminRoute)
  ]
})
export class AdminModule { }

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PagesModule } from "../shared/pages/pages.module";
import { AdminRoute } from "./admin.routing";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoute),
    PagesModule
  ]
})
export class AdminModule { }

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { BillingPageComponent } from "./billing.component";
import { billingRoutes } from "./billing.routing";

@NgModule({
  declarations: [BillingPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(billingRoutes)
  ]
})
export class BillingModule { }

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BillingProvider } from "@domain/billing/billing.provider";
import { DataTableModule } from "@shared/customs/data-table/datatable.module";
import { SharedModule } from "@shared/shared.module";
import { BillingPageComponent } from "./billing.component";
import { billingRoutes } from "./billing.routing";

@NgModule({
  declarations: [BillingPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    RouterModule.forChild(billingRoutes)
  ],
  providers : [BillingProvider]
})
export class BillingModule { }

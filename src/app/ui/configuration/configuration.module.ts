import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ConfigurationService } from "@core/services/configuration.service";
import { UserProvider } from "@domain/user/users.provider";
import { DataTableModule } from "@shared/customs/data-table/datatable.module";
import { SharedModule } from "@shared/shared.module";
import { ConfigurationPageComponent } from "./configuration.component";
import { configurationRoute } from "./configuration.routing";

@NgModule({
  declarations: [ConfigurationPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(configurationRoute)
  ],
  providers: [UserProvider, ConfigurationService]
})
export class ConfigurationModule { }

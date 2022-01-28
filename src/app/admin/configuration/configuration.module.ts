import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { ConfigurationPageComponent } from "./configuration.component";
import { configurationRoute } from "./configuration.routing";

@NgModule({
  declarations: [ConfigurationPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(configurationRoute)
  ]
})
export class ConfigurationModule { }

import { NgModule } from "@angular/core";
import { services } from ".";

@NgModule({
  providers: [...services],
  exports: []
})
export class ServicesModule { }

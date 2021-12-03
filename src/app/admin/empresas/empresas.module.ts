import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EmpresasPageComponent } from "./empresas.component";
import { empresasRoute } from "./empresas.routing";

@NgModule({
  declarations: [EmpresasPageComponent],
  imports: [
    RouterModule.forChild(empresasRoute)
  ]
})
export class EmpresasModule { }

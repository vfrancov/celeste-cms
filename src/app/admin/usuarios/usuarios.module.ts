import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsuariosPageComponent } from "./usuarios.component";
import { usuariosRoute } from "./usuarios.routing";

@NgModule({
  declarations: [UsuariosPageComponent],
  imports: [
    RouterModule.forChild(usuariosRoute)
  ]
})
export class UsuariosModule { }

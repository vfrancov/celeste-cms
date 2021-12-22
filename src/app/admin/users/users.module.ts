import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { UsersPageComponent } from "./users.component";
import { usuariosRoute } from "./users.routing";

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(usuariosRoute)
  ]
})
export class UsuariosModule { }

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { UserProvider } from "@domain/providers/users.provider";
import { DataTableModule } from "@shared/customs/data-table/datatable.module";
import { SharedModule } from "@shared/shared.module";
import { UsersPageComponent } from "./users.component";
import { usuariosRoute } from "./users.routing";

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(usuariosRoute)
  ],
  providers: [UserProvider]
})
export class UsuariosModule { }

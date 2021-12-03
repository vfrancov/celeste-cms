import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { authRoute } from "./auth.routing";
import { AuthLoginComponent } from "./login/login.component";
import { AuthService } from "./service/auth.service";

@NgModule({
  declarations: [AuthLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoute)
  ],
  providers: [AuthService]
})
export class AuthModule { }

import { AuthProvider } from '../domain/auth/auth.provider';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { authRoute } from "./auth.routing";
import { AuthLoginComponent } from "./login/login.component";
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [AuthLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(authRoute)
  ],
  providers: [AuthProvider]
})
export class AuthModule { }

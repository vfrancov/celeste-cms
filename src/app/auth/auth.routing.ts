import { Routes } from "@angular/router";
import { ChangePasswordViewComponent } from "./change-password/view/change-password.component";
import { AuthLoginComponent } from "./login/login.component";
import { RecoveryViewComponent } from "./recovery/view/recovery.component";

export const authRoute: Routes = [
  { path: '', component: AuthLoginComponent, data: { title: 'Celeste CMS' } },
  { path: 'recovery', component: RecoveryViewComponent, data: { title: 'Recupera tu contraseña' } },
  { path: 'change-password', component: ChangePasswordViewComponent, data: { title: 'Cambia tu Contraseña' } }
];

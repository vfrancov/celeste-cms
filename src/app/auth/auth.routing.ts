import { Routes } from "@angular/router";
import { AuthLoginComponent } from "./login/login.component";

export const authRoute: Routes = [
  { path: '', component: AuthLoginComponent, data: { title: 'Celeste CMS' } }
];

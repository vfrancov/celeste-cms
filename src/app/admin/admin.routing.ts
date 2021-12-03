import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const AdminRoute: Routes = [
  {
    path: 'admin/home',
    component: HomeComponent,
    children: [
      { path: '', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
      { path: '', loadChildren: () => import('./empresas/empresas.module').then(m => m.EmpresasModule) }
    ]
  }
]

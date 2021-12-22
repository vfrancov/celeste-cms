import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const AdminRoute: Routes = [
  {
    path: 'admin/home',
    component: HomeComponent,
    children: [
      { path: '', loadChildren: () => import('./users/users.module').then(m => m.UsuariosModule) },
      { path: '', loadChildren: () => import('./companies/companies.module').then(m => m.EmpresasModule) },
      { path: '', loadChildren: () => import('./novelties/noveltie.module').then(m => m.NoveltieModule) },
      { path: '', loadChildren: () => import('./parking/parking.module').then(m => m.ParkingModule) },
      { path: '', loadChildren: () => import('./zones/zone.module').then(m => m.ZoneModule) }
    ]
  }
]

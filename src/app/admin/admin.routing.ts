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
      { path: '', loadChildren: () => import('./zones/zone.module').then(m => m.ZoneModule) },
      { path: '', loadChildren: () => import('./devices/devices.module').then(m => m.DevicesModule) },
      { path: '', loadChildren: () => import('./floors/floors.module').then(m => m.FloorsModule) },
      { path: '', loadChildren: () => import('./graphics/graphics.module').then(m => m.GraphicsModule) },
      { path: '', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
      { path: '', loadChildren: () => import('./rates/rates.module').then(m => m.RateModule) },
      { path: '', loadChildren: () => import('./subnovelties/subnovelties.module').then(m => m.SubnoveltiesModule) }
    ]
  }
]

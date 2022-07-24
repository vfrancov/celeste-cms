import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ZoneProvider } from '@domain/zone/zone.provider';
import { DataTableModule } from '@shared/customs/data-table/datatable.module';
import { SharedModule } from '@shared/shared.module';
import { ZoneInteractor } from './interactor/zone.interactor';
import { ZonePresenter } from './presenter/zone.presenter';
import { ZonePageComponent } from './view/zone.component';
import { zoneRoutes } from './zone.routing';

@NgModule({
  declarations: [ZonePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataTableModule,
    SharedModule,
    RouterModule.forChild(zoneRoutes)
  ],
  providers: [
    ZoneProvider,
    { provide: 'zonePresenter', useClass: ZonePresenter },
    ZoneInteractor
  ]
})
export class ZoneModule { }

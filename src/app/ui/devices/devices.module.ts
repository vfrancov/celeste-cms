import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { SharedModule } from '@shared/shared.module';
import { devicesRoute } from './devices.routing';
import { DevicesPageComponent } from './views/devices.component';
import { DataTableModule } from '@shared/customs/data-table/datatable.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DeviceProvider } from '@domain/devices/devices.provider';
import { DevicePresenter } from './presenter/devices.presenter';
import { DeviceInteractor } from './interactor/devices.interactor';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DevicesPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    ReactiveFormsModule,
    RouterModule.forChild(devicesRoute)
  ],
  providers: [
    DeviceProvider,
    DeviceInteractor,
    { provide: 'DevicePresenter', useClass: DevicePresenter }
  ]
})
export class DevicesModule { }

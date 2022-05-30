import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { SharedModule } from '@shared/shared.module';
import { floorsRoute } from './floors.routing';
import { FloorsPageComponent } from './view/floors.component';
import { DataTableModule } from '@shared/customs/data-table/datatable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloorProvider } from '@domain/floor/floor.provider';
import { CommonModule } from '@angular/common';
import { FloorPresenter } from './presenter/floors.presenter';
import { FloorInteractor } from './interactor/floor.interactor';

@NgModule({
  declarations: [FloorsPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(floorsRoute)
  ],
  providers: [
    FloorProvider,
    { provide: 'FloorPresenterInput', useClass: FloorPresenter },
    FloorInteractor
  ]
})
export class FloorsModule { }

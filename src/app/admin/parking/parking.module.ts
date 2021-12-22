import { SharedModule } from './../../shared/shared.module';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ParkingPageComponent } from './parking.component';
import { parkingRoutes } from './parking.routing';

@NgModule({
    declarations: [ParkingPageComponent],
    imports: [
        SharedModule,
        RouterModule.forChild(parkingRoutes)
    ]
})
export class ParkingModule { }
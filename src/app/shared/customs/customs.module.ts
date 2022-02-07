import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertMessageComponent } from './alert/alert.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ModalComponent, AlertMessageComponent],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent, AlertMessageComponent]
})
export class CustomsModule { }

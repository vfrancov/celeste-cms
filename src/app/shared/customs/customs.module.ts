import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertMessageComponent } from './alert/alert.component';
import { ComboBoxComponent } from './combobox/combobox.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ModalComponent, AlertMessageComponent, ComboBoxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ModalComponent, AlertMessageComponent, ComboBoxComponent]
})
export class CustomsModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '@core/pipes/pipe.module';
import { AlertMessageComponent } from './alert/alert.component';
import { ComboBoxComponent } from './combobox/combobox.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    ModalComponent,
    AlertMessageComponent,
    ComboBoxComponent,
    ImageCropperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    ModalComponent,
    AlertMessageComponent,
    ComboBoxComponent,
    ImageCropperComponent]
})
export class CustomsModule { }

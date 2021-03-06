import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { IModalComponent } from "@domain/companies/IModalComponent";

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements IModalComponent {
  @ViewChild('buttonCloseModal') buttonModal: ElementRef;

  @Input() idModal: string;
  @Input() modalTitle: string;
  @Input() modalLarge: boolean = false;

  closeModal(): void {
    this.buttonModal.nativeElement.click();
  }
}

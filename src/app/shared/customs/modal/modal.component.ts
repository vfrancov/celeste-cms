import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @ViewChild('buttonCloseModal') buttonModal: ElementRef;

  @Input() idModal: string;
  @Input() modalTitle: string;
  @Input() modalLarge: boolean = false;

  closeModal(): void {
    this.buttonModal.nativeElement.click();
  }
}

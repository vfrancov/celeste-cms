import { Component, Input } from "@angular/core";

@Component({
  selector: 'modal-component',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() idModal: string;
  @Input() modalTitle: string;
  @Input() modalLarge: boolean = false;
}

import { Component, Input } from "@angular/core";

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent {
  @Input() title: string;
  @Input() export: boolean;
}

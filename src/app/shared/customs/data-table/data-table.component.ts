import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent {
  @Input() title: string;
  @Input() export: boolean;
  @Input() pages: number;
  @Input() rows: number;
  @Output() emitPage = new EventEmitter<number>();
  @Output() exportExcel = new EventEmitter<any>();

  setPage(page: number): void {
    this.emitPage.emit(page);
  }

  exportToExcel(): void {
    this.exportExcel.emit();
  }
}

import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html'
})
export class DataTableComponent {
  @Input() title: string;
  @Input() export: boolean;
  @Input() reload: boolean;
  @Input() pages: number;
  @Input() rows: number;
  @Input() pagination: boolean;
  @Output() emitPage = new EventEmitter<number>();
  @Output() exportExcel = new EventEmitter<any>();
  @Output() reloadGrid = new EventEmitter<any>();

  currentPage: number = 0;

  setPage(page: number): void {
    this.emitPage.emit(page);
    this.currentPage = page;
  }

  exportToExcel(): void {
    this.exportExcel.emit();
  }

  reloadTheGrid(): void {
    this.reloadGrid.emit();
  }

  previousPage(): void {
    this.currentPage--;
    if (this.currentPage <= 0) this.emitPage.emit(0);
    else this.emitPage.emit(this.currentPage);
  }

  nextPage(): void {
    this.currentPage++;
    if (this.currentPage === this.pages) return;
    else this.emitPage.emit(this.currentPage);
  }
}

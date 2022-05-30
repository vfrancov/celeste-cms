export abstract class CoreDataTable {
  public abstract sortDatatable(fieldToSort: string): void;
  public abstract applyFilter(fieldToSort: string): void;
  public abstract restoreFilter(page: number): void;
  public abstract selectedPage(page: number): void;
}

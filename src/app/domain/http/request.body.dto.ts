export interface IFilterRequestBody {
  offset: number,
  limit: number,
  sort: Array<sort>,
  filter: any,
  download: boolean,
  sortDatatable(fieldToSort: string, orderToSort: boolean): void,
  applyFilter(filter: any): void,
  restoreFilter(page: number): RequestBody,
  selectedPage(page: number): void
}

interface sort {
  field: string,
  dir: string,
}

export class RequestBody implements IFilterRequestBody {
  offset: number = 0;
  limit: number = 10;
  sort: sort[] = [{ field: 'Id', dir: 'desc' }];
  filter: any;
  download: boolean = false;

  sortDatatable(fieldToSort: string, orderToSort: boolean): void {
    this.sort[0].field = fieldToSort;
    this.sort[0].dir = (orderToSort) ? 'desc' : 'asc';
  }

  applyFilter(filter: any): void {
    this.filter = filter.filter;
  }

  restoreFilter(page: number): RequestBody {
    return this;
  }

  selectedPage(page: number): void {
    this.offset = page;
  }
}


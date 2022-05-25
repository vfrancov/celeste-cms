export interface IFilterRequestBody {
  offset: number,
  limit: number,
  sort: Array<sort>,
  filter: any
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
}


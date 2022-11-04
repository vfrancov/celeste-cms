export interface IResponseBody<T> {
  fileName: string,
  list: Array<T>,
  pages: number,
  records: number
}

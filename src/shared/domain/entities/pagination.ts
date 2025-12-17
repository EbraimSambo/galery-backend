export interface Pagination<T> {
  data: Array<T>;
  total: number;
  page: number;
  limit: number;
}

export interface PropsPagination {
  page: number;
  limit: number;
}

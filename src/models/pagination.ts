export type Pagination<T> = {
  first?: number;
  prev?: number | null;
  next?: number | null;
  last?: number;
  pages?: number;
  items?: number;
  data: T;
};

export type PaginationQuery = {
  page?: number;
  perPage?: number;
};

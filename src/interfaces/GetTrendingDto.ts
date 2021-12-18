import { Gif } from './Gif';

// TODO: Update pagination and meta
export interface GetTrendingDto {
  data: Gif[];
  pagination: Pagination;
  meta: {};
}

export interface Pagination {
  total_count: number;
  offset: number;
}

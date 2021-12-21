import { Gif } from './Gif';

export interface GetTrendingDto {
  data: Gif[];
  pagination: Pagination;
}

export interface Pagination {
  total_count: number;
  offset: number;
}

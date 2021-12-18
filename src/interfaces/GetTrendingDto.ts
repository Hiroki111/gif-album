import { Gif } from './Gif';

// TODO: Update pagination and meta
export interface GetTrendingDto {
  data: Gif[];
  pagination: {};
  meta: {};
}

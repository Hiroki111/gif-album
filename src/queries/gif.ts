import { useQuery, UseQueryResult } from 'react-query';

import restApi from '../network/restApi';
import { Gif } from '../interfaces/Gif';
import { GetTrendingDto } from '../interfaces/GetTrendingDto';

export enum gifQuery {
  fetchGifs = 'fetchGifs',
}

export function useFetchGifsQuery(offset?: number): UseQueryResult<Gif[]> {
  return useQuery(gifQuery.fetchGifs, () => restApi.fetchGifs(offset), {
    select: (trendingDto: GetTrendingDto) => trendingDto.data,
  });
}

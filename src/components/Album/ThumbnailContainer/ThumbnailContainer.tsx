import { Container, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import restApi, { GIFS_TRENDING_SIZE } from '../../../network/restApi';
import { ThumbnailGrid } from '../ThumbnailGrid';
import { useStyles } from './useStyles';
import { GetTrendingDto, Pagination } from '../../../interfaces/GetTrendingDto';
import { useAlbumContext } from '../../../contexts/AlbumContext';

export function ThumbnailContainer() {
  const classes = useStyles();
  const { searchKeyword, gifs, setGifs, nextGifIndex, setNextGifIndex } = useAlbumContext();
  const [isLoadingGifsFailed, setIsLoadingGifsFailed] = useState<boolean>(false);
  const [gifPagination, setGifPagination] = useState<Pagination>({
    total_count: Number.MAX_SAFE_INTEGER,
  } as Pagination);
  const dataLength = nextGifIndex === 0 ? 0 : nextGifIndex - 1;
  const hasMore = gifPagination?.total_count > gifPagination?.offset;

  useEffect(() => {
    fetchGifs();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function fetchGifs() {
    let getTrendingDto: GetTrendingDto;
    try {
      if (searchKeyword.length) {
        getTrendingDto = await restApi.fetchGifs(nextGifIndex, searchKeyword);
      } else {
        getTrendingDto = await restApi.fetchTrendingGifs(nextGifIndex);
      }

      const gifsSet = new Set([...gifs, ...getTrendingDto.data]);
      setGifs(Array.from(gifsSet));
      setNextGifIndex(nextGifIndex + GIFS_TRENDING_SIZE);
      setGifPagination(getTrendingDto.pagination);
    } catch (error) {
      setIsLoadingGifsFailed(true);
      alert('Internal error occurred');
    }
  }

  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={fetchGifs}
      hasMore={hasMore}
      loader={isLoadingGifsFailed ? null : <h4 className={classes.loading}>Loading...</h4>}
    >
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={4}>
          {gifs.map((gif, i) => (
            <ThumbnailGrid key={i} gif={gif} />
          ))}
        </Grid>
      </Container>
    </InfiniteScroll>
  );
}

import { Container, Grid } from '@material-ui/core';

import { useFetchGifsQuery } from '../../../queries/gif';
import { ThumbnailGrid } from '../ThumbnailGrid';
import { useStyles } from './useStyles';

export function ThumbnailContainer() {
  const classes = useStyles();
  const fetchGifsQuery = useFetchGifsQuery();
  const gifs = fetchGifsQuery.data || [];

  return (
    <Container maxWidth="md" className={classes.container}>
      <Grid container spacing={4}>
        {gifs.map((gif) => (
          <ThumbnailGrid key={gif.id} gif={gif} />
        ))}
      </Grid>
    </Container>
  );
}

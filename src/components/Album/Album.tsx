import { AppBar, Container, Grid, Toolbar, Typography } from '@material-ui/core';

import { useFetchGifsQuery } from '../../queries/gif';
import { ThumbnailGrid } from './ThumbnailGrid';
import { useStyles } from './useStyles';

export function Album() {
  const classes = useStyles();

  const fetchGifsQuery = useFetchGifsQuery();
  const gifs = fetchGifsQuery.data || [];

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Gif Album
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={4}>
          {gifs.map((gif) => (
            <ThumbnailGrid key={gif.id} gif={gif} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

import { Card, CardMedia, Grid } from '@material-ui/core';
import { useAlbumContext } from '../../../contexts/AlbumContext';

import { Gif } from '../../../interfaces/Gif';
import { useStyles } from './useStyles';

interface Props {
  gif: Gif;
}

export function ThumbnailGrid({ gif }: Props) {
  const classes = useStyles();
  const { setGif } = useAlbumContext();

  return (
    <Grid item key={gif.id} xs={12} sm={6} md={4}>
      <Card className={classes.gifCard}>
        <CardMedia
          className={classes.thumbnail}
          image={gif.images.downsized_still.url}
          title={gif.title}
          onClick={() => setGif(gif)}
        />
      </Card>
    </Grid>
  );
}

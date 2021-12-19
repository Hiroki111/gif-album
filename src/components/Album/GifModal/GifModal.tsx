import { Modal, Fade, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { useAlbumContext } from '../../../contexts/AlbumContext';
import { useStyles } from './useStyles';

export function GifModal() {
  const classes = useStyles();
  const { gif, setGif } = useAlbumContext();

  if (!gif) {
    return null;
  }

  return (
    <Modal className={classes.root} open={!!gif} onClose={() => setGif(null)} closeAfterTransition>
      <Fade in={!!gif}>
        <Grid container direction="column" className={classes.contentWrapper}>
          <Grid container item justifyContent="flex-end" className={classes.closeIconWrapper}>
            <CloseIcon className={classes.closeIcon} onClick={() => setGif(null)} />
          </Grid>
          <img
            src={gif.images.original.url}
            alt={gif.title}
            height={gif.images.original.height}
            width={gif.images.original.width}
          />
        </Grid>
      </Fade>
    </Modal>
  );
}

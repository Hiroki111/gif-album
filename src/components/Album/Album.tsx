import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { GifModal } from './GifModal';
import { ThumbnailContainer } from './ThumbnailContainer';
import { useStyles } from './useStyles';

export function Album() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <ThumbnailContainer />
      <GifModal />
      <Footer />
    </div>
  );
}

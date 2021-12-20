import { useEffect } from 'react';

import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { GifModal } from './GifModal';
import { ThumbnailContainer } from './ThumbnailContainer';
import { useStyles } from './useStyles';

export function Album() {
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener('beforeunload', scrollToTop);
    return () => {
      window.removeEventListener('beforeunload', scrollToTop);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className={classes.root}>
      <NavBar />
      <ThumbnailContainer />
      <GifModal />
      <Footer />
    </div>
  );
}

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import { Footer } from './Footer';
import { ThumbnailContainer } from './ThumbnailContainer';
import { useStyles } from './useStyles';

export function Album() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Gif Album
          </Typography>
        </Toolbar>
      </AppBar>
      <ThumbnailContainer />
      <Footer />
    </div>
  );
}

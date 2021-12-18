import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ThumbnailContainer } from './ThumbnailContainer';

export function Album() {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Gif Album
          </Typography>
        </Toolbar>
      </AppBar>
      <ThumbnailContainer />
    </>
  );
}

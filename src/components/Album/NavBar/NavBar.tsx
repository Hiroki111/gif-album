import { AppBar, IconButton, InputBase, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './useStyles';
import { GetTrendingDto } from '../../../interfaces/GetTrendingDto';
import restApi from '../../../network/restApi';
import { useAlbumContext } from '../../../contexts/AlbumContext';

export function NavBar() {
  const classes = useStyles();
  const { setGifs, searchKeyword, setSearchKeyword } = useAlbumContext();

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key !== 'Enter') {
      return;
    }

    updateGifs();
  }

  async function updateGifs() {
    window.scrollTo(0, 0);

    let getTrendingDto: GetTrendingDto;
    try {
      if (searchKeyword.length) {
        getTrendingDto = await restApi.fetchGifs(0, searchKeyword);
      } else {
        getTrendingDto = await restApi.fetchTrendingGifs(0);
      }

      setGifs(getTrendingDto.data);
    } catch (error) {
      alert('Internal error occurred');
    }
  }

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap>
          Gif Album
        </Typography>
        <div className={classes.search} data-testid="search-box" onKeyDown={handleKeyDown}>
          <IconButton className={classes.iconButton} onClick={updateGifs} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

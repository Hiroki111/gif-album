import { CssBaseline } from '@material-ui/core';
import { AlbumContextProvider } from '../contexts/AlbumContext';

import { Album } from './Album';

export function App() {
  return (
    <AlbumContextProvider>
      <CssBaseline />
      <Album />
    </AlbumContextProvider>
  );
}

import React, { createContext, useState } from 'react';

import { Gif } from '../interfaces/Gif';

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface AlbumContextInterface {
  gif: Gif | null;
  setGif: (gif: Gif | null) => void;
}

export const AlbumContext = createContext<AlbumContextInterface | undefined>(undefined);

export function AlbumContextProvider({ children }: Props) {
  const [gif, setGif] = useState<Gif | null>(null);

  const contextValue: AlbumContextInterface = { gif, setGif };

  return <AlbumContext.Provider value={contextValue}>{children}</AlbumContext.Provider>;
}

export function useAlbumContext() {
  const context = React.useContext(AlbumContext);
  if (context === undefined) {
    throw new Error('useAlbumContext must be used within AlbumContextProvider');
  }
  return context;
}

import React, { createContext, useState } from 'react';

import { Gif } from '../interfaces/Gif';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export interface AlbumContextInterface {
  gif: Gif | null;
  gifs: Gif[];
  searchKeyword: string;
  nextGifIndex: number;
  setGif: (gif: Gif | null) => void;
  setGifs: (gifs: Gif[]) => void;
  setSearchKeyword: (searchKeyword: string) => void;
  setNextGifIndex: (index: number) => void;
}

export const AlbumContext = createContext<AlbumContextInterface | undefined>(undefined);

export function AlbumContextProvider({ children }: Props) {
  const [gif, setGif] = useState<Gif | null>(null);
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [nextGifIndex, setNextGifIndex] = useState<number>(0);

  const contextValue: AlbumContextInterface = {
    gif,
    gifs,
    searchKeyword,
    nextGifIndex,
    setGif,
    setGifs,
    setSearchKeyword,
    setNextGifIndex,
  };

  return <AlbumContext.Provider value={contextValue}>{children}</AlbumContext.Provider>;
}

export function useAlbumContext() {
  const context = React.useContext(AlbumContext);
  if (context === undefined) {
    throw new Error('useAlbumContext must be used within AlbumContextProvider');
  }
  return context;
}

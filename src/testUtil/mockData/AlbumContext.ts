import { AlbumContextInterface } from '../../contexts/AlbumContext';

export const mockAlbumContextValue: AlbumContextInterface = {
  gif: null,
  gifs: [],
  searchKeyword: '',
  nextGifIndex: 0,
  setGif: jest.fn(),
  setGifs: jest.fn(),
  setSearchKeyword: jest.fn(),
  setNextGifIndex: jest.fn(),
};

export function createMockAlbumContextValue(params?: Partial<AlbumContextInterface>) {
  return { ...mockAlbumContextValue, ...params };
}

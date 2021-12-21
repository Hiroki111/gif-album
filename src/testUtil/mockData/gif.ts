import { Gif } from '../../interfaces/Gif';

export const mockGif: Gif = {
  id: 'a',
  title: 'mock-gif',
  images: {
    original: {
      height: '400',
      width: '400',
      url: 'https://giphy.com/gifs/original-mock',
    },
    downsized_still: {
      height: '300',
      width: '300',
      url: 'https://giphy.com/gifs/downsized-still-mock',
    },
  },
};

export function createMockGif(params?: Partial<Gif>) {
  return { ...mockGif, ...params };
}

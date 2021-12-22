import { Gif, Mp4Rendition, Rendition, WebpRendition } from '../../interfaces/Gif';

const mockImage = { height: '400', width: '400' };
const mockRendition: Rendition = { ...mockImage, url: 'https://giphy.com/gifs/mock-rendition' };
const mockMp4Rendition: Mp4Rendition = { ...mockImage, mp4: 'https://giphy.com/gifs/mock-mp4-rendition' };
const mockWebpRendition: WebpRendition = { ...mockImage, webp: 'https://giphy.com/gifs/mock-webp-rendition' };

export const mockGif: Gif = {
  id: 'id',
  title: 'mock-gif',
  images: {
    original: { ...mockRendition, ...mockMp4Rendition, ...mockWebpRendition },
    downsized: { ...mockRendition },
    downsized_large: { ...mockRendition },
    downsized_medium: { ...mockRendition },
    downsized_small: { ...mockMp4Rendition },
    downsized_still: { ...mockRendition },
    fixed_height: { ...mockRendition, ...mockMp4Rendition, ...mockWebpRendition },
    fixed_height_downsampled: { ...mockRendition, ...mockWebpRendition },
    fixed_height_small: { ...mockRendition, ...mockMp4Rendition, ...mockWebpRendition },
    fixed_height_small_still: { ...mockRendition },
    fixed_height_still: { ...mockRendition },
    fixed_width: { ...mockRendition, ...mockMp4Rendition, ...mockWebpRendition },
    fixed_width_downsampled: { ...mockRendition, ...mockWebpRendition },
    fixed_width_small: { ...mockRendition, ...mockMp4Rendition, ...mockWebpRendition },
    fixed_width_small_still: { ...mockRendition },
    fixed_width_still: { ...mockRendition },
    looping: { ...mockMp4Rendition },
    original_still: { ...mockRendition },
    original_mp4: { ...mockMp4Rendition },
    preview: { ...mockMp4Rendition },
    preview_gif: { ...mockRendition },
    preview_webp: { ...mockRendition },
    '480w_still': { ...mockRendition },
  },
};

export function createMockGif(params?: Partial<Gif>) {
  return { ...mockGif, ...params };
}

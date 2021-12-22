export interface Gif {
  id: string;
  title: string;
  images: Images;
}

export interface Images {
  original: Rendition & Mp4Rendition & WebpRendition;
  downsized: Rendition;
  downsized_large: Rendition;
  downsized_medium: Rendition;
  downsized_small: Mp4Rendition;
  downsized_still: Rendition;
  fixed_height: Rendition & Mp4Rendition & WebpRendition;
  fixed_height_downsampled: Rendition & WebpRendition;
  fixed_height_small: Rendition & Mp4Rendition & WebpRendition;
  fixed_height_small_still: Rendition;
  fixed_height_still: Rendition;
  fixed_width: Rendition & Mp4Rendition & WebpRendition;
  fixed_width_downsampled: Rendition & WebpRendition;
  fixed_width_small: Rendition & Mp4Rendition & WebpRendition;
  fixed_width_small_still: Rendition;
  fixed_width_still: Rendition;
  looping: Mp4Rendition;
  original_still: Rendition;
  original_mp4: Mp4Rendition;
  preview: Mp4Rendition;
  preview_gif: Rendition;
  preview_webp: Rendition;
  '480w_still': Rendition;
}

export type ImageType = keyof Images;

export interface Rendition {
  height: string;
  width: string;
  url: string;
}

export interface Mp4Rendition {
  height: string;
  width: string;
  mp4: string;
}

export interface WebpRendition {
  height: string;
  width: string;
  webp: string;
}

export type RenditionKey = 'gif' | 'mp4' | 'webp';

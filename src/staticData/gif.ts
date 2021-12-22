import { ImageType, RenditionKey } from '../interfaces/Gif';

export const IMAGE_TYPES = [
  'original',
  'downsized',
  'downsized_large',
  'downsized_medium',
  'downsized_small',
  'downsized_still',
  'fixed_height',
  'fixed_height_downsampled',
  'fixed_height_small',
  'fixed_height_small_still',
  'fixed_height_still',
  'fixed_width',
  'fixed_width_downsampled',
  'fixed_width_small',
  'fixed_width_small_still',
  'fixed_width_still',
  'looping',
  'original_still',
  'original_mp4',
  'preview',
  'preview_gif',
  'preview_webp',
  '480w_still',
] as ImageType[];

export const RENDITION_NAMES = ['gif', 'mp4', 'webp'] as RenditionKey[];

export const MP4_ONLY_IMAGE_TYPE_SET = new Set(['downsized_small', 'looping', 'preview']) as Set<ImageType>;

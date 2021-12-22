import { RenditionKey } from '../../../../interfaces/Gif';

export interface Props {
  renditionName: RenditionKey;
  src: string;
  title: string;
  height: string;
  width: string;
}

export function GifPlayer({ renditionName, src, title, height, width }: Props) {
  if (renditionName === 'mp4') {
    return (
      <video data-testid="gif-player-video" controls autoPlay loop>
        <source data-testid="gif-player-source" src={src} type="video/mp4" height={height} width={width} />
      </video>
    );
  }

  return <img src={src} alt={title} height={height} width={width} />;
}

import { cleanup, render, screen } from '@testing-library/react';

import { GifPlayer, Props } from '../GifPlayer';
import { AlbumContextInterface, AlbumContext } from '../../../../../contexts/AlbumContext';
import { createMockAlbumContextValue } from '../../../../../testUtil/mockData/AlbumContext';

describe('GifPlayer', () => {
  function renderGifPlayer(props: Props, contextValue: AlbumContextInterface) {
    return render(
      <AlbumContext.Provider value={contextValue}>
        <GifPlayer {...props} />
      </AlbumContext.Provider>,
    );
  }

  const baseProps = {
    renditionName: 'gif',
    src: 'https://example.gif',
    title: 'mock gif',
    height: '100',
    width: '100',
  } as Props;

  it('should render video and source if an mp4 file is provided', () => {
    const props = { ...baseProps, renditionName: 'mp4' } as Props;
    renderGifPlayer(props, createMockAlbumContextValue());

    expect(screen.getByTestId('gif-player-video')).toBeInTheDocument();
    expect(screen.getByTestId('gif-player-source')).toBeInTheDocument();
  });

  it('should render img if a gif or webp file is provided', () => {
    let props = { ...baseProps, renditionName: 'gif' } as Props;
    renderGifPlayer(props, createMockAlbumContextValue());
    expect(screen.getByRole('img')).toBeInTheDocument();

    cleanup();

    props = { ...baseProps, renditionName: 'webp' } as Props;
    renderGifPlayer(props, createMockAlbumContextValue());
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});

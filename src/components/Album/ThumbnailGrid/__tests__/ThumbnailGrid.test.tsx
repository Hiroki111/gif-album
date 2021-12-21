import { fireEvent, render, waitFor } from '@testing-library/react';

import { ThumbnailGrid } from '../ThumbnailGrid';
import { AlbumContextInterface, AlbumContext } from '../../../../contexts/AlbumContext';
import { Gif } from '../../../../interfaces/Gif';
import { createMockAlbumContextValue } from '../../../../testUtil/mockData/AlbumContext';
import { createMockGif } from '../../../../testUtil/mockData/gif';

describe('ThumbnailGrid', () => {
  function renderThumbnailGrid(gif: Gif, contextValue: AlbumContextInterface) {
    return render(
      <AlbumContext.Provider value={contextValue}>
        <ThumbnailGrid gif={gif} />
      </AlbumContext.Provider>,
    );
  }

  it('should display the downsized still image of the provided gif', () => {
    const gif = createMockGif();
    gif.images.original.url = 'https://original';
    gif.images.downsized_still.url = 'https://downsized_still';

    const { getByTestId } = renderThumbnailGrid(gif, createMockAlbumContextValue());
    const thumbnailDiv = getByTestId('thumbnail-div');

    expect(thumbnailDiv).toHaveStyle('background-image: url(https://downsized_still)');
  });

  it('should set a gif into the album context if the user clicks the thumbnail', async () => {
    const setGif = jest.fn();
    const contextValue = createMockAlbumContextValue({ setGif });
    const mockGif = createMockGif();

    const { getByTestId } = renderThumbnailGrid(mockGif, contextValue);
    const thumbnailDiv = getByTestId('thumbnail-div');
    fireEvent.click(thumbnailDiv);

    await waitFor(() => expect(setGif).toHaveBeenCalledWith(mockGif));
  });
});

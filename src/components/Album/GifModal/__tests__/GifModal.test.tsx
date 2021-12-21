import { render } from '@testing-library/react';

import { GifModal } from '../GifModal';
import { AlbumContextInterface, AlbumContext } from '../../../../contexts/AlbumContext';
import { createMockAlbumContextValue } from '../../../../testUtil/mockData/AlbumContext';
import { createMockGif, mockGif } from '../../../../testUtil/mockData/gif';

describe('GifModal.tsx', () => {
  function renderGifModal(contextValue: AlbumContextInterface) {
    return render(
      <AlbumContext.Provider value={contextValue}>
        <GifModal />
      </AlbumContext.Provider>,
    );
  }

  it('should render null if no gif object is provided', () => {
    const contextValue = createMockAlbumContextValue({ gif: null });
    const { container } = renderGifModal(contextValue);

    expect(container.innerHTML).toHaveLength(0);
  });

  it("should display the selected gif's original URL", () => {
    const contextValue = createMockAlbumContextValue({
      gif: createMockGif({
        images: {
          ...mockGif.images,
          original: {
            ...mockGif.images.original,
            url: 'https://expected-url',
          },
        },
      }),
    });
    const { getByRole } = renderGifModal(contextValue);
    const image = getByRole('img');

    expect(image).toHaveAttribute('src', 'https://expected-url');
  });
});

import { render, waitFor } from '@testing-library/react';
import { ThumbnailContainer } from '..';
import { AlbumContextInterface, AlbumContext } from '../../../../contexts/AlbumContext';
import { createMockAlbumContextValue } from '../../../../testUtil/mockData/AlbumContext';
import { createMockGif } from '../../../../testUtil/mockData/gif';

jest.mock('../../../../network/restApi', () => ({
  fetchTrendingGifs: jest.fn(),
  fetchGifs: jest.fn(),
}));

// NOTE: It's not tested if this component fetches gifs while scrolling as @testing-library/react doesn't support layout.
// Find an alternative tool to simulate scrolling.
describe('ThumbnailContainer', () => {
  const restApi = require('../../../../network/restApi');
  const mockGifA = createMockGif({ id: 'mock-gif-a' });
  const mockGifB = createMockGif({ id: 'mock-gif-b' });
  const mockGifC = createMockGif({ id: 'mock-gif-c' });
  const mockGifD = createMockGif({ id: 'mock-gif-d' });
  window.scrollTo = jest.fn().mockImplementation(() => true);
  window.alert = jest.fn().mockImplementation(() => true);

  function renderThumbnailContainer(contextValue: AlbumContextInterface) {
    return render(
      <AlbumContext.Provider value={contextValue}>
        <ThumbnailContainer />
      </AlbumContext.Provider>,
    );
  }

  it('should fetch trending gifs when the search keyword is empty, and set the gif list', async () => {
    const setGifs = jest.fn();
    const contextValue = createMockAlbumContextValue({
      gifs: [mockGifA, mockGifB],
      searchKeyword: '',
      nextGifIndex: 5,
      setGifs,
    });
    restApi.fetchTrendingGifs.mockImplementation(() => ({
      data: [mockGifB, mockGifC, mockGifD],
      pagination: { total_count: 10, offset: 6 },
    }));
    renderThumbnailContainer(contextValue);

    await waitFor(() => {
      expect(restApi.fetchTrendingGifs).toHaveBeenCalledWith(5);
      expect(setGifs).toHaveBeenCalledWith([mockGifA, mockGifB, mockGifC, mockGifD]);
    });
  });

  it('should fetch gifs with the search keyword, and set the gif list', async () => {
    const setGifs = jest.fn();
    const contextValue = createMockAlbumContextValue({
      gifs: [mockGifA, mockGifB],
      nextGifIndex: 1,
      searchKeyword: 'apple',
      setGifs,
    });
    restApi.fetchGifs.mockImplementation(() => ({
      data: [mockGifB, mockGifC, mockGifD],
      pagination: { total_count: 10, offset: 6 },
    }));
    renderThumbnailContainer(contextValue);

    await waitFor(() => {
      expect(restApi.fetchGifs).toHaveBeenCalledWith(1, 'apple');
      expect(setGifs).toHaveBeenCalledWith([mockGifA, mockGifB, mockGifC, mockGifD]);
    });
  });
});

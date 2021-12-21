import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { NavBar } from '../NavBar';
import { AlbumContextInterface, AlbumContext } from '../../../../contexts/AlbumContext';
import { createMockAlbumContextValue } from '../../../../testUtil/mockData/AlbumContext';

jest.mock('../../../../network/restApi', () => ({
  fetchTrendingGifs: jest.fn(),
  fetchGifs: jest.fn(),
}));

describe('NavBar', () => {
  const restApi = require('../../../../network/restApi');
  window.scrollTo = jest.fn();
  window.alert = jest.fn();

  function renderNavBar(contextValue: AlbumContextInterface) {
    return render(
      <AlbumContext.Provider value={contextValue}>
        <NavBar />
      </AlbumContext.Provider>,
    );
  }

  it('should fetch trending gifs when the search icon is clicked while the search keyword is empty', async () => {
    const contextValue = createMockAlbumContextValue({ searchKeyword: '' });
    renderNavBar(contextValue);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => expect(restApi.fetchTrendingGifs).toHaveBeenCalledWith(0));
  });

  it('should fetch gifs with the search keyword when the search icon is clicked', async () => {
    const contextValue = createMockAlbumContextValue({ searchKeyword: 'dog' });
    renderNavBar(contextValue);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await waitFor(() => expect(restApi.fetchGifs).toHaveBeenCalledWith(0, 'dog'));
  });

  it('should fetch gifs with the search keyword when key down even is fired on the search box', async () => {
    const contextValue = createMockAlbumContextValue({ searchKeyword: 'dog' });
    renderNavBar(contextValue);

    const searchBox = screen.getByTestId('search-box');
    fireEvent.keyDown(searchBox, { key: 'Enter' });

    await waitFor(() => expect(restApi.fetchGifs).toHaveBeenCalledWith(0, 'dog'));
  });
});

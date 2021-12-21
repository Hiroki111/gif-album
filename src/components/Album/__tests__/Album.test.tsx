import { render } from '@testing-library/react';

import { Album } from '../Album';
import { AlbumContext } from '../../../contexts/AlbumContext';
import { createMockAlbumContextValue } from '../../../testUtil/mockData/AlbumContext';

describe('Album', () => {
  function renderAlbum() {
    return render(
      <AlbumContext.Provider value={createMockAlbumContextValue()}>
        <Album />
      </AlbumContext.Provider>,
    );
  }

  it('should scroll the browser to the top when this component is unloaded', () => {
    const scrollTo = jest.fn();
    window.scrollTo = scrollTo;

    const mapDomEventToCallback = {} as { [event: string]: any };
    window.addEventListener = jest.fn().mockImplementation((event, callback) => {
      mapDomEventToCallback[event] = callback;
    });

    renderAlbum();
    mapDomEventToCallback['beforeunload']();

    expect(scrollTo).toHaveBeenCalledWith(0, 0);
  });
});

import { GetTrendingDto } from '../interfaces/GetTrendingDto';

const restApi = {
  // TODO: replace new Promise with actual data
  fetchGifs: async function (): Promise<GetTrendingDto> {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            data: [{ id: 'test', title: 'Test Gif obj' }],
            pagination: {},
            meta: {},
          }),
        500,
      ),
    );
  },
};

export default restApi;

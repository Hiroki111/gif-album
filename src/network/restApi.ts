import axios, { AxiosResponse } from 'axios';

import { GetTrendingDto } from '../interfaces/GetTrendingDto';

const GIFS_TRENDING_URL = 'https://api.giphy.com/v1/gifs/trending';
export const GIFS_TRENDING_SIZE = 50;
const GIFS_TRENDING_INITIAL_OFFSET = 0;

const restApi = {
  fetchGifs: async function (offset: number = GIFS_TRENDING_INITIAL_OFFSET): Promise<GetTrendingDto> {
    const res: AxiosResponse<GetTrendingDto> = await axios({
      method: 'GET',
      url: `${GIFS_TRENDING_URL}?api_key=${process.env.REACT_APP_GIPHY_APi_KEY}&limit=${GIFS_TRENDING_SIZE}&offset=${offset}`,
    });
    return res.data;
  },
};

export default restApi;

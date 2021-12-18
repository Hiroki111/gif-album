import axios, { AxiosResponse } from 'axios';

import { GetTrendingDto } from '../interfaces/GetTrendingDto';

const GIFS_TRENDING_URL = 'https://api.giphy.com/v1/gifs/trending';
const GIFS_TRENDING_SIZE = '30';

const restApi = {
  fetchGifs: async function (): Promise<GetTrendingDto> {
    const res: AxiosResponse<GetTrendingDto> = await axios({
      method: 'GET',
      url: `${GIFS_TRENDING_URL}?api_key=${process.env.REACT_APP_GIPHY_APi_KEY}&limit=${GIFS_TRENDING_SIZE}`,
    });
    return res.data;
  },
};

export default restApi;

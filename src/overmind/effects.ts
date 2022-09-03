import * as axios from 'axios';

export const api = {
  async fetchTickers(limit: number, searchValue?: string) {
    let response: any;
    try {
      response = await axios.get(
        `https://api.polygon.io/v3/reference/tickers?${
          searchValue !== '' ? `search=${searchValue}&` : ''
        }active=true&sort=ticker&order=asc&limit=${limit}&apiKey=P7FmkQEtx3oxbcjnh6rwa1kFZF0MQPCC`
      );
      if (response.data.status !== 'OK') {
        return null;
      } else {
        return response.data.results;
      }
    } catch (error) {}
  },
};

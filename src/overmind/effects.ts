import { default as axios } from 'axios';

export const api = {
  async fetchTickers(limit: number, searchValue?: string) {
    try {
      const response = await axios.get(
        `https://api.polygon.io/v3/reference/tickers?${
          searchValue !== '' ? `search=${searchValue}&` : ''
        }active=true&sort=ticker&order=asc&limit=${limit}&apiKey=${process.env.API_KEY}`
      );
      if (response.data.status !== 'OK') {
        return null;
      } else {
        return response.data.results;
      }
    } catch (error) {}
  },

  async fetchStockStatistics(ticker: string) {
    try {
      const response = await axios.get(
        `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${process.env.API_KEY}`
      );
      if (response.data.status !== 'OK') {
        return null;
      } else {
        return response.data;
      }
    } catch (error) {}
  },

  async fetchStockDetails(ticker: string) {
    try {
      const response = await axios.get(
        `https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${process.env.API_KEY}`
      );
      if (response.data.status !== 'OK') {
        return null;
      } else {
        return response.data.results;
      }
    } catch (error) {}
  },

  async fetchStockLogo(image: string) {
    try {
      let response: any;
      response = await fetch(`${image}?apiKey=${process.env.API_KEY}`);
      if (response.status !== 200) {
        return null;
      } else {
        return response;
      }
    } catch (error) {}
  },
};

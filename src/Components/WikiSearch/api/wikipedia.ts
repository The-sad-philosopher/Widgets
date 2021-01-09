import axios from 'axios';

export const baseUrl = 'https://en.wikipedia.org';

export const search = async (searchTerm: string) => {
  const { data } = await axios.get(`${baseUrl}/w/api.php`, {
    params: {
      action: 'query',
      list: 'search',
      origin: '*',
      format: 'json',
      srsearch: searchTerm,
    },
  });
  return data.query.search;
};

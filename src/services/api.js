import axios from 'axios';

const API_KEY = '22260748-a59a05f5e0764077e9ef5e0aa';
const BASE_URL = 'https://pixabay.com/api/';

const fetchApi = (SearchParam, page) => {
  const SearchParams = new URLSearchParams({
    q: SearchParam,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  return axios.get(`${BASE_URL}?${SearchParams}`);
};

export default { fetchApi };

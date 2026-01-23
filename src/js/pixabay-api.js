import axios from 'axios';

const API_KEY = '54212177-5339591b3f1ced8f604dc8066';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  };

  console.log('ENV KEY =', API_KEY); // тимчасово для дебагу

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}

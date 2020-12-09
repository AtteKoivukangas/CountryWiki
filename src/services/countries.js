import axios from 'axios';
const baseUrl = 'https://restcountries.eu/rest/v2';

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/all`);
  return response.data;
};

const countryService = {
  getAll
};

export default countryService;
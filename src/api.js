import axios from 'axios';
const baseURL = 'https://restcountries.eu/rest/v2';

export default axios.create({ baseURL });
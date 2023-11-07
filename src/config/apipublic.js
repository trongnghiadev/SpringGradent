
import axios from 'axios';
const LOCALHOST='http://localhost:5454'

export const API_BASE_URL = LOCALHOST

const apipublic = axios.create({
  baseURL: API_BASE_URL,
});


apipublic.defaults.headers.post['Content-Type'] = 'application/json';

export default apipublic;
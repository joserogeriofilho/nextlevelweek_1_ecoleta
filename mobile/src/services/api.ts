import axios from 'axios';

let LOCAL_IP = 'http://999.999.999.999';

const api = axios.create({
  baseURL: `${LOCAL_IP}:3333`
});

export default api;
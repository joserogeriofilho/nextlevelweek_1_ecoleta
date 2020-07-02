import axios from 'axios';

let LOCAL_IP = 'http://192.168.100.8';

const api = axios.create({
  baseURL: `${LOCAL_IP}:3333`
});

export default api;
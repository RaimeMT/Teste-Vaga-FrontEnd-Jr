import axios from 'axios';
import environment from '../environments/environment';
import { error } from 'console';

const api = axios.create({baseURL: environment.API_URL});

api?.interceptors.request.use(
  async (config: any) => {
    try{
      return {
        ...config,
        headers: {
          ...config.headers,
          'Access-Control-Allow-Origin': 'http://localhost:3000/',
          'Access-Control-Allow-Credentials': true,
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        },
      };
    } catch(e){
      return config;
    }
  },
  (error) => Promise.reject(error),
);

api?.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default api;
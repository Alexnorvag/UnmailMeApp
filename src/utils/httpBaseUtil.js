import axios from 'axios';

import {API_URL, JWT_TOKEN} from '../config';
import {getValue} from './storageUtil';

export const httpBase = () => {
  const api = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-XSRF-TOKEN': getValue(JWT_TOKEN),
    },
    responseType: 'json',
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  return api;
};

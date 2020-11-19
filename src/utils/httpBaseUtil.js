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
      // const originalRequest = error.config;
      // console.log('[HTTP] -> originalRequest: ', originalRequest);
      // if (
      //   error.response &&
      //   error.response.status == 401 &&
      //   !originalRequest._retry &&
      //   !originalRequest.headers._retry
      // ) {
      //   console.log('LOG_status_401_error', '-> refreshing now ');
      //   originalRequest._retry = true;
      // }
      return Promise.resolve(error);
    },
  );

  return api;
};

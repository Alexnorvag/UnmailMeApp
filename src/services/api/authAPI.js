import {API} from '../api';

export const authAPI = {
  login: async () => {
    console.log('/login');
    return await API.get('/login');
  },
  logout: async () => {
    console.log('/logout');
    return await API.get('/logout');
  },
};

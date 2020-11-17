import {API} from '../api';

export default {
  login: async () => {
    try {
      const response = await API.get('')
    } catch (error) {
      throw error;
    }
  },
  logout: async () => {
    console.log('/logout');
    return await API.get('/logout');
  },
};

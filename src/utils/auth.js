import {authAPI} from '../services/api';

export const login = async ({username, password, rememberMe}) => {
  // post to auth/login
  // set token to storage
  // return something to authSlice
};

export const logout = async () => {
  // remove token from storage
};

import {signin} from '../services/auth';

export const login = async ({email, password}) => {
  // post to auth/login
  const {token, user} = signin({email, password});

  // set token to storage
  console.log('[SIGNIN] -> token: ', token);
  console.log('[SIGNIN] -> user: ', user);
  
  // return something to authSlice
  return {toke, user};
};

export const logout = async () => {
  // remove token from storage
};

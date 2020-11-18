import {fetch, store, update, destroy} from '../utils/httpUtil';

export const signin = async ({email, password}) => {
  const response = await store('auth/login', {email, password});
  return {token, user};
};

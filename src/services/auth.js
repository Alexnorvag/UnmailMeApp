import {store} from '../utils/httpUtil';

export const signin = async ({email, password}) => {
  try {
    const res = await store('api/login', {
      email: 'peter@klaven',
      // password: 'cityslicka',
    });
    console.log('res: ', res.data);
    // const res = await store('auth/login', {email, password});
    const {token} = res.data;

    return {token};
  } catch (error) {
    console.log('[ERROR] response:', error.response);
    console.log('[ERROR] request:', error.request);
    console.log('[ERROR]:', error);
    throw new Error(`😱 login request failed: ${error}`);
  }
};

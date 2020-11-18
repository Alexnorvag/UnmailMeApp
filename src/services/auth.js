import {store} from '../utils/httpUtil';

export const signin = async ({email, password}) => {
  try {
    const res = await store('auth/login', {email, password});
    const {
      token = 'token78vd10nu918jn3oybvg63b34',
      user = {id: 1, email: 'test@email.com'},
    } = res.data;
    console.log('service token: ', token)
    console.log('service user: ', user)
    return {token, user};
  } catch (error) {
    console.log(`😱 login request failed: ${error}`);
  }
};

import {signin} from '../services';

export default {
  login: async ({email, password}) => {
    console.log('[SIGNIN] -> {email, password}: ', {email, password});
    // post to auth/login
    const {token} = await signin({email, password});

    // set token to storage
    console.log('[SIGNIN] -> token: ', token);

    // return something to authSlice
    return {token, email};
  },
  logout: async () => {
    // remove token from storage
  },
};

// export const login = async ({email, password}) => {
//   // post to auth/login
//   const {token, user} = signin({email, password});

//   // set token to storage
//   console.log('[SIGNIN] -> token: ', token);
//   console.log('[SIGNIN] -> user: ', user);

//   // return something to authSlice
//   return {toke, user};
// };

// export const logout = async () => {
//   // remove token from storage
// };

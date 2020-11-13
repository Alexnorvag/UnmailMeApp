import {nanoid} from '@reduxjs/toolkit';
import {NETWORK_LATENCY} from '../../constants';

export function signin({email, password}, apiContext = {}) {
  console.log('[SIGN IN]: ', {email, password});
  return {token: 'sah13h1iu4r', email};
}

export function signout(apiContext = {}) {
  console.log('[SIGN OUT]');
  return {};
}

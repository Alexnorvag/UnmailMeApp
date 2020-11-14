import {Platform} from 'react-native';

export const isAndroid = Platform.OS === 'android' ? true : false;

export const API_URL = 'https://change-api-link/';
export const NETWORK_LATENCY = 2163;

export const APP_STATE = {
  PUBLIC: 'PUBLICK_LOGIN',
  PRIVATE: 'MAIN_APP',
  AUTH: 'CHECKING_LOGIN',
  UNKNOWN: 'UNKNOWN',
};

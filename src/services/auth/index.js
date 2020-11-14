import AsyncStorage from '@react-native-async-storage/async-storage';

import {signin, signout} from '../api';

export const auth = {
  isAuthenticated,
};

const isAuthenticated = () => {
  return !!getToken();
};

const getToken = async () => {
    return await AsyncStorage.getItem('userToken');
}

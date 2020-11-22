import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {TouchableOpacity, Text, View} from 'react-native';

import {logout} from '../../features/signin/signinSlice';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={{backgroundColor: '#fff'}}>
      <TouchableOpacity
        style={{margin: 30}}
        onPress={() => {
          dispatch(logout());
        }}>
        <Icon name="menu" size={30} style={{color: 'black'}} />
      </TouchableOpacity>
      <Text>Home</Text>
    </View>
  );
};

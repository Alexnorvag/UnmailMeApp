import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {logout} from '../../features/signin/signinSlice';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={{backgroundColor: '#fff'}}>
      <TouchableOpacity
        style={{margin: 30, backgroundColor: 'purple'}}
        onPress={() => {
          dispatch(logout());
        }}>
        <Text style={{marginVertical: 20, color: '#fff'}}>Text</Text>
      </TouchableOpacity>
      <Text>Home</Text>
    </View>
  );
};

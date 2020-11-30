import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        <Text>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Unmail')}>
        <Text>Unmail</Text>
      </TouchableOpacity>
    </View>
  );
};

import React from 'react';
import {Button, Text, View} from 'react-native';

export const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

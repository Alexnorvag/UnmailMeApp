import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, CameraScreen} from '../screens';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </>
  );
};

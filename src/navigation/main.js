import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {IntroScreen, HomeScreen, CameraScreen, UnmailScren} from '../screens';
import {navigationStyles} from '../styles';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <>
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{
          headerLeft: null,
        }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen
        name="Unmail"
        component={UnmailScren}
        options={{
          headerTitle: null,
          headerStyle: {
            backgroundColor: '#771F85',
            ...navigationStyles.headerStyle,
          },
        }}
      />
    </>
  );
};

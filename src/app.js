import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {HomeScreen, LoginScreen} from './screens';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Login"
        // headerMode="screen"
        screenOptions={{
          title: 'UnMailMe',
          headerLeft: null,
          headerStyle: {
            borderWidth: 0,
            shadowColor: '#fff',
            borderBottomColor: '#fff'
          }
        }}>
        {/* <Stack.Navigator initialRouteName="Login" headerMode='screen'> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#c0c',
    paddingTop: getStatusBarHeight(),
  },
});

export default App;

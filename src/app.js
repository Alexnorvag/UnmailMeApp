import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import {createStackNavigator} from '@react-navigation/stack';
// import {getStatusBarHeight} from 'react-native-status-bar-height';

import {HomeScreen, LoginScreen} from './screens';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#c0c',
    // paddingTop: getStatusBarHeight(),
  },
});

export default App;

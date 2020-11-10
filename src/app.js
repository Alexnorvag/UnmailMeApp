import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {HomeScreen, LoginScreen} from './screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          headerMode="float"
          screenOptions={{
            title: 'UnMailMe',
            headerLeft: null,
            headerStyle: {
              elevation: 0,
              // borderWidth: 0,
              // shadowColor: '#fff',
              // borderBottomColor: '#fff',
            },
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    // backgroundColor: '#c0c',
    // paddingTop: getStatusBarHeight(),
  },
});

export default App;

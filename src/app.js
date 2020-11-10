import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {getStatusBarHeight} from 'react-native-status-bar-height';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {HomeScreen, LoginScreen} from './screens';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Login"
          headerMode="float"
          screenOptions={{
            title: 'UnMailMe',
            // headerTitle: <Text style={{fontStyle: 'italic', fontWeight: '100'}}>UnMailMe</Text>,
            headerLeft: null,
            headerStyle: {
              elevation: 0,
              shadowColor: '#fff',
            },
            headerTitleStyle: {
              fontWeight: '300',
              fontStyle: 'italic',
              fontFamily: 'Roboto-Thin',
              color: 'rgba(0, 0, 0, 0.82)',
              // fontSize: 13
            },
            headerTitleAlign: 'center',
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

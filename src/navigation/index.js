import React from 'react';
import {StyleSheet} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigatorHeader} from '../components';
import {HomeScreen, LoginScreen} from '../screens';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Login"
          headerMode="float"
          screenOptions={{
            headerTitle: () => <NavigatorHeader />,
            headerLeft: null,
            headerStyle: rootNavigationStyles.headerStyle,
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const rootNavigationStyles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowColor: '#fff',
  },
});

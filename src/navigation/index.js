import React, {useEffect} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {NavigatorHeader} from '../components';
import {navigationStyles} from '../styles';
import {LoginStack} from './login';
import {MainStack} from './main';
import {checkAuth} from '../features/signin/signinSlice';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const Stack = createStackNavigator();

export const RootNavigation = () => {
  const dispatch = useDispatch();
  const isAuthed = useSelector((state) => state.signin.isAuthed);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerTitle: () => (
              <NavigatorHeader styles={navigationStyles.headerTitle} />
            ),
            headerLeft: null,
            headerStyle: navigationStyles.headerStyle,
            headerTitleAlign: 'center',
          }}>
          {isAuthed ? MainStack() : LoginStack()}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

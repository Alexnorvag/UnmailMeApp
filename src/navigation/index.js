import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';

import {HeaderMenu, HeaderTitle} from '../components';
import {navigationStyles} from '../styles';
import {LoginStack} from './login';
import {MainStack} from './main';
import {checkAuth} from '../features/signin/signinSlice';
import DefaultTheme from '../themes';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  const dispatch = useDispatch();
  const isAuthed = useSelector((state) => state.signin.isAuthed);

  useEffect(() => {
    console.log('check auth');
    dispatch(checkAuth());
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DefaultTheme}>
        <Stack.Navigator
          headerMode="float"
          screenOptions={{
            headerTitle: () => (
              <HeaderTitle styles={navigationStyles.headerTitle} />
            ),
            headerStyle: navigationStyles.headerStyle,
            headerTitleContainerStyle:
              navigationStyles.headerTitleContainerStyle,
            headerLeft: () => (
              <HeaderMenu styles={navigationStyles.headerMenu} />
            ),
            headerTitleAlign: 'center',
          }}>
          {isAuthed ? MainStack() : LoginStack()}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

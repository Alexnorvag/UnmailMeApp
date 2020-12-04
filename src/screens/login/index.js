import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from 'react-native-gesture-handler';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useDispatch} from 'react-redux';

import {viewStyles} from '../../styles';
import {loginSchema} from '../../validation';
import {login} from '../../features/signin/signinSlice';

export const LoginScreen = () => {
  const [isSecure, setIsSecure] = useState(true);
  const [secureIcon, setSecureIcon] = useState('eye');

  const inputElementRef = useRef(null);

  const dispatch = useDispatch();

  const changePasswordVisibility = () => {
    setSecureIcon(isSecure ? 'eye' : 'eye-slash')
  };

  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: {
        fontFamily: 'Roboto-Regular',
      },
    });
  }, []);

  return (
    <View style={viewStyles.container}>
      <View style={styles.loginContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log(values);
            dispatch(login(values));
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={{flex: 1, width: '100%'}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-evenly',
                  // backgroundColor: 'violet',
                }}>
                <View>
                  <View>
                    <TextInput
                      autoCapitalize="none"
                      placeholder="Email"
                      style={viewStyles.input}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    <Text style={viewStyles.errorValidationText}>
                      {touched.email && errors.email}
                    </Text>
                  </View>
                  <View>
                    <TextInput
                      ref={inputElementRef}
                      autoCapitalize="none"
                      placeholder="Password"
                      style={viewStyles.input}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry={true}
                    />
                    <TouchableOpacity
                      style={styles.searchIcon}
                      onPress={changePasswordVisibility}>
                      <Icon name={secureIcon} size={24} color="#000" />
                    </TouchableOpacity>
                    <Text style={viewStyles.errorValidationText}>
                      {touched.password && errors.password}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={[viewStyles.button, viewStyles.buttonMagical]}
                  onPress={handleSubmit}>
                  <Text style={viewStyles.buttonTextDefault}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: getStatusBarHeight(),
  },
  searchIcon: {
    position: 'absolute',
    top: 24,
    right: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

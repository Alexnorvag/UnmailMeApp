import React, {useState} from 'react';
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

  const dispatch = useDispatch();

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
              <View style={{flex: 1, justifyContent: 'space-evenly'}}>
                <View>
                  <View style={styles.searchSection}>
                    <TextInput
                      autoCapitalize="none"
                      placeholder="Email"
                      style={[viewStyles.input, styles.input]}
                      // style={viewStyles.input}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                    <Icon
                      style={styles.searchIcon}
                      name="eye"
                      size={20}
                      color="#000"
                    />
                  </View>

                  <Text style={viewStyles.errorValidationText}>
                    {touched.email && errors.email}
                  </Text>
                  <TextInput
                    autoCapitalize="none"
                    placeholder="Password"
                    style={viewStyles.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={true}
                  />
                  <Text style={viewStyles.errorValidationText}>
                    {touched.password && errors.password}
                  </Text>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginBottom: getStatusBarHeight(),
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
    // borderWidth: 0.5,
    // borderColor: '#000',
    height: 40,
    // borderRadius: 5,
    margin: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    // backgroundColor: '#fff',
    // color: '#424242',
  },
});

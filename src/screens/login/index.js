import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from 'react-native-gesture-handler';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useDispatch} from 'react-redux';

import {viewStyles} from '../../styles';
import {loginSchema} from '../../validation';
import {login} from '../../features/signin/signinSlice';

export const LoginScreen = ({navigation}) => {
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
            // navigation.navigate('Home')
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
                  <TextInput
                    autoCapitalize="none"
                    placeholder="Email"
                    style={[viewStyles.input]}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
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
                  />
                  <Text style={viewStyles.errorValidationText}>
                    {touched.password && errors.password}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={handleSubmit}>
                  <Text style={styles.submitButtonTitle}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
        {/* <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        /> */}
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
  submitButton: {
    backgroundColor: '#771f85',
    height: 50,
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
  },
  submitButtonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

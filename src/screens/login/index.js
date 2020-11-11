import React from 'react';
import {Button, View} from 'react-native';
import {Formik} from 'formik';
import {TextInput} from 'react-native-gesture-handler';

export const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

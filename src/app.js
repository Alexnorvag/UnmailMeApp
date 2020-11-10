import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {getStatusBarHeight} from 'react-native-status-bar-height';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Text>hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#c0c',
    paddingTop: getStatusBarHeight(),
  },
});

export default App;

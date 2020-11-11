import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

export const NavigatorHeader = () => {
  return <Text style={styles.headerTitle}>UnMailMe</Text>;
};

const styles = StyleSheet.create({
  headerTitle: {
    ...Platform.select({
      ios: {
        fontWeight: '300',
      },
      android: {
        fontFamily: 'Roboto-Light',
      },
    }),
    fontStyle: 'italic',
    color: 'rgba(0, 0, 0, 0.82)',
  },
});

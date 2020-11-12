import {StyleSheet, Platform} from 'react-native';

export const navigationStyles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowColor: '#fff',
  },
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

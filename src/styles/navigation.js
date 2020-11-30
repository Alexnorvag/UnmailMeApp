import {StyleSheet, Platform} from 'react-native';

export const navigationStyles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowColor: '#fff',
  },
  headerTitleContainerStyle: {
    height: '100%',
    // paddingTop: 10,
    // width: '50%'
  },
  headerMenu: {
    // marginTop: 10,
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#590866',
    borderRadius: 16,
    color: '#fff',
    overflow: 'hidden',
 
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
    // fontStyle: 'italic',
    color: 'rgba(0, 0, 0, 0.82)',
  },
});

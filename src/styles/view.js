import {StyleSheet} from 'react-native';

export const viewStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    fontSize: 18,
    padding: 15,
    marginVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#00000033',
  },
  errorValidationText: {
    color: '#ff0000',
    fontSize: 14,
    paddingLeft: 15,
    marginBottom: 10,
  },
  button: {
    height: 56,
    width: '60%',
    borderRadius: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonMagical: {
    backgroundColor: '#771f85',
  },
  buttonTextDefault: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  titleBold: {
    fontFamily: 'Roboto-Bold',
    fontSize: 27,
    textAlign: 'center',
    marginHorizontal: '15%',
  },
  description: {
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: '15%',
  },
  marginVerticalMedium: {
    marginTop: '2%',
    marginBottom: '1%',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
});

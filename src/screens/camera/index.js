import React, {useRef} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HeaderMenu} from '../../components';
import {viewStyles, cameraStyles, navigationStyles} from '../../styles';

export const CameraScreen = ({navigation}) => {
  // const {height, width} = Dimensions.get('window');
  // const maskRowHeight = Math.round((height - 300) / 20);
  // const maskColWidth = (width - 300) / 2;

  // console.log('height: ', height);
  // console.log('width: ', width);
  // console.log('maskRowHeight: ', maskRowHeight);
  // console.log('maskColWidth: ', maskColWidth);

  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = {quality: 0.5, base64: true};
      const data = await cameraRef.current.takePictureAsync(options);
      console.log('snap uri: ', data.uri);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        <BarcodeMask
          width={'70%'}
          height={'60%'}
          edgeColor={'#1E1E1E'}
          edgeBorderWidth={4}
          edgeWidth={70}
          edgeHeight={70}
          backgroundColor={'#ffffff08'}
          showAnimatedLine={false}
          outerMaskOpacity={0.8}
        />
      </RNCamera>

      <SafeAreaView
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          backgroundColor: 'red',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <HeaderMenu
            styles={[
              navigationStyles.headerMenu,
              // {
              //   transform: [{rotate: '90deg'}],
              // },
            ]}
          />
          <Icon
            name="close"
            size={14}
            style={{
              color: '#fff',
              backgroundColor: '#000000',
              marginRight: '5%',
              padding: 10,
              borderRadius: 17,
              overflow: 'hidden',
              alignSelf: 'center',
            }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </SafeAreaView>
      <View
        style={{
          position: 'absolute',
          right: 0,
          top: '20%',
          width: '15%',
          height: '60%',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'yellow',
          }}>
          <Icon
            name="flash-on"
            size={22}
            style={{
              alignSelf: 'flex-start',
              color: '#fff',
              backgroundColor: '#590866',
              marginHorizontal: '15%',
              marginVertical: '10%',
              padding: 10,
              borderRadius: 21,
              overflow: 'hidden',
            }}
          />
          <Icon
            name="info"
            size={22}
            style={{
              alignSelf: 'flex-start',
              color: '#fff',
              backgroundColor: '#590866',
              marginHorizontal: '15%',
              marginVertical: '10%',
              padding: 10,
              borderRadius: 21,
              overflow: 'hidden',
            }}
          />
        </View>
      </View>

      <SafeAreaView
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'blue',
        }}>
        <TouchableOpacity
          onPress={takePicture}
          style={[viewStyles.button, viewStyles.buttonMagical]}>
          <Text style={viewStyles.buttonTextDefault}>Take Photo</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  absoluteContainer: {
    position: 'absolute',
    // backgroundColor: '#ffffff88',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  menu: {
    // flex: 1,
    // alignSelf: 'flex-start',
    backgroundColor: 'violet',
  },
  frame: {
    flex: 8,
    // backgroundColor: 'transparent',
  },
  cameraControls: {
    flex: 3,
    justifyContent: 'center',
    // backgroundColor: 'blue'
  },
  maskOutter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  maskInner: {
    width: 300,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
  maskFrame: {
    // backgroundColor: 'rgba(1,1,1,0.6)',
    backgroundColor: '#ffffff88',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: {flexDirection: 'row'},
});

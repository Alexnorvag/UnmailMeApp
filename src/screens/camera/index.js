import React, {useRef} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';

import {HeaderMenu} from '../../components';
import {viewStyles, cameraStyles, navigationStyles} from '../../styles';

export const CameraScreen = () => {
  const {height, width} = Dimensions.get('window');
  const maskRowHeight = Math.round((height - 300) / 20);
  const maskColWidth = (width - 300) / 2;

  console.log('height: ', height);
  console.log('width: ', width);
  console.log('maskRowHeight: ', maskRowHeight);
  console.log('maskColWidth: ', maskColWidth);

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
        }}
      />

      <View style={styles.maskOutter}>
        <View
          style={[{flex: maskRowHeight}, styles.maskRow, styles.maskFrame]}
        />
        <View style={[{flex: 30}, styles.maskCenter]}>
          <View style={[{width: maskColWidth}, styles.maskFrame]} />
          <View style={styles.maskInner} />
          <View style={[{width: maskColWidth}, styles.maskFrame]} />
        </View>
        <View
          style={[{flex: maskRowHeight}, styles.maskRow, styles.maskFrame]}
        />
      </View>

      <View style={cameraStyles.menuContainer}>
        <HeaderMenu styles={navigationStyles.headerMenu} />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 20
        }}>
        <TouchableOpacity
          onPress={takePicture}
          style={[viewStyles.button, viewStyles.buttonMagical]}>
          <Text style={viewStyles.buttonTextDefault}>Take Photo</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: {flexDirection: 'row'},
});

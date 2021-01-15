import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { pipe, withHandlers } from '@synvox/rehook'
import QRCodeScanner from 'react-native-qrcode-scanner'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: Dimensions.get('window').height,
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  containerStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraStyle: {
    width: '100%',
    height: '100%',
  },
})

const CameraScan = ({ isVisible, onScanQRSuccess }) => {
  if (!isVisible) {
    return null
  }
  return (
    <View style={styles.container}>
      <QRCodeScanner cameraStyle={styles.cameraStyle} onRead={onScanQRSuccess} containerStyle={styles.containerStyle} />
    </View>
  )
}

export default pipe(
  withHandlers({
    onScanQRSuccess: ({ onSuccess }) => (res) => {
      console.log('SUCCESS ==>', res)
      onSuccess(res)
    },
  }),
  CameraScan,
)

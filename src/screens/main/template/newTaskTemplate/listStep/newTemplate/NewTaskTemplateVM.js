import { pipe, withHandlers, withState, withProps } from '@synvox/rehook'
import { Platform, PermissionsAndroid } from 'react-native'
import GeoLocation from 'react-native-geolocation-service'
import NewTaskTemplate from './NewTaskTemplateV'

export default pipe(
  withProps(({ route }) => ({ currentStep: route?.params?.currentStep })),
  withState('isVisibleQRCode', 'updateVisibleQRCode', false),
  withState('geoLocation', 'updateGeoLocation', {}),
  withHandlers({
    getGeoLocation: ({ updateGeoLocation }) => async () => {
      let check = null
      if (Platform.OS === 'ios') {
        check = await GeoLocation.requestAuthorization('whenInUse')
      } else {
        check = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION)
      }
      if (check === PermissionsAndroid.RESULTS.GRANTED) {
        GeoLocation.getCurrentPosition(
          (response) => {
            // console.log('SUCCESS', response)
            updateGeoLocation({ latitude: response?.coords.latitude, longitude: response?.coords?.longitude })
          },
          (err) => {
            //
          },
          { forceRequestLocation: true },
        )
      }
    },
  }),
  withHandlers({
    onConfirmGoBack: ({ navigation }) => () => {
      navigation.navigate('PopUpStack', {
        screen: 'PopUpConfirm',
        params: {
          content: 'All changes will not be saved when you cancel this process',
          onPressConfirm: () => {
            navigation.goBack()
          },
        },
      })
    },
    onCreateStep: ({ navigation, route }) => (refForm) => () => {
      navigation.navigate('PopUpStack', {
        screen: 'PopUpConfirm',
        params: {
          content: 'Do you want to save this process',
          onPressConfirm: () => {
            route?.params?.callbackAddStep(refForm?.current?.values)
            navigation.goBack()
          },
        },
      })
    },
    onPressScanQRCode: ({ updateVisibleQRCode, getGeoLocation }) => () => {
      updateVisibleQRCode(true)
      getGeoLocation()
    },
    onCloseQRCode: ({ updateVisibleQRCode }) => () => {
      updateVisibleQRCode(false)
    },
    onScanQRCodeSuccess: ({ updateVisibleQRCode }) => (refForm) => (res) => {
      const { values, setValues } = refForm.current
      updateVisibleQRCode(false)
      setValues({
        ...values,
        EquiqmentInfo: {
          Description: 'This is Description of step after scan QRCode',
          Model: 'Demo-1102',
          SerialNumber: '1234ABC',
        },
      })
    },
  }),
  NewTaskTemplate,
)

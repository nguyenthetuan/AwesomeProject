import { pipe, withHandlers, withState, withProps, lifecycle } from '@synvox/rehook'
import { Platform, PermissionsAndroid } from 'react-native'
import GeoLocation from 'react-native-geolocation-service'
import NewTaskTemplate from './NewTaskTemplateV'
import _ from 'lodash'

let step = {
  Instruction: '',
  Description: '',
  EquiqmentInfo: {
    // ID: '',
    Description: '',
    Model: '',
    SerialNumber: '',
    // QR: '',
  },
  err: { Instruction: true, Description: true, descEquipment: true, modelEquipment: true, serialNo: true },
}

export default pipe(
  withProps(({ route }) => ({ currentStep: route?.params?.currentStep })),
  withState('isVisibleQRCode', 'updateVisibleQRCode', false),
  withState('geoLocation', 'updateGeoLocation', {}),
  withState('isActiveBtSave', 'updateActiveBtSave', false),
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
    onCreateStep: ({ navigation, route }) => () => {
      navigation.navigate('PopUpStack', {
        screen: 'PopUpConfirm',
        params: {
          content: 'Do you want to save this process',
          onPressConfirm: () => {
            delete step.err
            route?.params?.callbackAddStep(step)
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
    onScanQRCodeSuccess: ({ updateVisibleQRCode }) => (res) => {
      console.log('SUCCESS dmcmcmcc===>', res)
      updateVisibleQRCode(false)
      step.EquiqmentInfo.Description = 'Description of Equipment'
      step.err.descEquipment = false
      step.EquiqmentInfo.Model = 'KIF-123'
      step.err.modelEquipment = false
      step.EquiqmentInfo.SerialNumber = '88883213'
      step.err.serialNo = false
    },
    onChangeText: ({ isActiveBtSave, updateActiveBtSave }) => (key) => (text) => {
      step.err[key] = text ? false : true
      switch (key) {
        case 'descEquipment':
          step.EquiqmentInfo.Description = text
          break
        case 'modelEquipment':
          step.EquiqmentInfo.Model = text
          break
        case 'serialNo':
          step.EquiqmentInfo.SerialNumber = text
          break
        default:
          step[key] = text
          break
      }
      let isActive = false
      _.forIn(step.err, (value) => {
        if (value) {
          return (isActive = false)
        }
        isActive = true
      })
      if (!isActive && isActiveBtSave) {
        updateActiveBtSave(false)
      }
      if (isActive && !isActiveBtSave) {
        updateActiveBtSave(true)
      }
    },
  }),
  lifecycle({
    componentDidMount() {},
    componentWillUnmount() {
      step = {
        Instruction: '',
        Description: '',
        EquiqmentInfo: {
          // ID: '',
          Description: '',
          Model: '',
          SerialNumber: '',
          // QR: '',
        },
        err: { Instruction: true, Description: true, descEquipment: true, modelEquipment: true, serialNo: true },
      }
    },
  }),
  NewTaskTemplate,
)

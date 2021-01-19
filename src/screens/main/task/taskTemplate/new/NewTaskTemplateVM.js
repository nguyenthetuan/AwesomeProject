import { pipe, withHandlers, withState, withProps } from '@synvox/rehook'
import { Platform, PermissionsAndroid } from 'react-native'
import GeoLocation from 'react-native-geolocation-service'
import NewTaskTemplate from './NewTaskTemplateV'
import _ from 'lodash'

const step = {
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
  withProps(({ numberStep }) => ({ numberStep: 1 })),
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
            console.log('SUCCESS', response)
            updateGeoLocation({ latitude: response?.coords.latitude, longitude: response?.coords?.longitude })
          },
          (err) => {
            console.log('ERROR ==>', err)
          },
          { forceRequestLocation: true },
        )
      }
    },
  }),
  withHandlers({
    onCreateStep: ({ navigation }) => () => {
      navigation.navigate('PopUpStack', {
        screen: 'PopUpConfirm',
        params: {
          content: 'All changes will not be saved when you cancel this process',
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
      console.log('RES ===>', res)
      updateVisibleQRCode(false)
      step.EquiqmentInfo.Description = 'Description of Equipment'
      step.err.descEquipment = false
      step.EquiqmentInfo.Model = 'KIF-123'
      step.err.modelEquipment = false
      step.EquiqmentInfo.SerialNumber = '88883213'
      step.err.serialNo = false
    },
    onChangeText: ({ isActiveBtSave, updateActiveBtSave }) => (key) => (text) => {
      console.log('INPUT ===>', { key, text })
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
  NewTaskTemplate,
)

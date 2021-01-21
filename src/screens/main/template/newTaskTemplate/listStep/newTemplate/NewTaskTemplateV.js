/* eslint-disable react/jsx-no-bind */
import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors } from 'src/assets'
import Header from 'src/screens/components/Header'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ScanQr from 'src/screens/components/ScanQr'
import styles from './Styles'
import { Formik } from 'formik'
import * as Yup from 'yup'
import _ from 'lodash'

const FormStep = Yup.object({
  Instruction: Yup.string().required(),
  Description: Yup.string().required(),
  EquiqmentInfo: Yup.object({
    Description: Yup.string().required(),
    Model: Yup.string().required(),
    SerialNumber: Yup.string().required(),
  }),
})

const NewTaskTemplateView = ({
  currentStep,
  onPressScanQRCode,
  isVisibleQRCode,
  onScanQRCodeSuccess,
  onCloseQRCode,
  onCreateStep,
  onConfirmGoBack,
}) => {
  const refForm = React.useRef()
  const initValues = {
    Instruction: '',
    Description: '',
    EquiqmentInfo: {
      Description: '',
      Model: '',
      SerialNumber: '',
    },
  }
  return (
    <>
      <Header
        title={isVisibleQRCode ? 'Scan QR Code' : `Step ${currentStep}`}
        leftTittle="Cancel"
        onGoBack={isVisibleQRCode ? onCloseQRCode : onConfirmGoBack}
      />
      <Formik innerRef={refForm} initialValues={initValues} validationSchema={FormStep}>
        {({ handleChange, values, errors, setValues }) => {
          const isActiveBtSave = _.isEmpty(errors)
          return (
            <KeyboardAwareScrollView style={styles.container} extraScrollHeight={20}>
              <View style={styles.wrapperContent}>
                <View style={styles.rowLabel}>
                  <Text style={styles.label}>Description</Text>
                </View>
                <TextInput
                  value={values.Description}
                  style={styles.textInput}
                  placeholder="Enter task’s name here"
                  placeholderTextColor={Colors.greyChateau}
                  onChangeText={handleChange('Description')}
                />

                <View style={[styles.rowLabel, styles.mt15]}>
                  <Text style={styles.label}>Instruction</Text>
                </View>
                <TextInput
                  value={values.Instruction}
                  blurOnSubmit
                  multiline
                  style={styles.textArea}
                  placeholder="Enter task’s instruction here"
                  placeholderTextColor={Colors.greyChateau}
                  onChangeText={handleChange('Instruction')}
                />
              </View>
              <View style={styles.wrapperEquipment}>
                <Text style={styles.equipment}>EQUIPMENT</Text>
                <TouchableOpacity style={styles.btScanQRCode} onPress={onPressScanQRCode}>
                  <Text style={styles.textScanQR}>SCAN QR CODE</Text>
                </TouchableOpacity>

                <View style={styles.wrapperContentEquipment}>
                  <Text style={styles.fillInfo}>Or fill equipment info below</Text>

                  <Text style={[styles.label, styles.mt15]}>Description</Text>
                  <TextInput
                    value={values.EquiqmentInfo?.Description}
                    style={{ ...styles.textInput, backgroundColor: Colors.white }}
                    placeholder="Enter equipment’s description here"
                    placeholderTextColor={Colors.greyChateau}
                    onChangeText={(value) => setValues({ ...values, EquiqmentInfo: { ...values.EquiqmentInfo, Description: value } })}
                  />

                  <Text style={[styles.label, styles.mt15]}>Model</Text>
                  <TextInput
                    value={values.EquiqmentInfo?.Model}
                    style={{ ...styles.textInput, backgroundColor: Colors.white }}
                    placeholder="Enter equipment’s model here"
                    placeholderTextColor={Colors.greyChateau}
                    onChangeText={(value) => setValues({ ...values, EquiqmentInfo: { ...values.EquiqmentInfo, Model: value } })}
                  />
                  <Text style={[styles.label, styles.mt15]}>Serial No</Text>
                  <TextInput
                    value={values.EquiqmentInfo?.SerialNumber}
                    style={{ ...styles.textInput, backgroundColor: Colors.white }}
                    placeholder="Enter equipment’s serial number here"
                    placeholderTextColor={Colors.greyChateau}
                    onChangeText={(value) => setValues({ ...values, EquiqmentInfo: { ...values.EquiqmentInfo, SerialNumber: value } })}
                  />

                  <TouchableOpacity
                    style={{ ...styles.btSave, backgroundColor: isActiveBtSave ? Colors.blueEgyptian : Colors.greyChateau }}
                    disabled={!isActiveBtSave}
                    onPress={onCreateStep(refForm)}>
                    <Text style={{ ...styles.textSave, color: isActiveBtSave ? Colors.white : Colors.greyZircon }}>SAVE</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <ScanQr isVisible={isVisibleQRCode} onSuccess={onScanQRCodeSuccess(refForm)} />
            </KeyboardAwareScrollView>
          )
        }}
      </Formik>
    </>
  )
}

export default NewTaskTemplateView

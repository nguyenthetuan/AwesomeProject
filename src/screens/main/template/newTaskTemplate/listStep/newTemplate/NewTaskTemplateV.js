import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors } from 'src/assets'
import Header from 'src/screens/components/Header'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ScanQr from 'src/screens/components/ScanQr'
import styles from './Styles'

const NewTaskTemplateView = ({
  isActiveBtSave,
  currentStep,
  onPressScanQRCode,
  isVisibleQRCode,
  onScanQRCodeSuccess,
  onCloseQRCode,
  onChangeText,
  onCreateStep,
  onConfirmGoBack,
}) => {
  return (
    <>
      <Header
        title={isVisibleQRCode ? 'Scan QR Code' : `Step ${currentStep}`}
        leftTittle="Cancel"
        onGoBack={isVisibleQRCode ? onCloseQRCode : onConfirmGoBack}
      />
      <KeyboardAwareScrollView style={styles.container} extraScrollHeight={20}>
        <View style={styles.wrapperContent}>
          <View style={styles.rowLabel}>
            <Text style={styles.label}>Description</Text>
            {/* <Text style={styles.error}>Description is require</Text> */}
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter task’s name here"
            placeholderTextColor={Colors.greyChateau}
            onChangeText={onChangeText('Instruction')}
          />

          <View style={[styles.rowLabel, styles.mt15]}>
            <Text style={styles.label}>Instruction</Text>
            {/* <Text style={styles.error}>Instruction is require</Text> */}
          </View>
          <TextInput
            blurOnSubmit
            multiline
            style={styles.textArea}
            placeholder="Enter task’s instruction here"
            placeholderTextColor={Colors.greyChateau}
            onChangeText={onChangeText('Description')}
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
              style={{ ...styles.textInput, backgroundColor: Colors.white }}
              placeholder="Enter equipment’s description here"
              placeholderTextColor={Colors.greyChateau}
              onChangeText={onChangeText('descEquipment')}
            />

            <Text style={[styles.label, styles.mt15]}>Model</Text>
            <TextInput
              style={{ ...styles.textInput, backgroundColor: Colors.white }}
              placeholder="Enter equipment’s model here"
              placeholderTextColor={Colors.greyChateau}
              onChangeText={onChangeText('modelEquipment')}
            />
            <Text style={[styles.label, styles.mt15]}>Serial No</Text>
            <TextInput
              style={{ ...styles.textInput, backgroundColor: Colors.white }}
              placeholder="Enter equipment’s serial number here"
              placeholderTextColor={Colors.greyChateau}
              onChangeText={onChangeText('serialNo')}
            />

            <TouchableOpacity
              style={{ ...styles.btSave, backgroundColor: isActiveBtSave ? Colors.blueEgyptian : Colors.greyChateau }}
              disabled={!isActiveBtSave}
              onPress={onCreateStep}>
              <Text style={{ ...styles.textSave, color: isActiveBtSave ? Colors.white : Colors.greyZircon }}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScanQr isVisible={isVisibleQRCode} onSuccess={onScanQRCodeSuccess} />
      </KeyboardAwareScrollView>
    </>
  )
}

export default NewTaskTemplateView

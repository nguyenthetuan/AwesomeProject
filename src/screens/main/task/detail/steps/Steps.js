import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors, Fonts } from 'src/assets'
import { pipe, withState, withHandlers } from '@synvox/rehook'
import { Vectors } from 'src/assets'

const Down = Vectors.down
const Up = Vectors.up

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  line: {
    borderBottomColor: Colors.greyZircon,
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginBottom: 14,
  },
  btStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  nameStep: {
    color: Colors.blueEgyptian,
    fontSize: Fonts.fontSize[16],
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    width: '90%',
  },
  wrapperContentStep: {
    marginTop: 10,
  },
  label: {
    color: Colors.blueEgyptian,
    fontSize: Fonts.fontSize[14],
    fontFamily: Fonts.fontFamily.NunitoSansBold,
  },
  desc: {
    fontSize: Fonts.fontSize[14],
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    marginTop: 4,
  },
  mt5: {
    marginTop: 5,
  },
  rowEquipment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qrCode: {
    width: 60,
    height: 60,
  },
  wrapperRightContentEquipment: {
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
  },
  labelInEquipment: {
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
  },
  desInEquipment: {
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    marginLeft: 5,
  },
  contentContainerStyle: {
    paddingBottom: 30,
  },
})

const Steps = ({ listStep, statusSteps, onPressStep }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container} contentContainerStyle={styles.contentContainerStyle}>
      {listStep.map((item, index) => {
        return (
          <>
            <TouchableOpacity style={styles.btStep} key={`${index}`} onPress={onPressStep(index)}>
              <Text style={styles.nameStep}>{`Step ${index}: Sed do eiusmod tempor incididunt Sed do eiusmod tempor incididunt`}</Text>
              {statusSteps[index] ? <Up /> : <Down />}
            </TouchableOpacity>
            {statusSteps[index] && (
              <View style={styles.wrapperContentStep}>
                <Text style={styles.label}>Instruction</Text>
                <Text style={styles.desc}>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Text>

                <Text style={[styles.label, styles.mt5]}>Equipment</Text>
                <View style={styles.rowEquipment}>
                  <Image source={require('src/assets/images/qrCode.png')} style={styles.qrCode} />
                  <View style={styles.wrapperRightContentEquipment}>
                    <View style={styles.row}>
                      <Text style={styles.labelInEquipment}>Model:</Text>
                      <Text style={styles.desInEquipment}>KET 25</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.labelInEquipment}>Serial:</Text>
                      <Text style={styles.desInEquipment}>IK09830406T</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.labelInEquipment}>Description:</Text>
                      <Text style={styles.desInEquipment}>This is description for equipment</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            <View style={styles.line} />
          </>
        )
      })}
    </ScrollView>
  )
}

export default pipe(
  withState('listStep', 'updateListStep', [1, 2, 3, 4]),
  withState('statusSteps', 'updateStatusSteps', ({ listStep }) => {
    const arrStatus = []
    listStep.map((item) => arrStatus.push(false))
    return arrStatus
  }),
  withHandlers({
    onPressStep: ({ statusSteps, updateStatusSteps }) => (step) => () => {
      const newStatus = [...statusSteps]
      newStatus[step] = !newStatus[step]
      updateStatusSteps(newStatus)
    },
  }),
  Steps,
)

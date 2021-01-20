import React from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors, Fonts, Vectors } from 'src/assets'
import Indicator from 'src/screens/components/Indicator'

const AddIcon = Vectors.Add
const { width, height } = Dimensions.get('window')

const ListStepV = ({ btnPrevious }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.body}>
          <Text style={styles.title}>STEPS</Text>
        </View>
        <TouchableOpacity style={styles.btnAddNew}>
          <AddIcon size={20} color={Colors.blueEgyptian} />
          <Text style={styles.txtNewStep}>NEW STEP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Indicator footer step={1} />
        <View style={styles.btnFooter}>
          <TouchableOpacity onPress={btnPrevious} style={styles.btnPrevioud}>
            <Text style={styles.txtPrevious}>PREVIOUS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnFinish}>
            <Text style={styles.txtFinish}>FINISH</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  title: {
    color: Colors.blueEgyptian,
    fontFamily: Fonts.fontFamily.NunitoSansExtraBold,
    fontSize: Fonts.fontSize[20],
    marginTop: 20,
    alignSelf: 'center',
  },
  body: {
    paddingHorizontal: 15,
  },
  txtNewStep: {
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
    color: Colors.blueEgyptian,
    marginLeft: 6,
  },
  btnAddNew: {
    backgroundColor: Colors.whiteQuartzTwo,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 45,
    marginTop: 20,
  },
  btnFooter: {
    marginTop: 15,
    flexDirection: 'row',
    marginBottom: 40,
    justifyContent: 'space-between',
  },
  btnPrevioud: {
    backgroundColor: Colors.greyZircon,
    paddingHorizontal: 42,
    paddingVertical: 12,
    borderRadius: 13,
  },
  txtPrevious: {
    color: Colors.blueEgyptian,
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
  },
  btnFinish: {
    backgroundColor: Colors.greyChateau,
    paddingHorizontal: 42,
    paddingVertical: 12,
    borderRadius: 13,
  },
  txtFinish: {
    color: Colors.white,
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
  },
  footer: {
    paddingHorizontal: 15,
  },
})

export default ListStepV

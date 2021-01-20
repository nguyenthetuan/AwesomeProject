import React from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors, Fonts } from 'src/assets'
import Indicator from 'src/screens/components/Indicator'

const GenneralInfor = ({ onPress, disabledBtnNext, isValidate, btnNext }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>GENERAL INFO</Text>
        <View>
          <View>
            <Text style={styles.titleTextInput}>Task Name</Text>
            <TextInput
              placeholder="Enter task’s name here"
              underlineColorAndroid="transparent"
              style={styles.textInput}
              onChangeText={(text) => onPress({ index: 1, text })}
            />
          </View>
          <View>
            <Text style={styles.titleTextInput}>Description</Text>
            <TextInput
              placeholder="Enter task’s description here"
              underlineColorAndroid="transparent"
              style={styles.textInput}
              onChangeText={(text) => onPress({ index: 2, text })}
            />
          </View>
        </View>
      </View>
      <View>
        <Indicator header step={1} />
        <TouchableOpacity onPress={btnNext} disabled={!isValidate} style={[styles.btnNext, isValidate && { backgroundColor: Colors.blueEgyptian }]}>
          <Text style={[styles.txtNext, isValidate && { color: Colors.white }]}>NEXT</Text>
        </TouchableOpacity>
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
    flex: 1,
  },
  textInput: {
    backgroundColor: Colors.whiteLilac,
    height: 46,
    paddingLeft: 10,
    borderRadius: 9,
    marginTop: 5,
  },
  titleTextInput: {
    color: Colors.blueEgyptian,
    marginTop: 20,
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
  },
  btnNext: {
    backgroundColor: Colors.greyChateau,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
    marginHorizontal: 15,
    borderRadius: 13,
    marginTop: 10,
  },
  txtNext: {
    color: Colors.greyZircon,
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
  },
})

export default GenneralInfor

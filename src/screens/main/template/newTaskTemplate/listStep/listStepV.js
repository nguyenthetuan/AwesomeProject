import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors, Fonts, Vectors } from 'src/assets'

const ListStepV = ({ onPress, disabledBtnNext, isValidate, btnNext }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>STEPS</Text>
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
})

export default ListStepV

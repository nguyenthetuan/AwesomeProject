import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Fonts, Colors } from 'src/assets'
import { Text } from 'react-native-elements'
import { pipe } from '@synvox/rehook'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  label: {
    color: Colors.blueEgyptian,
    fontSize: Fonts.fontSize[16],
    fontFamily: Fonts.fontFamily.NunitoSansBold,
  },
  desc: {
    color: Colors.black02,
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    marginTop: 5,
  },
  mt15: {
    marginTop: 15,
  },
})

const General = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Task Name</Text>
      <Text style={styles.desc}>Task 1</Text>
      <Text style={[styles.label, styles.mt15]}>Description</Text>
      <Text style={styles.desc}>This is description for task 1</Text>
    </View>
  )
}

export default pipe(General)

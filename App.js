import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Colors, Fonts, Vectors} from 'src/assets'
import {pipe} from '@synvox/rehook'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.fontFamily.NunitoSansRegular,
    fontSize: Fonts.fontSize[26],
  },
})

const App = () => {
  const EyeOpen = Vectors.eyeOpen
  return (
    <View style={styles.container}>
      <Text style={styles.text}>dd</Text>
      <Text style={styles.text}>dd</Text>
      <EyeOpen width={23} height={23} color={Colors.greyChateau} />
    </View>
  )
}

export default pipe(App)

import 'react-native-gesture-handler'
import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Colors, Fonts, Vectors} from 'src/assets'
import {pipe} from '@synvox/rehook'
import MainStack from 'src/navigation/MainStack'

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

// const App = () => {
//   const EyeOpen = Vectors.eyeOpen
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>dd</Text>
//       <EyeOpen width={23} height={23} color={Colors.greyChateau} />
//     </View>
//   )
// }

const App = () => {
  return <MainStack />
}

export default pipe(App)

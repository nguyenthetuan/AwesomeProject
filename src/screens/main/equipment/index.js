import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { pipe } from '@synvox/rehook'
import { Text } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const EquipmentStack = () => {
  return (
    <View style={styles.container}>
      <Text>Coming soon</Text>
    </View>
  )
}

export default pipe(EquipmentStack)

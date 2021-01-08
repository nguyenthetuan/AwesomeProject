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

const UsersStack = () => {
  return (
    <View style={styles.container}>
      <Text>Coming Soon</Text>
    </View>
  )
}

export default pipe(UsersStack)

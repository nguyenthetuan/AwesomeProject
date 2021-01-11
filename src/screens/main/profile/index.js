import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { pipe } from '@synvox/rehook'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const ProfileStack = () => {
  return (
    <View style={styles.container}>
      <Text>Coming Soon</Text>
    </View>
  )
}

export default pipe(ProfileStack)

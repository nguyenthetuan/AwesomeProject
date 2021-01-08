import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {Text} from 'react-native-elements'
import {pipe} from '@synvox/rehook'

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
      <Text>Profile stack</Text>
    </View>
  )
}

export default pipe(ProfileStack)

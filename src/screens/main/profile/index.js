import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import {pipe} from '@synvox/rehook'

const ProfileStack = () => {
  return (
    <View>
      <Text>Profile stack</Text>
    </View>
  )
}

export default pipe(ProfileStack)

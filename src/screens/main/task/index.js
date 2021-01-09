import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { pipe, withHandlers } from '@synvox/rehook'

const TaskStack = ({ goToDetail }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <TouchableOpacity onPress={goToDetail}>
        <Text>Task Stack</Text>
      </TouchableOpacity>
    </View>
  )
}

export default pipe(
  withHandlers({
    goToDetail: ({ route }) => () => {
      console.log('PROPS', route)
    },
  }),
  TaskStack,
)

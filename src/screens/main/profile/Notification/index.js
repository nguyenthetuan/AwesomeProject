import React from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Text, colors } from 'react-native-elements'
import { pipe, withState, withHandlers } from '@synvox/rehook'
import { Colors, Fonts, Vectors } from 'src/assets'
import vectors from '@src/assets/Vectors'
import Header from 'src/screens/components/Header'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  }
})

const IconDel = Vectors.iconDel;

const notification = () => {
  return (
    <View style={styles.container}>
      <Header title='Notifications' disableLeftHeader={true} RghtIcon={true} />
    </View>
  )
}

export default pipe(notification)
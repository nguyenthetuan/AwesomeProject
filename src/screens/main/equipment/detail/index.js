import React from 'react'
import { View, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native'
import Header from 'src/screens/components/Header'
import { Text } from 'react-native-elements'
import { Colors, Fonts, Vectors } from 'src/assets'
import { pipe, withHandlers, withState, withProps } from '@synvox/rehook'
import _ from 'lodash'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  qrCode: {
    width: 60,
    height: 60,
  },
  txtTitle: {
    color: Colors.black02,
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
    fontSize: Fonts.fontSize[14]
  },
  txtValue: {
    color: Colors.black02,
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    fontSize: Fonts.fontSize[14],
  },
  body: {
    flexDirection: 'row',
    marginTop: 30,
    paddingHorizontal: 15
  },
  left: {
    marginLeft: 10
  }
})

const equimentDetail = (roter) => {
  const { title, content, description } = roter.route.params
  return (<View style={styles.container}>
    <Header title={title} disableLeftHeader={true} />
    <View style={styles.body}>
      <Image source={require('src/assets/images/qrCode.png')} style={styles.qrCode} />
      <View style={styles.left}>
        <Text style={styles.txtTitle}> Module: <Text style={styles.txtValue}>{title}</Text></Text>
        <Text style={styles.txtTitle}>Serial No: <Text style={styles.txtValue}>{content}</Text></Text>
        <Text style={styles.txtTitle}>
          Description: <Text style={styles.txtValue}>{description}</Text>
        </Text>
      </View>
    </View>
  </View>)
}

export default pipe(
  withState('propos', 'setPropd', 2),
  equimentDetail)
import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors, Fonts } from 'src/assets'
import { pipe } from '@synvox/rehook'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  wrapperItemUser: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.greyZircon,
  },
  wrapperRightItem: {
    marginLeft: 10,
  },
  shortName: {
    fontSize: Fonts.fontSize[25],
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
    color: Colors.greyChateau,
  },
  nameUser: {
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
    color: Colors.blueEgyptian,
  },
  filedUser: {
    fontFamily: Fonts.fontFamily.NunitoSansLight,
  },
})

const keyExtractor = (item) => `${item?.id}`
const renderItem = ({ item, index }) => {
  return (
    <View style={styles.wrapperItemUser}>
      <View style={styles.avatar}>
        <Text style={styles.shortName}>TB</Text>
      </View>
      <View style={styles.wrapperRightItem}>
        <Text style={styles.nameUser}>Tim Brooke</Text>
        <Text style={styles.filedUser}>Filed Contract</Text>
        <Text style={styles.filedUser}>0987654321</Text>
        <Text style={styles.filedUser}>tim_brooke@tester.com</Text>
      </View>
    </View>
  )
}

const AssignedUser = () => {
  return (
    <View style={styles.container}>
      <FlatList data={[1, 2, 3]} keyExtractor={keyExtractor} renderItem={renderItem} />
    </View>
  )
}

export default pipe(AssignedUser)

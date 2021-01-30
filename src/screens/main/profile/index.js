import React from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Text, colors } from 'react-native-elements'
import { pipe, withState, withHandlers } from '@synvox/rehook'
import { Colors, Fonts, Vectors } from 'src/assets'
import vectors from '@src/assets/Vectors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  body: {
    paddingHorizontal: 15,
    marginTop: 50
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  noAvatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: Colors.greyZircon,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftHeader: {
    marginLeft: 15
  },
  txtNameCompact: {
    fontSize: Fonts.fontSize[40],
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
    color: Colors.greyChateau
  },
  name: {
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
    color: Colors.blueEgyptian
  },
  status: {
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    fontSize: Fonts.fontSize[14],
    color: Colors.black02
  },
  textEditProfile: {
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    fontSize: Fonts.fontSize[14],
    color: Colors.blueEgyptian,
    textDecorationLine: 'underline',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyZircon,
    borderTopColor: Colors.greyZircon,
    paddingVertical: 12
  },
  bodyFlastList: {
    marginTop: 20
  },
  txtItem: {
    color: Colors.blueEgyptian,
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
    fontSize: Fonts.fontSize[18]
  }
})

const IconRight = vectors.RightIcon;

const renderItem = ({ item, index }) => {
  return (
    <TouchableOpacity onPress={item.onPress}
      key={index} style={styles.item}
    >
      <Text style={styles.txtItem}>{item.title}</Text>
      <IconRight />
    </TouchableOpacity>
  )
}

const ProfileStack = ({ data }) => {
  console.log('dataa', data)
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <View style={styles.noAvatar}><Text style={styles.txtNameCompact}>TB</Text></View>
          <View style={styles.leftHeader}>
            <Text style={styles.name}>Tim Brooke</Text>
            <Text style={styles.status}>Operator</Text>
            <Text style={styles.status}>01293092832</Text>
            <Text style={styles.status}>tim_brooke@tester.com</Text>
            <TouchableOpacity>
              <Text style={styles.textEditProfile}>Edit Profile ></Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bodyFlastList}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => String(index)}
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>
  )
}

export default pipe(
  withState('data', 'setData', (roter) => {
    return [
      {
        title: 'Notifications (3)',
        onPress: () => { roter.navigation.navigate('Notification') }
      },
      {
        title: 'Settings',
        onPress: () => { }
      },
      {
        title: 'Policy',
        onPress: () => { }
      },
      {
        title: 'Terms & Conditions',
        onPress: () => { }
      },
      {
        title: 'LOG OUT',
        onPress: () => { }
      }
    ]
  }),
  ProfileStack)

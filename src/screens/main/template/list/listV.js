import React from 'react'
import { View, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native'
import Header from 'src/screens/components/Header'
import { Text } from 'react-native-elements'
import { Colors, Fonts, Vectors } from 'src/assets'

const IconSearch = Vectors.Search


const renderItem = ({ onPressItem }) => ({ item, index }) => {
  return (
    <TouchableOpacity onPress={onPressItem} style={styles.itemTask}>
      <Image source={require('src/assets/images/itemTask.png')} resizeMode="contain" />
      <View style={styles.leftItem}>
        <Text style={styles.txtTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.txtDescription} numberOfLines={1}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const keyExtractor = (item, index) => `${index}`

const footer = (dataConvert) => {
  return (
    <View style={styles.footerFlastList}>
      <Text style={styles.txtFooter}>
        Scroll to Load More
      </Text>
    </View>
  )
}

const listV = ({ dataConvert, onPressItem, changeText, sortDataConvert }) => {
  return (
    <View style={styles.container}>
      <Header title="Create Task" leftTittle="Cancel" rightTitle="New Template" rightOnpress={() => alert('222')} />
      <View style={styles.body}>
        <View style={styles.textInputSearch}>
          <TextInput onChangeText={changeText} style={styles.txtInput} placeholder="Enter keywords" />
          <TouchableOpacity style={styles.iconSearch}>
            <IconSearch />
          </TouchableOpacity>
        </View>
        <View style={styles.btnSort}>
          <Text>Sort by:</Text>
          <TouchableOpacity onPress={sortDataConvert}>
            <Text style={styles.txtLatest}>Latest Start Date</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={dataConvert}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          renderItem={renderItem({ onPressItem })}
          ListFooterComponent={footer}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  textInputSearch: {
    backgroundColor: Colors.whiteLilac,
    height: 45,
    borderRadius: 9,
    marginTop: 15,
    justifyContent: 'center',
  },
  txtInput: {
    height: 40,
    paddingLeft: 15,
    paddingRight: 35,
  },
  body: {
    paddingHorizontal: 15,
    flex: 1,
  },
  btnSort: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    marginTop: 5,
  },
  txtLatest: {
    color: Colors.blueEgyptian,
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  itemTask: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  txtTitle: {
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
    color: Colors.blueEgyptian,
    width: '50%',
  },
  leftItem: {
    marginLeft: 15,
  },
  txtDescription: {
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    fontSize: Fonts.fontSize[16],
  },
  iconSearch: {
    height: 16,
    width: 16,
    position: 'absolute',
    right: 14,
  },
  footerFlastList: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  txtFooter: {
    fontFamily: Fonts.fontFamily.NunitoSansRegular,
    fontSize: Fonts.fontSize[12]
  }
})

export default listV
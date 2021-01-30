import React from 'react'
import { View, StyleSheet, FlatList, TextInput, Image, TouchableOpacity } from 'react-native'
import Header from 'src/screens/components/Header'
import { Text, colors } from 'react-native-elements'
import { Colors, Fonts, Vectors } from 'src/assets'
import { pipe, withHandlers, withState, withProps } from '@synvox/rehook'
import _ from 'lodash'
import { dataTest } from './data'

const IconSearch = Vectors.Search

const renderItem = ({ onPressItem }) => ({ item, index }) => {
  return (
    <View onPress={onPressItem({ item })} style={styles.itemTask}>
      <View style={styles.image}>
        <Text style={styles.txtName}>TB</Text>
      </View>
      <View style={styles.leftItem}>
        <Text style={styles.txtTitle}>
          {item.name}
        </Text>
        <Text style={styles.txtDescription}>{item.poisition}</Text>
        <Text style={styles.txtDescription} numberOfLines={1}>
          {item.phone}
        </Text>
        <Text style={styles.txtDescription} numberOfLines={1}>
          {item.email}
        </Text>
      </View>
    </View>
  )
}

const keyExtractor = (item, index) => `${index}`

const footer = (dataConvert) => {
  return (
    <View style={styles.footerFlastList}>
      <Text style={styles.txtFooter}>Scroll to Load More</Text>
    </View>
  )
}

const userStack = ({ dataConvert, onPressItem, termData, changeText, sortDataConvert, navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Users" disableLeftHeader={false} />
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
            <Text style={styles.txtLatest}>Task Name A-Z</Text>
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

export default pipe(
  withState('textSearch', 'setTextSearch', ''),
  withState('termData', 'setData', dataTest),
  withProps(({ data, textSearch, termData }) => {
    if (textSearch) {
      termData = _.filter(termData, (item) => item.name.toLowerCase().includes(textSearch.toLowerCase()))
    }
    return {
      dataConvert: termData,
    }
  }),
  withHandlers({
    onPressItem: ({ navigation }) => ({ item }) => () => {
      navigation.navigate('EquimentDetail', item)
    },
    changeText: ({ setTextSearch, navigation }) => (text) => {
      setTextSearch(text)
    },
    sortUp: () => (property) => {
      return (a, b) => {
        if (a[property] < b[property]) {
          return -1
        } else if (a[property] > b[property]) {
          return 1
        } else {
          return 0
        }
      }
    },
  }),
  withHandlers({
    sortDataConvert: ({ dataConvert, updateTermData, sortUp, setData, navigation }) => (typeSort) => {
      const dataUp = [...dataConvert.sort(sortUp('title'))]
      setData(dataUp)
    },
  }),
  userStack,
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
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
  },
  leftItem: {
    marginLeft: 15,
  },
  txtDescription: {
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    fontSize: Fonts.fontSize[14],
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
    fontSize: Fonts.fontSize[12],
  },
  content: {
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
    color: Colors.black02,
    fontSize: Fonts.fontSize[14]
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: Colors.greyZircon,
    justifyContent:'center',
    alignItems:'center'
  },
  txtName:{
   color:Colors.greyChateau
  }
})


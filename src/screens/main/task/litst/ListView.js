import React from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList, TextInput, Image } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors, Fonts, Vectors } from 'src/assets'
import dayjs from 'dayjs'

const IconSearch = Vectors.Search

const renderStatus = (item) => {
  switch (item.type) {
    case 1:
      return (
        <View>
          <View style={styles.newStatus}>
            <Text style={styles.textNewStatus}>New</Text>
          </View>
        </View>
      )
    case 2:
      return (
        <View style={styles.InProgressStatus}>
          <Text style={styles.textNewStatus}>In Progress</Text>
        </View>
      )
    case 3:
      return (
        <View style={styles.completeStatus}>
          <Text style={styles.txtCompleted}>Completed</Text>
        </View>
      )
    case 4:
      return (
        <View style={styles.overdueStatus}>
          <Text style={styles.txtCompleted}>Overdue</Text>
        </View>
      )
    default:
      break
  }
}

const renderItem = ({ onPressItem }) => ({ item, index }) => {
  return (
    <TouchableOpacity onPress={onPressItem} style={styles.itemTask}>
      <Image source={require('src/assets/images/itemTask.png')} resizeMode="contain" />
      <View style={styles.leftItem}>
        <Text style={styles.txtTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.rowTime}>
          <Text style={styles.txtTime}>{dayjs(item.timeStart).format('DD/MM/YY')}</Text>
          <Text style={styles.txtTime}> - </Text>
          <Text style={styles.txtTime}>{dayjs(item.timeEnd).format('DD/MM/YY')}</Text>
        </View>
        <Text style={styles.txtDescription} numberOfLines={1}>
          {item.description}
        </Text>
        {renderStatus(item)}
      </View>
    </TouchableOpacity>
  )
}

const footer = (dataConvert) => {
  return (
    <View style={styles.footerFlastList}>
      <Text>
        Showing {dataConvert.length}/{dataConvert.length} of all item
      </Text>
    </View>
  )
}

const keyExtractor = (item, index) => `${index}`

const ListView = ({ dataConvert, changeText, onPressItem, sortBy, onPressDemo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.textInputSearch}>
          <TextInput onChangeText={changeText} style={styles.txtInput} placeholder="Enter keywords" />
          <TouchableOpacity style={styles.iconSearch}>
            <IconSearch />
          </TouchableOpacity>
        </View>
        <View style={styles.btnSort}>
          <Text>Sort by:</Text>
          <TouchableOpacity onPress={sortBy}>
            <Text style={styles.txtLatest}>Latest Start Date</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={dataConvert}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          renderItem={renderItem({ onPressItem })}
          ListFooterComponent={footer(dataConvert)}
        />
      </View>
    </View>
  )
}

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
  rowTime: {
    flexDirection: 'row',
  },
  leftItem: {
    marginLeft: 14.5,
  },
  txtTime: {
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
    fontSize: Fonts.fontSize[14],
  },
  txtDescription: {
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    fontSize: Fonts.fontSize[16],
  },
  footerFlastList: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  iconSearch: {
    height: 16,
    width: 16,
    position: 'absolute',
    right: 14,
  },
  newStatus: {
    backgroundColor: Colors.orangeNeonCarrot,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    alignSelf: 'flex-start',
    marginTop: 3,
  },
  textNewStatus: {
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[12],
  },
  InProgressStatus: {
    backgroundColor: Colors.whiteQuartz,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    alignSelf: 'flex-start',
    marginTop: 3,
  },
  completeStatus: {
    backgroundColor: Colors.blueEgyptian,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    alignSelf: 'flex-start',
    marginTop: 3,
  },
  txtCompleted: {
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[12],
    color: Colors.white,
  },
  overdueStatus: {
    backgroundColor: Colors.greyChateau,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 3,
    alignSelf: 'flex-start',
    marginTop: 3,
  },
  txtInput: {
    height: 40,
    paddingLeft: 15,
    paddingRight: 35,
  },
})

export default ListView

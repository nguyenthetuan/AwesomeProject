import React from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList, TextInput, Dimensions, Image } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors, Fonts, Vectors } from 'src/assets'
import dayjs from 'dayjs'

const { width, height } = Dimensions.get('window')
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

const renderItem = ({ item, index }) => {
  return (
    <TouchableOpacity style={styles.itemTask}>
      <Image
        source={require('src/assets/Images/itemTask.png')}
        style={{ width: 105, height: 86, borderRadius: 14, backgroundColor: 'blue' }}
        resizeMode="contain"
      />
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

const footer = () => {
  return (
    <View style={styles.footerFlastList}>
      <Text>Showing 1/1 of all item</Text>
    </View>
  )
}

const keyExtractor = (item) => `${item?.id}`

const ListView = ({ dataConvert }) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.textInputSearch}>
          <TextInput style={styles.txtInput } placeholder="Enter keywords" />
          <TouchableOpacity style={styles.iconSearch}>
            <IconSearch />
          </TouchableOpacity>
        </View>
        <View style={styles.btnSort}>
          <Text>Sort by:</Text>
          <TouchableOpacity>
            <Text style={styles.txtLatest}>Latest Start Date</Text>
          </TouchableOpacity>
        </View>
        <FlatList data={dataConvert}  showsHorizontalScrollIndicator={false} keyExtractor={keyExtractor} renderItem={renderItem} ListFooterComponent={footer} />
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
  },
  itemTask: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  txtTitle: {
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: 16,
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
    fontSize: 14,
  },
  txtDescription: {
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    fontSize: 14,
  },
  footerFlastList: {
    justifyContent: 'center',
    alignItems: 'center',
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
    paddingVertical: 4,
    alignSelf: 'flex-start',
  },
  textNewStatus: {
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: 14,
  },
  InProgressStatus: {
    backgroundColor: Colors.whiteQuartz,
    borderRadius: 13,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeStatus: {
    backgroundColor: Colors.blueEgyptian,
    borderRadius: 13,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCompleted: {
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: 14,
    color: Colors.white,
  },
  overdueStatus: {
    backgroundColor: Colors.greyChateau,
    borderRadius: 13,
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
    height: 40,
    paddingLeft: 15
  }
})

export default ListView

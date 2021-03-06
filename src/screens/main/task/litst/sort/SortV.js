import React from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors, Fonts, Vectors } from 'src/assets'
import Header from 'src/screens/components/Header'

const keyExtractor = (index) => index.toString()
const IconRadio = Vectors.ReadioBtn

const renderItem = ({ onPressItem, indexSelect, typeSort }) => ({ item, index }) => {
  return (
    <TouchableOpacity onPress={onPressItem(index)} style={styles.item}>
      <View style={styles.Radiobtn}>{indexSelect === index && <IconRadio size={24} />}</View>
      <Text style={styles.txtTitle}>{item.title}</Text>
    </TouchableOpacity>
  )
}

const Sort = ({ data, onPressItem, indexSelect, typeSort, route, goBack }) => {
  return (
    <View style={styles.contaier}>
      <Header title="Sort by" leftTittle="Cancel" />
      <View style={styles.body}>
        <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem({ onPressItem, indexSelect, typeSort, route })} />
        <TouchableOpacity onPress={goBack(indexSelect)} style={styles.btnApply}>
          <Text style={styles.txtApply}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyZircon,
    paddingVertical: 14,
    alignItems: 'center',
  },
  body: {
    paddingHorizontal: 15,
  },
  Radiobtn: {
    backgroundColor: Colors.whiteLilac,
    height: 16,
    width: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radio: {
    backgroundColor: Colors.blueEgyptian,
    height: 8,
    width: 8,
    borderRadius: 4,
  },
  txtTitle: {
    fontFamily: Fonts.fontFamily.NunitoSansRegular,
    fontSize: Fonts.fontSize[14],
    marginLeft: 23,
  },
  btnApply: {
    backgroundColor: Colors.blueEgyptian,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    marginTop: 31,
  },
  txtApply: {
    color: Colors.white,
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
  },
})

export default Sort

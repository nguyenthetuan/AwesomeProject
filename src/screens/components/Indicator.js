import React from 'react'
import { View, FlatList, StyleSheet, Dimensions } from 'react-native'
import { Colors } from 'src/assets'
import { pipe } from '@synvox/rehook'

const { width } = Dimensions.get('window')

const renderItem = ({ item, index }) => {
  return <View style={styles.indicatorSmall} />
}

const renderHeaderAndFooter = ({}) => {
  return <View style={styles.indicatorLarge} />
}
const renderFooter = ({}) => {
  return <View style={styles.indicatorLarge} />
}

const Indicator = ({ step, header, footer }) => {
  const data = Array.from({ length: step }, (x, i) => i)
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        ListHeaderComponent={header && renderHeaderAndFooter}
        ListFooterComponent={footer && renderFooter}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  )
}

export default pipe(Indicator)

const styles = StyleSheet.create({
  indicatorSmall: {
    height: 4,
    width: 10,
    backgroundColor: Colors.greyZircon,
    marginLeft: 3,
    borderRadius: 5,
  },
  indicatorLarge: {
    height: 4,
    width: 45,
    backgroundColor: Colors.orangeNeonCarrot,
    borderRadius: 5,
  },
})

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { pipe, withState, withHandlers, withProps } from '@synvox/rehook'
import ViewPager from '@react-native-community/viewpager'
import GeneralInfor from './generalInfor/generalInforVM'
import ListStep from './listStep/listepVM'
import Header from 'src/screens/components/Header'

const NewTaskTemplate = ({ initPage, changeInitPage, navigation }) => {
  return (
    <View style={styles.viewPager}>
      <Header title="New Task Template" leftTittle="Cancel" />
      <ViewPager style={styles.viewPager} initialPage={initPage}>
        <View key="0">
          <GeneralInfor changeInitPage={changeInitPage({ index: 1 })} navigation={navigation} />
        </View>
        <View key="1">
          <ListStep />
        </View>
      </ViewPager>
    </View>
  )
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
})

export default pipe(
  withState('initPage', 'setInitPage', 0),
  withHandlers({
    changeInitPage: ({ setInitPage }) => ({ index }) => () => {
      setInitPage(index)
    },
  }),
  NewTaskTemplate,
)

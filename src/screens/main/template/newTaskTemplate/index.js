import React from 'react'
import { View, StyleSheet } from 'react-native'
import { pipe, withState, withHandlers } from '@synvox/rehook'
import ViewPager from '@react-native-community/viewpager'
import GeneralInfor from './generalInfor/generalInforVM'
import ListStep from './listStep/listStepVM'
import Header from 'src/screens/components/Header'

const NewTaskTemplate = ({ initPage, navigation, onConfirmGoBack }) => {
  const refPager = React.useRef()
  return (
    <View style={styles.viewPager}>
      <Header title="New Task Template" leftTittle="Cancel" onGoBack={onConfirmGoBack} />
      <ViewPager scrollEnabled={false} style={styles.viewPager} initialPage={initPage} ref={refPager}>
        <View key="0">
          <GeneralInfor navigation={navigation} refPager={refPager} />
        </View>
        <View key="0">
          <ListStep refPager={refPager} />
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
    onConfirmGoBack: ({ navigation }) => () => {
      navigation.navigate('PopUpStack', {
        screen: 'PopUpConfirm',
        params: {
          content: 'All changes will not be saved when you cancel this process',
          onPressConfirm: () => {
            navigation.goBack()
          },
        },
      })
    },
  }),
  NewTaskTemplate,
)

import React from 'react'
import { View, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions } from 'react-native'
import { Fonts, Colors, Vectors } from 'src/assets'
import { pipe, withProps, withHandlers } from '@synvox/rehook'
import { Text } from 'react-native-elements'
import { withNavigationContext } from 'src/screens/hooks/withNavigation'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  wrapperHeader: {
    backgroundColor: Colors.blueEgyptian,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 24,
  },
  title: {
    fontSize: Fonts.fontSize[16],
    color: Colors.white,
    textAlign: 'center',
  },
  textBack: {
    color: Colors.white,
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
    fontSize: Fonts.fontSize[14],
  },
  safeAreaView: {
    backgroundColor: Colors.blueEgyptian,
  },
  viewEmpty: {
    flex: 1,
  },
  btBack: {
    flex: 1,
  },
  textRightBtn: {
    color: Colors.white,
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
    fontSize: Fonts.fontSize[14],
    alignSelf: 'flex-end',
  },
  iconRight: {
    tintColor: Colors.white
  }
})

const IconDel = Vectors.iconDel;


const Header = ({ title, onGoBack, leftTittle, rightTitle, rightOnpress, disableLeftHeader, RghtIcon }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.wrapperHeader}>
        <TouchableOpacity style={styles.btBack} onPress={onGoBack}>
          <Text style={styles.textBack}>{leftTittle || disableLeftHeader && 'Back'}</Text>
        </TouchableOpacity>

        <Text style={styles.title}>{title || ''}</Text>

        {rightTitle ? (
          <TouchableOpacity style={{ flex: 1 }} onPress={rightOnpress}>
            <Text style={styles.textRightBtn}>{rightTitle || ''}</Text>
          </TouchableOpacity>
        ) : (
            <View style={styles.viewEmpty} />
          )}
        {RghtIcon && (
          <TouchableOpacity style={{ flex: 1 }} onPress={rightOnpress}>
            <IconDel />
          </TouchableOpacity>
        ) 
          }
      </View>
    </SafeAreaView>
  )
}

export default pipe(
  withNavigationContext,
  withProps(({ title, leftTittle, onGoBack }) => ({ title, leftTittle, onGoBack })),
  withHandlers({
    onGoBack: ({ navigation, onGoBack }) => () => {
      if (onGoBack) {
        return onGoBack()
      }
      navigation.goBack()
    },
  }),
  Header,
)

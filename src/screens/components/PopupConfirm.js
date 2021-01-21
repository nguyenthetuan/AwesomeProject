import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { pipe, withProps, withHandlers } from '@synvox/rehook'
import { Colors, Fonts } from 'src/assets'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: Colors.blackBackgroundModal,
    paddingHorizontal: 15,
  },
  wrapperModal: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 13,
    paddingVertical: 15,
  },
  title: {
    fontFamily: Fonts.fontFamily.NunitoSansExtraBold,
    textAlign: 'center',
    fontSize: Fonts.fontSize[20],
    marginBottom: 5,
  },
  wrapperContent: {
    marginTop: 40,
    marginBottom: 30,
    paddingHorizontal: 16,
  },
  content: {
    fontSize: Fonts.fontSize[16],
    marginHorizontal: 45,
    textAlign: 'center',
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    marginBottom: 20,
  },
  wrapperAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonNegativeButton: {
    backgroundColor: Colors.blueEgyptian,
    width: 135,
    height: 45,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPositiveButton: {
    backgroundColor: Colors.blueHawkes,
    width: 135,
    height: 45,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAccept: {
    color: Colors.blueEgyptian,
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
  },
  textDismiss: {
    color: Colors.white,
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
  },
  iconTrash: {
    marginRight: 3,
  },
})

const ModalConfirm = ({ onHideModal, title, content, onPressPositive, textPositive, textNegative, isDelete = true }) => {
  return (
    <TouchableWithoutFeedback onPress={onHideModal}>
      <View style={styles.container}>
        <View style={styles.wrapperModal}>
          <Text style={styles.title}>{title || 'ARE YOU SURE?'}</Text>
          <Text style={styles.content}>{content || ''}</Text>

          <View style={styles.wrapperAction}>
            {isDelete && (
              <TouchableOpacity style={styles.buttonPositiveButton} onPress={onPressPositive}>
                <Text style={styles.textAccept}>{textPositive || 'YES, SURE'}</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.buttonNegativeButton} onPress={onHideModal}>
              <Text style={styles.textDismiss}>{textNegative || 'NO'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default pipe(
  withProps(({ route: { params: { title, content, onPressCancel, onPressConfirm, textPositive, textNegative } } }) => ({
    title,
    content,
    onPressConfirm,
    textPositive,
    textNegative,
  })),
  withHandlers({
    onHideModal: ({ navigation }) => () => navigation.goBack(),
    onPressPositive: ({ navigation, onPressConfirm }) => () => {
      onPressConfirm && onPressConfirm()
      navigation.goBack()
    },
  }),
  ModalConfirm,
)

import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { pipe, withHandlers, withProps } from '@synvox/rehook'
import { Colors, Fonts, Vectors } from 'src/assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blueEgyptian,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.fontFamily.NunitoSansExtraBold,
    fontSize: Fonts.fontSize[20],
    marginTop: 15,
    marginBottom: 5,
    marginHorizontal: 20,
  },
  content: {
    marginHorizontal: 55,
    textAlign: 'center',
    color: Colors.white,
    fontSize: Fonts.fontSize[16],
    marginBottom: 5,
  },
  btClose: {
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: 45,
    width: '96%',
    marginHorizontal: 15,
  },
  textConfirm: {
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
    color: Colors.blueEgyptian,
  },
})

const PopupSuccess = ({ title, content, onClose }) => {
  return (
    <View style={styles.container}>
      <Vectors.Success />
      <Text style={styles.title}>{title || ''}</Text>
      <Text style={styles.content}>{content || ''}</Text>
      <TouchableOpacity style={styles.btClose} onPress={onClose}>
        <Text style={styles.textConfirm}>CLOSE</Text>
      </TouchableOpacity>
    </View>
  )
}

export default pipe(
  withProps(({ route }) => {
    return {
      title: route?.params?.title,
      content: route?.params?.content,
    }
  }),
  withHandlers({
    onClose: ({ navigation }) => () => navigation.goBack(),
  }),
  PopupSuccess,
)

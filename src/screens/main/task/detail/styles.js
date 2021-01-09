import { StyleSheet } from 'react-native'
import { Fonts, Colors } from 'src/assets'
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapperCustomHeaderBar: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomColor: Colors.greyZircon,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineBorder: {
    height: 15,
    width: 1,
    backgroundColor: Colors.greyZircon,
    marginHorizontal: 14,
  },
  labelTab: {
    fontSize: Fonts.fontSize[16],
  },
})
export default styles

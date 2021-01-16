import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blueHawkes,
  },
  wrapperContent: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: Colors.white,
  },
  label: {
    fontSize: Fonts.fontSize[16],
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    color: Colors.blueEgyptian,
    marginBottom: 5,
    marginLeft: 10,
  },
  error: {
    fontSize: Fonts.fontSize[14],
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    color: Colors.redFireBrick,
  },
  textInput: {
    height: 46,
    paddingHorizontal: 10,
    backgroundColor: Colors.whiteLilac,
    fontSize: Fonts.fontSize[16],
    borderRadius: 9,
  },
  textArea: {
    height: 90,
    paddingHorizontal: 10,
    backgroundColor: Colors.whiteLilac,
    fontSize: Fonts.fontSize[16],
    borderRadius: 9,
    paddingTop: 12,
  },
  mt15: {
    marginTop: 15,
  },
  rowLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperEquipment: {
    flex: 1,
    backgroundColor: Colors.blueHawkes,
    paddingBottom: 20,
  },
  equipment: {
    color: Colors.blueEgyptian,
    fontSize: Fonts.fontSize[20],
    fontFamily: Fonts.fontFamily.NunitoSansExtraBold,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  btScanQRCode: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 12,
    borderColor: Colors.whiteQuartz,
  },
  textScanQR: {
    color: Colors.blueEgyptian,
    fontSize: Fonts.fontSize[16],
    fontFamily: Fonts.fontFamily.NunitoSansBold,
  },
  wrapperContentEquipment: {
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  fillInfo: {
    fontSize: Fonts.fontSize[12],
    textAlign: 'center',
  },
  btSave: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 13,
    height: 46,
  },
  textSave: {
    fontSize: Fonts.fontSize[16],
    fontFamily: Fonts.fontFamily.NunitoSansBold,
  },
})
export default styles

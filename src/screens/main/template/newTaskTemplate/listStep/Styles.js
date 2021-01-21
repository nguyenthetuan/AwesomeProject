import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'src/assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  flex1: {
    flex: 1,
  },
  title: {
    color: Colors.blueEgyptian,
    fontFamily: Fonts.fontFamily.NunitoSansExtraBold,
    fontSize: Fonts.fontSize[20],
    marginVertical: 20,
    alignSelf: 'center',
  },
  body: {
    paddingBottom: 30,
  },
  txtNewStep: {
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
    color: Colors.blueEgyptian,
    marginLeft: 6,
  },
  btnAddNew: {
    backgroundColor: Colors.whiteQuartzTwo,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 45,
  },
  btnFooter: {
    marginTop: 15,
    flexDirection: 'row',
    marginBottom: 40,
    justifyContent: 'space-between',
  },
  btnPrevioud: {
    backgroundColor: Colors.greyZircon,
    paddingVertical: 12,
    borderRadius: 13,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtPrevious: {
    color: Colors.blueEgyptian,
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
  },
  btnFinish: {
    backgroundColor: Colors.greyChateau,
    paddingVertical: 12,
    borderRadius: 13,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtFinish: {
    color: Colors.white,
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
  },
  footer: {
    paddingHorizontal: 15,
  },
  btStep: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    // borderBottomColor: Colors.greyZircon,
    // borderBottomWidth: 1,
    paddingBottom: 12,
    // marginBottom: 14,
    borderTopColor: Colors.greyZircon,
    borderTopWidth: 1,
    paddingTop: 12,
  },
  borderBottomItem: {
    borderBottomColor: Colors.greyZircon,
    borderBottomWidth: 1,
    // paddingTop: 12,
  },
  nameStep: {
    color: Colors.blueEgyptian,
    fontSize: Fonts.fontSize[16],
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    width: '90%',
  },
  wrapperContentStep: {
    marginTop: 10,
  },
  label: {
    color: Colors.blueEgyptian,
    fontSize: Fonts.fontSize[14],
    fontFamily: Fonts.fontFamily.NunitoSansBold,
  },
  desc: {
    fontSize: Fonts.fontSize[14],
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    marginTop: 4,
  },
  mt5: {
    marginTop: 5,
  },
  rowEquipment: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 14,
  },
  qrCode: {
    width: 60,
    height: 60,
  },
  wrapperRightContentEquipment: {
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
  },
  labelInEquipment: {
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
  },
  desInEquipment: {
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    marginLeft: 5,
  },
  line: {
    borderBottomColor: Colors.greyZircon,
    borderBottomWidth: 1,
    marginBottom: 14,
  },
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
})
export default styles

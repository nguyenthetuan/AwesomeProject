import React from 'react'
import {
  FlatList,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { Colors, Fonts, Vectors } from 'src/assets'
import { Text } from 'react-native-elements'
import { pipe, withHandlers, withState, withProps } from '@synvox/rehook'
import _ from 'lodash'
import Header from 'src/screens/components/Header'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import moment from 'moment'
import Indicator from 'src/screens/components/Indicator'

const { width } = Dimensions.get('window')
let data = [
  {
    id: 1,
    name: 'jonathan',
  },
  {
    id: 2,
    name: 'jackie',
  },
  {
    id: 3,
    name: 'thomas',
  },
  {
    id: 4,
    name: 'React Native',
  },
  {
    id: 5,
    name: 'PHP',
  },
  {
    id: 6,
    name: 'Python',
  },
  {
    id: 7,
    name: 'Go',
  },
  {
    id: 8,
    name: 'Swift',
  },
]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  iconAdduser: {
    position: 'absolute',
    right: 5,
    top: 16,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RowAdduser: {
    paddingHorizontal: 15,
    flex: 1,
  },
  styleFlastlist: {
    borderRadius: 9,
    marginTop: 5,
    maxHeight: 300,
    position: 'absolute',
    top: 45,
    backgroundColor: Colors.white,
    width: '100%',
    zIndex: 99,
    elevation: 99,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 47,
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyZircon,
  },
  txtNameItem: {
    fontFamily: Fonts.fontFamily.NunitoSansBold,
  },
  titleLaybel: {
    color: Colors.blueEgyptian,
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    textAlign: 'center',
    marginTop: 20,
    fontSize: Fonts.fontSize[20],
  },
  TextInput: {
    height: 46,
    borderRadius: 9,
    backgroundColor: Colors.whiteLilac,
    paddingLeft: 10,
  },
  containerFlastList: {
    borderRadius: 9,
    borderWidth: 1,
    borderColor: Colors.greyZircon,
  },
  laybelUser: {
    color: Colors.blueEgyptian,
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
  },
  StartDate: {
    height: 46,
    paddingLeft: 10,
    backgroundColor: Colors.whiteLilac,
    borderRadius: 9,
    justifyContent: 'center',
    marginTop: 5,
  },
  IconCalendar: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  conVertDate: {
    zIndex: -1,
    marginTop: 15,
  },
  footer: {
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
    flex: 1,
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
})

const AddUser = Vectors.addUser
const Calerdar = Vectors.Calendar

const renderItem = ({ selectItem, onPressItem }) => ({ item, index }) => {
  return (
    <TouchableOpacity onPress={onPressItem({ item })} style={[styles.item, selectItem?.id === item.id && { backgroundColor: Colors.whiteQuartz }]}>
      <Text style={styles.txtNameItem}>{item.name}</Text>
    </TouchableOpacity>
  )
}

const assignUser = ({
  changeText,
  textSearch,
  dataConvert,
  selectItem,
  onPressItem,
  isEnable,
  closeDropDow,
  startDate,
  handleDatePickedStart,
  hideStartDateTimePicker,
  isVisableStartDate,
  activeStartDateTimePicker,
  activeEndDateTimePicker,
  endDate,
  isVisableEndDate,
  handleDatePickedEnd,
  isValidate,
  onFinishCreateSteps,
  btnPrevious
}) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.container}>
        <Header title="New Assignment" leftTittle="Cancel" />
        <TouchableWithoutFeedback style={styles.container} onPress={() => { }}>
          <View style={styles.RowAdduser}>
            <TouchableWithoutFeedback style={{ zIndex: 99 }}>
              <View>
                <Text style={styles.titleLaybel}>ASSIGN USER</Text>
                <Text style={styles.laybelUser}>User</Text>
                <View style={{ marginTop: 5, position: 'relative' }}>
                  <TextInput
                    onChangeText={changeText}
                    value={textSearch}
                    style={styles.TextInput}
                    placeholder="Enter user’s name or phone number here"
                  />
                  {isEnable ? (
                    <FlatList
                      data={dataConvert}
                      style={styles.styleFlastlist}
                      renderItem={renderItem({ selectItem, onPressItem })}
                      contentContainerStyle={styles.containerFlastList}
                    />
                  ) : null}
                  <AddUser style={styles.iconAdduser} />
                </View>
                <View style={styles.conVertDate}>
                  <Text style={styles.laybelUser}>Start Date</Text>
                  <TouchableOpacity onPress={activeStartDateTimePicker} style={styles.StartDate}>
                    <Text>{startDate}</Text>
                    <Calerdar style={styles.IconCalendar} />
                  </TouchableOpacity>
                </View>
                <View style={styles.conVertDate}>
                  <Text style={styles.laybelUser}>End Date</Text>
                  <TouchableOpacity onPress={activeEndDateTimePicker} style={styles.StartDate}>
                    <Text>{endDate}</Text>
                    <Calerdar style={styles.IconCalendar} />
                  </TouchableOpacity>
                </View>
                <DateTimePickerModal
                  isVisible={isVisableStartDate}
                  mode="datetime"
                  onConfirm={(date) => handleDatePickedStart({ date })}
                  onCancel={hideStartDateTimePicker}
                  modalStyleIOS={{ width: width, marginHorizontal: 0 }}
                />
                <DateTimePickerModal
                  isVisible={isVisableEndDate}
                  mode="datetime"
                  onConfirm={(date) => handleDatePickedEnd({ date })}
                  onCancel={hideStartDateTimePicker}
                  style={{ width: width }}
                />
              </View>
            </TouchableWithoutFeedback>
            <View style={styles.footer}>
              <Indicator footer step={1} />
              <View style={styles.btnFooter}>
                <TouchableOpacity
                  onPress={btnPrevious}
                  style={styles.btnPrevioud}>
                  <Text style={styles.txtPrevious}>PREVIOUS</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  disabled={!isValidate}
                  onPress={onFinishCreateSteps} style={[styles.btnFinish, isValidate && { backgroundColor: Colors.blueEgyptian }]}>
                  <Text style={styles.txtFinish}>FINISH</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAvoidingView>
  )
}

export default pipe(
  withState('isVisableStartDate', 'setVisableStartDate', false),
  withState('isVisableEndDate', 'setVisableEndDate', false),
  withState('startDate', 'setStartDate', ''),
  withState('endDate', 'setEndDate', ''),
  withState('isEnable', 'setIsEnable', false),
  withState('selectItem', 'setSelectItem', {}),
  withState('textSearch', 'setTextSearch', ''),
  withState('data', 'setData', data),
  withState('isVisableFinish', 'setVisiableFinish', false),
  withProps(({ data, textSearch }) => {
    if (textSearch) {
      data = _.filter(data, (item) => item.name.toLowerCase().includes(textSearch.toLowerCase()))
    }
    return {
      dataConvert: data,
    }
  }),
  withHandlers({
    openDropDow: ({ setIsEnable }) => () => {
      setIsEnable(true)
    },
    closeDropDow: ({ setIsEnable }) => () => {
      setIsEnable(false)
    },
  }),
  withHandlers({
    changeText: ({ setTextSearch, openDropDow }) => (text) => {
      setTextSearch(text)
      openDropDow()
    },
    onPressItem: ({ setSelectItem, setTextSearch, closeDropDow }) => ({ item }) => () => {
      setSelectItem(item)
      setTextSearch(item.name)
      closeDropDow()
    },
    onDateChange: ({ setStartDate }) => ({ date }) => () => {
      setStartDate(date)
    },
    hideStartDateTimePicker: ({ setVisableStartDate }) => () => {
      setVisableStartDate(false)
    },
    activeStartDateTimePicker: ({ setVisableStartDate }) => () => {
      setVisableStartDate(true)
    },
    hideEndDateTimePicker: ({ setVisableEndDate }) => () => {
      setVisableEndDate(false)
    },
    activeEndDateTimePicker: ({ setVisableEndDate }) => () => {
      setVisableEndDate(true)
    },
  }),
  withHandlers({
    handleDatePickedStart: ({ hideStartDateTimePicker, setStartDate }) => ({ date }) => {
      let convertDate = moment(date).format('DD/MM/YYYY')
      setStartDate(convertDate)
      hideStartDateTimePicker()
    },
    handleDatePickedEnd: ({ hideEndDateTimePicker, setEndDate }) => ({ date }) => {
      let convertDate = moment(date).format('DD/MM/YYYY')
      setEndDate(convertDate)
      hideEndDateTimePicker()
    },
    onFinishCreateSteps: ({ navigation }) => () =>
      navigation.navigate('PopUpStack', {
        screen: 'PopupSuccess',
        params: { content: 'New assignment has been made. You can view it in the Task list.', callbackFunc: () => navigation.goBack() },
      }),
    btnPrevious: ({ navigation }) => () => {
      navigation.goBack()
    }
  }),
  withProps(({ textSearch, startDate, endDate }) => {
    const isValidate = textSearch !== '' && startDate !== '' && endDate !== ''
    return { isValidate }
  }),

  assignUser,
)

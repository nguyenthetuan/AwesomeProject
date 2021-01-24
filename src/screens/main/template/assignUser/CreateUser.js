import React from 'react'
import { TouchableOpacity, View, StyleSheet, TextInput, ScrollView } from 'react-native'
import { Colors, Fonts, Vectors } from 'src/assets'
import { Text } from 'react-native-elements'
import { pipe, withHandlers, withState } from '@synvox/rehook'
import * as Yup from 'yup'
import { Formik } from 'formik'
import _ from 'lodash'
import Header from 'src/screens/components/Header'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  flex1: {
    flex: 1,
  },
  textInput: {
    width: '100%',
    height: 46,
    borderRadius: 9,
    backgroundColor: Colors.whiteLilac,
    paddingHorizontal: 10,
    justifyContent: 'center',
    fontSize: Fonts.fontSize[16],
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    color: Colors.black02,
    marginBottom: 18,
  },
  label: {
    fontSize: Fonts.fontSize[16],
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    color: Colors.blueEgyptian,
    marginBottom: 5,
    marginLeft: 10,
  },
  rowLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  error: {
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    fontSize: Fonts.fontSize[14],
    color: Colors.redFireBrick,
  },
  btAdd: {
    width: '100%',
    height: 46,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.greyChateau,
    position: 'absolute',
    bottom: 35,
  },
  textAdd: {
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    fontSize: Fonts.fontSize[16],
    color: Colors.greyZircon,
  },
  wrapperContent: {
    flex: 1,
    height: '100%',
  },
  rowInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconShowPass: {
    position: 'absolute',
    right: 0,
    top: 16,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const ShowPassword = Vectors.CloseEye
const HidePassword = Vectors.OpenEye
const Information = Vectors.Information

const validateForm = Yup.object({
  name: Yup.string().required('Name is require'),
  userName: Yup.string().required('User name is not correct'),
  password: Yup.string().required('Password is require'),
  address: Yup.string().required('Address is require'),
  phoneNumber: Yup.number('Phone no is not correct').required('Phone number is require'),
  email: Yup.string().email('Email is not correct').required('Email is require'),
})

const inputForm = ({ value, handleChange, key, label, error, isShowPassword, changeShowPassword, onPressCheckUserName }) => {
  return (
    <>
      <View style={styles.rowLabel}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.error}>{error}</Text>
      </View>
      <View style={styles.rowInput}>
        <TextInput
          secureTextEntry={key === 'password' ? !isShowPassword : false}
          style={styles.textInput}
          value={value}
          onChangeText={handleChange(key)}
        />
        {key === 'password' ? (
          !isShowPassword ? (
            <TouchableOpacity style={styles.iconShowPass} onPress={changeShowPassword}>
              <ShowPassword />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.iconShowPass} onPress={changeShowPassword}>
              <HidePassword />
            </TouchableOpacity>
          )
        ) : key === 'userName' ? (
          <TouchableOpacity style={styles.iconShowPass} onPress={onPressCheckUserName(value)}>
            <Information />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  )
}

const checkEmptyForm = (values) => {
  let result = false
  _.forEach(Object.values(values), (item) => {
    if (item !== '') {
      result = true
    } else {
      result = false
    }
  })
  return result
}

const CreateUser = ({ onPressAdd, changeShowPassword, isShowPassword, onPressCheckUserName }) => {
  const refForm = React.useRef()
  return (
    <>
      <Header title="Add User" />
      <View style={styles.container}>
        <Formik
          innerRef={refForm}
          validationSchema={validateForm}
          initialValues={{ name: '', userName: '', password: '', address: '', phoneNumber: '', email: '' }}>
          {({ handleChange, values, errors }) => {
            const isActiveAdd = _.isEmpty(errors) && checkEmptyForm(values)
            return (
              <ScrollView style={styles.flex1} showsVerticalScrollIndicator={false} contentContainerStyle={styles.wrapperContent}>
                {inputForm({ value: values.name, key: 'name', label: 'Name', error: errors.name, handleChange: handleChange })}
                {inputForm({
                  value: values.userName,
                  key: 'userName',
                  label: 'Username',
                  error: errors.userName,
                  handleChange: handleChange,
                  onPressCheckUserName,
                })}
                {inputForm({
                  value: values.password,
                  key: 'password',
                  label: 'Password',
                  error: errors.password,
                  handleChange: handleChange,
                  isShowPassword,
                  changeShowPassword,
                })}
                {inputForm({ value: values.address, key: 'address', label: 'Address', error: errors.address, handleChange: handleChange })}
                {inputForm({
                  value: values.phoneNumber,
                  key: 'phoneNumber',
                  label: 'Phone No',
                  error: errors.phoneNumber,
                  handleChange: handleChange,
                })}
                {inputForm({ value: values.email, key: 'email', label: 'Email', error: errors.email, handleChange: handleChange })}
                <TouchableOpacity
                  onPress={onPressAdd(refForm)}
                  style={{ ...styles.btAdd, ...(isActiveAdd && { backgroundColor: Colors.blueEgyptian }) }}>
                  <Text style={{ ...styles.textAdd, ...(isActiveAdd && { color: Colors.white }) }}>ADD</Text>
                </TouchableOpacity>
              </ScrollView>
            )
          }}
        </Formik>
      </View>
    </>
  )
}

export default pipe(
  withState('isShowPassword', 'updateShowPassword', false),
  withHandlers({
    onPressAdd: () => (refForm) => () => {
      const values = refForm?.current?.values
    },
    changeShowPassword: ({ updateShowPassword, isShowPassword }) => () => {
      updateShowPassword(!isShowPassword)
    },
    onPressCheckUserName: () => (userName) => () => {},
  }),
  CreateUser,
)

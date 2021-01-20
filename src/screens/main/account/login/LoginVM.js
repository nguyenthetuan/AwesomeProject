import { pipe, withHandlers, withState } from '@synvox/rehook'
import View from './LoginV'

export default pipe(
  withState('userName', 'updateUserName', ''),
  withState('password', 'updatePassword', ''),
  withState('isPressLogin', 'updateIsPressLogin', false),
  withState('showPassword', 'updateShowPassword', false),
  withHandlers({
    onChangeText: ({ updateUserName, updatePassword }) => (key) => (value) => {
      if (key === 'userName') {
        updateUserName(value)
      } else {
        updatePassword(value)
      }
    },
    onPressLogin: ({ updateIsPressLogin, userName, password, navigation }) => () => {
      updateIsPressLogin(true)
      if (!userName || !password) {
        return
      }
      navigation.reset({
        index: 0,
        routes: [{ name: 'BottomStack' }],
      })
    },
    onChangeShowPass: ({ updateShowPassword }) => (value) => () => {
      updateShowPassword(value)
    },
  }),
  View,
)

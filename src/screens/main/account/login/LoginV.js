import React from 'react'
import { TouchableOpacity, View, StyleSheet, Image, TextInput } from 'react-native'
import { Text } from 'react-native-elements'
import { Fonts, Colors, Vectors } from 'src/assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blueEgyptian,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  imageLogo: {
    width: 255,
    height: 46,
    alignSelf: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: Fonts.fontSize[16],
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    color: Colors.white,
    marginLeft: 10,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 46,
    borderRadius: 9,
    backgroundColor: Colors.whiteLilac,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: Fonts.fontSize[16],
    fontFamily: Fonts.fontFamily.NunitoSansLight,
  },
  btLogin: {
    height: 46,
    borderRadius: 13,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: Colors.whiteQuartz,
    marginBottom: 10,
  },
  textLogin: {
    fontSize: Fonts.fontSize[16],
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    color: Colors.blueEgyptian,
  },
  rowLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textErr: {
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    fontSize: Fonts.fontSize[14],
    color: Colors.white,
  },
  textForgetPassword: {
    color: Colors.white,
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
    fontSize: Fonts.fontSize[12],
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  iconShowPass: {
    position: 'absolute',
    right: 0,
    top: 16,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

const Login = ({ userName, password, onChangeText, isPressLogin, onPressLogin, showPassword, onChangeShowPass }) => {
  return (
    <View style={styles.container}>
      <Image source={require('src/assets/images/logo.png')} style={styles.imageLogo} />

      <View style={styles.rowLabel}>
        <Text style={styles.label}>Username</Text>
        {isPressLogin && !userName && <Text style={styles.textErr}>User name is not correct</Text>}
      </View>
      <TextInput style={styles.input} value={userName} onChangeText={onChangeText('userName')} />

      <View style={styles.rowLabel}>
        <Text style={styles.label}>Password</Text>
        {isPressLogin && !password && <Text style={styles.textErr}>Password is not correct</Text>}
      </View>
      <View style={styles.rowPassword}>
        <TextInput style={styles.input} value={password} onChangeText={onChangeText('password')} secureTextEntry={!showPassword} />
        {!showPassword ? (
          <TouchableOpacity style={styles.iconShowPass} onPress={onChangeShowPass(true)}>
            <Vectors.CloseEye />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.iconShowPass} onPress={onChangeShowPass(false)}>
            <Vectors.OpenEye />
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity style={styles.btLogin} onPress={onPressLogin}>
        <Text style={styles.textLogin}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.textForgetPassword}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Login

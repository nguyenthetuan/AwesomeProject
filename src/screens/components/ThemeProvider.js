import React from 'react'
import {ThemeProvider} from 'react-native-elements'
import {Colors, Fonts} from 'src/assets'

const customTheme = {
  Text: {
    style: {
      fontFamily: Fonts.fontFamily.NunitoSansRegular,
      fontSize: Fonts.fontSize[14],
      color: Colors.black02,
    },
  },
}
const Theme = ({children}) => {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
}

export default Theme

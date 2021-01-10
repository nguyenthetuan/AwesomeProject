import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import React from 'react'
import { pipe } from '@synvox/rehook'
import MainStack from 'src/navigation/MainStack'
import ThemeProvider from 'src/screens/components/ThemeProvider'

enableScreens()

const App = () => {
  return (
    <ThemeProvider>
      <MainStack />
    </ThemeProvider>
  )
}

export default pipe(App)

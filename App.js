import 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import React from 'react'
import { pipe } from '@synvox/rehook'
import RootStack from 'src/navigation/RootStack'
import ThemeProvider from 'src/screens/components/ThemeProvider'

enableScreens()

const App = () => {
  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  )
}

export default pipe(App)

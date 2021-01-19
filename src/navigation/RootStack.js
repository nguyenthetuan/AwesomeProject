import React from 'react'
import MainStack from './MainStack'
import { pipe } from '@synvox/rehook'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import PopUpStack from './PopupStack'

const Stack = createStackNavigator()

const RootStack = ({ ...props }) => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainStack"
          mode="modal"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: 'transparent' },
            cardOverlayEnabled: true,
          }}>
          <Stack.Screen
            name="MainStack"
            component={MainStack}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PopUpStack"
            component={PopUpStack}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default pipe(RootStack)

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PopUpConfirm from 'src/screens/components/PopupConfirm'
import PopupSuccess from 'src/screens/components/PopupSuccess'

const Stack = createStackNavigator()
const PopUpStack = () => {
  return (
    <Stack.Navigator initialRouteName="PopUpConfirm" mode="modal">
      <Stack.Screen
        name="PopUpConfirm"
        component={PopUpConfirm}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
        }}
      />
      <Stack.Screen
        name="PopupSuccess"
        component={PopupSuccess}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent' },
          cardOverlayEnabled: true,
        }}
      />
    </Stack.Navigator>
  )
}

export default PopUpStack

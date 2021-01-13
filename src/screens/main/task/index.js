import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { pipe } from '@synvox/rehook'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Inprogress from './litst/Inprogress'
import New from './litst/New'
import Completed from './litst/Completed'
import Overdue from './litst/Overdue'
import All from './litst/All'
import { Colors, Fonts } from 'src/assets'

const { width } = Dimensions.get('window')

const Tab = createMaterialTopTabNavigator()

const TaskStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: Colors.orangeNeonCarrot,
        inactiveTintColor: Colors.white,
        labelStyle: styles.labelStyle,
        style: { backgroundColor: '#0E38B1', height: 80, justifyContent: 'flex-end' },
        tabStyle: { justifyContent: 'space-between' },
        indicatorStyle: styles.indicatorStyle,
        // scrollEnabled:true
      }}>
      <Tab.Screen name="new" component={New} options={{ tabBarLabel: 'New' }} />
      <Tab.Screen name="Inprogress" component={Inprogress} />
      <Tab.Screen name="Completed" component={Completed} />
      <Tab.Screen name="Overdue" component={Overdue} />
      <Tab.Screen name="All" component={All} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
    textTransform: 'capitalize',
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    width: width / 5,
  },
  indicatorStyle: {
    backgroundColor: '#F98E2F',
    height: 1,
    width: width / 5,
    borderBottomWidth: 1,
    borderBottomColor: '#F98E2F',
    borderBottomWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
})
export default pipe(TaskStack)

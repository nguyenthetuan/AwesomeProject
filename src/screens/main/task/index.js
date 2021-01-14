import React from 'react'
import { StyleSheet, Dimensions, Text } from 'react-native'
import { pipe } from '@synvox/rehook'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Inprogress from './litst/Inprogress'
import New from './litst/New'
import Completed from './litst/Completed'
import Overdue from './litst/Overdue'
import All from './litst/All'
import { Colors, Fonts } from 'src/assets'

const Tab = createMaterialTopTabNavigator()

const TaskStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="New"
      isAutoSizeIndicator={true}
      tabBarOptions={{
        activeTintColor: Colors.orangeNeonCarrot,
        allowFontScaling: true,
        inactiveTintColor: Colors.white,
        labelStyle: styles.labelStyle,
        style: styles.styleTopMenu,
        tabStyle: { justifyContent: 'space-between', width: 'auto' },
        contentContainerStyle: { justifyContent: 'space-between', width: 'auto' },
        indicatorStyle: styles.indicatorStyle,
        // scrollEnabled: true
      }}
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused, color }) => {
          let label
          switch (route.name) {
            case 'New':
              return (label = focused ?
                <Text style={styles.txtLabelActive}>New</Text>
                :
                <Text style={styles.labelStyle}>New</Text>
              )
            case 'Inprogress':
              return (label = focused ? <Text style={styles.txtLabelActive}>In Progress</Text> : <Text style={styles.labelStyle}>In Progress</Text>)
            case 'Completed':
              return (label = focused ? <Text style={styles.txtLabelActive}>Completed</Text> : <Text style={styles.labelStyle}>Completed</Text>)
            case 'Overdue':
              return (label = focused ? <Text style={styles.txtLabelActive}>Overdue</Text> : <Text style={styles.labelStyle}>Overdue</Text>)
            case 'All':
              return (label = focused ? <Text style={styles.txtLabelActive}>All</Text> : <Text style={styles.labelStyle}>All</Text>)
          }
          return label
        },
      })}
    >
      <Tab.Screen name="New" component={New} />
      <Tab.Screen name="Inprogress" component={Inprogress} />
      <Tab.Screen name="Completed" component={Completed} />
      <Tab.Screen name="Overdue" component={Overdue} />
      <Tab.Screen name="All" component={All} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontFamily: Fonts.fontFamily.NunitoSansRegular,
    color: Colors.white
  },
  txtLabelActive: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    color: Colors.orangeNeonCarrot,
  },
  indicatorStyle: {
    backgroundColor: Colors.LightningYellow,
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LightningYellow,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  styleTopMenu: {
    backgroundColor: Colors.blueEgyptian,
    height: 80,
    justifyContent: 'flex-end',
  },
})
export default pipe(TaskStack)

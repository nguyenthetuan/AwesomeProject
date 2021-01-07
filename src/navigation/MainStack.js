/* eslint-disable react/jsx-no-bind */

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import TaskStack from './TaskStack'
import EquipmentStack from './EquipmentStack'
import ProfileStack from './ProfileStack'
import UsersStack from './UsersStack'
import {pipe} from '@synvox/rehook'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import {Colors, Fonts} from 'src/assets'
import {createStackNavigator} from '@react-navigation/stack'
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs'
import {Vectors} from 'src/assets'

const styles = StyleSheet.create({
  textMenu: {
    fontSize: Fonts.fontSize[14],
    textAlign: 'center',
    marginTop: 12,
  },
  wrapperIcon: {
    marginTop: 18,
    marginBottom: 4,
  },
  tabBar: {
    borderTopWidth: 0,
    elevation: 14,
    marginTop: -40,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  btAddNew: {
    marginTop: -40,
  },
})

const IconTask = Vectors.task
const IconUsers = Vectors.users
const IconEquipment = Vectors.equipment
const IconProfile = Vectors.profile
const IconAddNew = Vectors.addNew

const AddNew = () => {
  return (
    <TouchableOpacity style={styles.btAddNew}>
      <IconAddNew />
    </TouchableOpacity>
  )
}

const ContainerStack = createStackNavigator()
const BottomTab = createBottomTabNavigator()
const getColor = (isFocused) =>
  isFocused ? Colors.blueEgyptian : Colors.greyChateau

const getFont = (isFocused) =>
  isFocused
    ? Fonts.fontFamily.NunitoSansBold
    : Fonts.fontFamily.NunitoSansSemiBold

const AddNewNull = () => {
  return null
}

const BottomStackV = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ProfileStack"
      tabBar={(props) => (
        <BottomTabBar
          {...props}
          style={{
            ...styles.tabBar,
          }}
        />
      )}>
      <BottomTab.Screen
        component={ProfileStack}
        name="ProfileStack"
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                ...styles.textMenu,
                fontFamily: getFont(focused),
                color: getColor(focused),
              }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View style={styles.wrapperIcon}>
              <IconProfile fill={getColor(focused)} height={24} width={24} />
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        component={TaskStack}
        name="TaskStack"
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                ...styles.textMenu,
                fontFamily: getFont(focused),
                color: getColor(focused),
              }}>
              Task
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View style={styles.wrapperIcon}>
              <IconTask fill={getColor(focused)} height={24} width={24} />
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name="AddNew"
        component={AddNewNull}
        options={{
          tabBarButton: () => <AddNew />,
        }}
      />

      <BottomTab.Screen
        component={EquipmentStack}
        name="EquipmentStack"
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                ...styles.textMenu,
                fontFamily: getFont(focused),
                color: getColor(focused),
              }}>
              Equipment
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View style={styles.wrapperIcon}>
              <IconEquipment fill={getColor(focused)} height={24} width={24} />
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        component={UsersStack}
        name="UsersStack"
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                ...styles.textMenu,
                fontFamily: getFont(focused),
                color: getColor(focused),
              }}>
              Users
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View style={styles.wrapperIcon}>
              <IconUsers fill={getColor(focused)} height={24} width={24} />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

const BottomStackVM = pipe(BottomStackV)

const MainStack = () => {
  return (
    <NavigationContainer>
      <ContainerStack.Navigator initialRouteName="BottomStack">
        <ContainerStack.Screen
          component={BottomStackVM}
          name="BottomStack"
          options={{
            headerShown: false,
          }}
        />
      </ContainerStack.Navigator>
    </NavigationContainer>
  )
}

export default pipe(MainStack)

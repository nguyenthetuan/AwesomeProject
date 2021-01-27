/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-bind */
import React from 'react'
import TaskStack from './TaskStack'
import EquipmentStack from './EquipmentStack'
import ProfileStack from './ProfileStack'
import UsersStack from './UsersStack'
import DetailTaskStack from 'src/screens/main/task/detail/DetailVM'
import SortTaskStack from 'src/screens/main/task/litst/sort/SortVM'
import Login from 'src/screens/main/account/login/LoginVM'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { pipe, withHandlers } from '@synvox/rehook'
import { Text } from 'react-native-elements'
import { Colors, Fonts, Vectors } from 'src/assets'
import { createStackNavigator } from '@react-navigation/stack'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'
import Template from 'src/screens/main/template/list/listVM'
import DetailTemplate from 'src/screens/main/template/detail/detailVM'
import NewTaskTemplate from '@src/screens/main/template/newTaskTemplate'
import CreatStepTaskTemplate from 'src/screens/main/template/newTaskTemplate/listStep/newTemplate/NewTaskTemplateVM'
import CreateUser from 'src/screens/main/template/assignUser/CreateUser'
import AssignUser from '@src/screens/main/template/assignUser/AssignUser'

const styles = StyleSheet.create({
  btAddNew: {
    marginTop: -40,
  },
  tabBar: {
    borderTopWidth: 0,
    elevation: 14,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  textMenu: {
    fontSize: Fonts.fontSize[14],
    marginTop: 12,
    marginBottom: 4,
    textAlign: 'center',
  },
  wrapperIcon: {
    marginTop: 20,
  },
})

const IconTask = Vectors.task
const IconUsers = Vectors.users
const IconEquipment = Vectors.equipment
const IconProfile = Vectors.profile
const IconAddNew = Vectors.addNew

const AddNew = ({ navigation, onPressTemplate }) => {
  return (
    <TouchableOpacity onPress={onPressTemplate} style={styles.btAddNew}>
      <IconAddNew />
    </TouchableOpacity>
  )
}

const ContainerStack = createStackNavigator()
const BottomTab = createBottomTabNavigator()
const getColor = (isFocused) => (isFocused ? Colors.blueEgyptian : Colors.greyChateau)

const getFont = (isFocused) => (isFocused ? Fonts.fontFamily.NunitoSansBold : Fonts.fontFamily.NunitoSansSemiBold)

const AddNewNull = () => {
  return null
}

const BottomStackV = ({ navigation, onPressTemplate }) => {
  return (
    <BottomTab.Navigator
      initialRouteName="TaskStack"
      tabBar={(props) => {
        return (
          <SafeAreaInsetsContext.Consumer>
            {(insets) => {
              return (
                <BottomTabBar
                  {...props}
                  style={{
                    ...styles.tabBar,
                    height: insets.bottom ? 94 : 60,
                  }}
                />
              )
            }}
          </SafeAreaInsetsContext.Consumer>
        )
      }}>
      <BottomTab.Screen
        component={ProfileStack}
        name="ProfileStack"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...styles.textMenu,
                fontFamily: getFont(focused),
                color: getColor(focused),
              }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
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
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...styles.textMenu,
                fontFamily: getFont(focused),
                color: getColor(focused),
              }}>
              Task
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.wrapperIcon}>
              <IconTask fill={getColor(focused)} height={24} width={24} />
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        component={AddNewNull}
        name="AddNew"
        options={{
          tabBarButton: (props) => {
            return <AddNew navigation={navigation} onPressTemplate={onPressTemplate} />
          },
        }}
      />

      <BottomTab.Screen
        component={EquipmentStack}
        name="EquipmentStack"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...styles.textMenu,
                fontFamily: getFont(focused),
                color: getColor(focused),
              }}>
              Equipment
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
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
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                ...styles.textMenu,
                fontFamily: getFont(focused),
                color: getColor(focused),
              }}>
              Users
            </Text>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.wrapperIcon}>
              <IconUsers fill={getColor(focused)} height={24} width={24} />
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

const BottomStackVM = pipe(
  withHandlers({
    // onPressTemplate: ({ navigation }) => () => navigation.navigate('CreateUser'),
    onPressTemplate: ({ navigation }) => () => navigation.navigate('Template'),
  }),
  BottomStackV,
)

const MainStack = ({ navigation }) => {
  return (
    <>
      <ContainerStack.Navigator initialRouteName="BottomStack">
        <ContainerStack.Screen
          component={BottomStackVM}
          name="BottomStack"
          options={{
            headerShown: false,
          }}
        />
        <ContainerStack.Screen component={Login} name="Login" options={{ headerShown: false }} />
        <ContainerStack.Screen component={DetailTaskStack} name="DetailTask" options={{ headerShown: false }} />
        <ContainerStack.Screen component={SortTaskStack} name="SortTask" options={{ headerShown: false }} />
        <ContainerStack.Screen component={Template} name="Template" options={{ headerShown: false }} />
        <ContainerStack.Screen component={DetailTemplate} name="DetailTemplate" options={{ headerShown: false }} />
        <ContainerStack.Screen component={NewTaskTemplate} name="NewTaskTemplate" options={{ headerShown: false }} />
        <ContainerStack.Screen component={CreatStepTaskTemplate} name="CreatStepTaskTemplate" options={{ headerShown: false }} />
        <ContainerStack.Screen component={CreateUser} name="CreateUser" options={{ headerShown: false }} />
        <ContainerStack.Screen component={AssignUser} name="AssignUser" options={{ headerShown: false }} />
      </ContainerStack.Navigator>
    </>
  )
}

export default pipe(MainStack)

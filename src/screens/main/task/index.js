import React from 'react'
import { StyleSheet, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { pipe, withHandlers } from '@synvox/rehook'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Inprogress from './litst/Inprogress'
import New from './litst/New'
import Completed from './litst/Completed'
import Overdue from './litst/Overdue'
import All from './litst/All'
import { Colors, Fonts } from 'src/assets'
import { Text } from 'react-native-elements'

const styles = StyleSheet.create({
  labelTab: {
    fontSize: Fonts.fontSize[16],
  },
  wrapperCustomHeaderBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.blueEgyptian,
    paddingTop: 42,
  },
  indicator: {
    height: 2,
    backgroundColor: Colors.orangeNeonCarrot,
    marginTop: 15,
  },
})

const Tab = createMaterialTopTabNavigator()

const CustomTabBarV = ({ onPressItem, state }) => {
  const tabs = ['New', 'In progress', 'Completed', 'Overdue', 'All']
  return (
    <SafeAreaView style={{ backgroundColor: Colors.blueEgyptian }}>
      <View style={styles.wrapperCustomHeaderBar}>
        {tabs.map((item, index) => {
          const isActiveTab = index === state.index
          const color = isActiveTab ? Colors.orangeNeonCarrot : Colors.white
          return (
            <>
              <TouchableOpacity onPress={onPressItem(index)}>
                <Text
                  style={{
                    ...styles.labelTab,
                    color,
                    ...(isActiveTab && { fontFamily: Fonts.fontFamily.NunitoSansBold }),
                    ...(index === 0 && { marginLeft: 15 }),
                    ...(index === 4 && { marginRight: 15 }),
                  }}>
                  {item}
                </Text>
                {isActiveTab && <View style={{ ...styles.indicator }} />}
              </TouchableOpacity>
            </>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

const tabBar = (props) => <CustomTabBarVM {...props} />

const CustomTabBarVM = pipe(
  withHandlers({
    onPressItem: ({ navigation, state }) => (index) => () => {
      navigation.navigate(state.routeNames[index])
    },
  }),
  CustomTabBarV,
)
const TaskStack = () => {
  return (
    <Tab.Navigator initialRouteName="New" tabBar={tabBar}>
      <Tab.Screen name="New" component={New} />
      <Tab.Screen name="In progress" component={Inprogress} />
      <Tab.Screen name="Completed" component={Completed} />
      <Tab.Screen name="Overdue" component={Overdue} />
      <Tab.Screen name="All" component={All} />
    </Tab.Navigator>
  )
}

export default pipe(TaskStack)

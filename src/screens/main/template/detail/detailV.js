import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import { pipe, withHandlers } from '@synvox/rehook'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import styles from './styles'
import { Colors, Fonts } from 'src/assets'
import Header from 'src/screens/components/Header'
import General from './general/General'
import Steps from './steps/Steps'

const Tab = createMaterialTopTabNavigator()

const CustomTabBarV = ({ onPressItem, state }) => {
  const tabs = ['General', 'Steps']
  return (
    <View style={styles.wrapperCustomHeaderBar}>
      {tabs.map((item, index) => {
        const isActiveTab = index === state.index
        const color = isActiveTab ? Colors.orangeNeonCarrot : Colors.greyChateau
        return (
          <View key={index}>
            <TouchableOpacity key={index} onPress={onPressItem(index)}>
              <Text style={{ ...styles.labelTab, color, ...(isActiveTab && { fontFamily: Fonts.fontFamily.NunitoSansBold }) }}>{item}</Text>
            </TouchableOpacity>
            {index < tabs.length - 1 && <View style={styles.lineBorder} />}
          </View>
        )
      })}
    </View>
  )
}

const CustomTabBarVM = pipe(
  withHandlers({
    onPressItem: ({ navigation, state }) => (index) => () => {
      navigation.navigate(state.routeNames[index])
    },
  }),
  CustomTabBarV,
)

const tabBar = (props) => <CustomTabBarVM {...props} />

const Detail = () => {
  return (
    <View style={styles.container}>
      <Header title="Task Details" leftTittle="Back" />

      <Tab.Navigator initialRouteName="General" tabBar={tabBar}>
        <Tab.Screen component={General} name="General" />
        <Tab.Screen component={Steps} name="Steps" />
      </Tab.Navigator>
    </View>
  )
}

export default Detail

/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from 'react'
import { NavigationContext } from '@react-navigation/native'
import _ from 'lodash'

export const withNavigationContext = (props = {}) => {
  const navigation = useContext(NavigationContext)
  return _.assign({}, { ...props, navigation })
}

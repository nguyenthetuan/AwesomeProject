import React from 'react'
import Task from 'src/screens/main/task'
import { TouchableOpacity, Text, View } from 'react-native'

const TaskStack = ({ navigation, route }) => {
  // return <Task {...navigation, ...route} />
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate('DetailTask')}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TaskStack

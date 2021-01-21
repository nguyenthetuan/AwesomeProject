import React from 'react'
import { View, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors, Vectors } from 'src/assets'
import Indicator from 'src/screens/components/Indicator'
import styles from './Styles'

const AddIcon = Vectors.Add
const Up = Vectors.up
const Down = Vectors.down

const keyExtractor = (item, index) => `${index}`

const renderItem = ({ onPressStep, statusSteps, steps }) => ({ item, index }) => {
  return (
    <View>
      <TouchableOpacity style={[styles.btStep]} key={`${index}`} onPress={onPressStep(index)}>
        <Text style={styles.nameStep}>{`Step ${index + 1}: ${item?.Description}`}</Text>
        {statusSteps[index] ? <Up /> : <Down />}
      </TouchableOpacity>
      {statusSteps[index] && (
        <View style={styles.wrapperContentStep}>
          <Text style={styles.label}>Instruction</Text>
          <Text style={styles.desc}> {item?.Instruction} </Text>

          <Text style={[styles.label, styles.mt5]}>Equipment</Text>
          <View style={styles.rowEquipment}>
            <Image source={require('src/assets/images/qrCode.png')} style={styles.qrCode} />

            <View style={styles.wrapperRightContentEquipment}>
              <View style={styles.row}>
                <Text style={styles.labelInEquipment}>Model:</Text>
                <Text style={styles.desInEquipment}>{item?.EquiqmentInfo?.Model}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.labelInEquipment}>Serial:</Text>
                <Text style={styles.desInEquipment}>{item?.EquiqmentInfo?.SerialNumber}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.labelInEquipment}>Description:</Text>
                <Text style={{ ...styles.desInEquipment }}>{item?.EquiqmentInfo?.Description}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
      {index === steps.length - 1 && <View style={styles.line} />}
    </View>
  )
}

const ListStepV = ({ btnPrevious, onCreateNewStep, steps, onPressStep, statusSteps, onFinishCreateSteps }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>STEPS</Text>
      <ScrollView contentContainerStyle={styles.body}>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          data={steps}
          keyExtractor={keyExtractor}
          renderItem={renderItem({ onPressStep, statusSteps, steps })}
        />
        <TouchableOpacity style={styles.btnAddNew} onPress={onCreateNewStep}>
          <AddIcon size={20} color={Colors.blueEgyptian} />
          <Text style={styles.txtNewStep}>NEW STEP</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Indicator footer step={1} />
        <View style={styles.btnFooter}>
          <TouchableOpacity onPress={btnPrevious} style={styles.btnPrevioud}>
            <Text style={styles.txtPrevious}>PREVIOUS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.btnFinish, ...(steps.length && { backgroundColor: Colors.blueEgyptian }) }}
            disabled={!steps.length}
            onPress={onFinishCreateSteps}>
            <Text style={styles.txtFinish}>FINISH</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ListStepV

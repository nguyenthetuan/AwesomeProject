import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { Colors, Fonts } from 'src/assets'
import { pipe } from '@synvox/rehook'
import dayjs from 'dayjs'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  label: {
    fontSize: Fonts.fontSize[16],
    fontFamily: Fonts.fontFamily.NunitoSansBold,
    color: Colors.blueEgyptian,
  },
  desc: {
    fontSize: Fonts.fontSize[16],
    fontFamily: Fonts.fontFamily.NunitoSansLight,
    marginTop: 5,
  },
  mt15: {
    marginTop: 15,
  },
  mb10: {
    marginBottom: 4,
  },
  statusNew: {
    backgroundColor: Colors.orangeNeonCarrot,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  textStatusNew: {
    fontSize: Fonts.fontSize[12],
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
  },
  statusCompleted: {
    backgroundColor: Colors.blueEgyptian,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  textStatusCompleted: {
    color: Colors.white,
    fontSize: Fonts.fontSize[12],
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
  },
  statusOverDue: {
    backgroundColor: Colors.greyChateau,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  textStatusOverDue: {
    color: Colors.white,
    fontSize: Fonts.fontSize[12],
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
  },
  statusInprogress: {
    backgroundColor: Colors.whiteQuartz,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  textStatusInprogress: {
    color: Colors.black02,
    fontSize: Fonts.fontSize[12],
    fontFamily: Fonts.fontFamily.NunitoSansSemiBold,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percent: {
    marginLeft: 10,
    fontSize: Fonts.fontSize[12],
    color: Colors.blueEgyptian,
  },
})

const renderStatus = ({ status, percent }) => {
  switch (status) {
    case 'new':
      return (
        <View>
          <View style={styles.statusNew}>
            <Text style={styles.textStatusNew}>New</Text>
          </View>
        </View>
      )
    case 'completed':
      return (
        <View>
          <View style={styles.statusCompleted}>
            <Text style={styles.textStatusCompleted}>Completed</Text>
          </View>
        </View>
      )
    case 'overdue':
      return (
        <View style={styles.row}>
          <View>
            <View style={styles.statusOverDue}>
              <Text style={styles.textStatusCompleted}>Overdue</Text>
            </View>
          </View>
          <Text style={styles.percent}>{`${percent}% Done`}</Text>
        </View>
      )
    case 'inprogress':
      return (
        <View style={styles.row}>
          <View>
            <View style={styles.statusInprogress}>
              <Text style={styles.textStatusInprogress}>In Progress</Text>
            </View>
          </View>
          <Text style={styles.percent}>{`${percent}% Done`}</Text>
        </View>
      )
    default:
      break
  }
}

const TimeLine = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Start Date</Text>
      <Text style={styles.desc}>{dayjs(new Date()).format('DD/MM/YYYY')}</Text>
      <Text style={[styles.label, styles.mt15]}>End Date</Text>
      <Text style={styles.desc}>{dayjs('12-05-2021').format('DD/MM/YYYY')}</Text>
      <Text style={[styles.label, styles.mt15, styles.mb10]}>Status</Text>
      {renderStatus({ status: 'inprogress', percent: 10 })}
    </View>
  )
}

export default pipe(TimeLine)

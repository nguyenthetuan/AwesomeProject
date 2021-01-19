import { pipe, withHandlers, withState, withProps } from '@synvox/rehook'
import _ from 'lodash'
import listV from './listV'
import { dataTest } from './data'


export default pipe(
  withState('textSearch', 'setTextSearch', ''),
  withState('termData', 'setData', dataTest),
  withProps(({ data, textSearch, termData }) => {
    if (textSearch) {
      termData = _.filter(termData, (item) => item.title.toLowerCase().includes(textSearch.toLowerCase()))
    }
    return {
      dataConvert: termData,
    }
  }),
  withHandlers({
    onPressNewTemplate: ({ navigation }) => () => navigation.navigate('NewTaskTemplate'),
    onPressItem: ({ navigation }) => () => navigation.navigate('DetailTemplate'),
    changeText: ({ setTextSearch }) => (text) => {
      setTextSearch(text)
    },
    sortUp: () => (property) => {
      return (a, b) => {
        if (a[property] < b[property]) {
          return -1
        } else if (a[property] > b[property]) {
          return 1
        } else {
          return 0
        }
      }
    },
  }),
  withHandlers({
    sortDataConvert: ({ dataConvert, updateTermData, sortUp, setData }) => (typeSort) => {
      const dataUp = [...dataConvert.sort(sortUp('title'))]
      setData(dataUp)
    },
  }),
  listV
)
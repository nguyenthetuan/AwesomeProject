import ListView from './ListView'
import { pipe, withHandlers, withState, lifecycle, withProps } from '@synvox/rehook'
import { dataTest } from './data'
import _ from 'lodash'

export default pipe(
  withState('textSearch', 'setTextSearch', ''),
  withState('data', 'setData', dataTest),
  withState('termData', 'updateTermData', ({ data }) => {
    let dataFilter = []
    data.forEach((Element) => {
      if (Element.type === 3) {
        dataFilter.push(Element)
      }
    })
    return dataFilter
  }),
  withProps(({ data, textSearch, termData }) => {
    if (textSearch) {
      termData = _.filter(termData, (item) => item.title.toLowerCase().includes(textSearch.toLowerCase()))
    }
    return {
      dataConvert: termData,
    }
  }),
  withHandlers({
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
    sortDow: () => () => {
      return (a, b) => {
        if (a.title > b.title) {
          return -1
        } else if (a.title < b.title) {
          return 1
        } else {
          return 0
        }
      }
    },
  }),
  withHandlers({
    sortDataConvert: ({ dataConvert, updateTermData, sortDow, sortUp }) => (typeSort) => {
      switch (typeSort) {
        case 0:
          const dataUp = [...dataConvert.sort(sortUp('title'))]
          updateTermData(dataUp)
          break
        case 1:
          const dataDow = [...dataConvert.sort(sortDow())]
          updateTermData(dataDow)
          break
        case 2:
          const dataTimeStart = [...dataConvert.sort(sortUp('timeStart'))]
          updateTermData(dataTimeStart)
          break
        case 3:
          const dataTimeEnd = [...dataConvert.sort(sortUp('timeEnd'))]
          updateTermData(dataTimeEnd)
          break
        default:
          break
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      const { count, setCount } = this.props
    },
  }),
  ListView,
)

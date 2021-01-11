import ListView from './ListView'
import { pipe, withHandlers, withState } from '@synvox/rehook'
import { data } from './data'

export default pipe(
  withState('textSearch', 'setTextSearch', ''),
  withState('data', 'setData', data),
  withState('dataConvert', 'setDataConvert', ({ data }) => {
    let dataFilter = []
    data.forEach((Element) => {
      if (Element.type === 1) {
        dataFilter.push(Element)
      }
    })
    return dataFilter
  }),
  withHandlers({
    changeText: ({ setTextSearch, dataConvert, setDataConvert }) => (text) => {
      console.log('text', text)
      const datafilter = []
      dataConvert.forEach(element => {
        console.log('element', element)
        if (element.title.includes(text)) {
          datafilter.push(element)
        }
      });
      console.log('dataFilter', datafilter)
      setDataConvert(datafilter)
      // setTextSearch(text)
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
    sortDataConvert: ({ dataConvert, setDataConvert, sortDow, sortUp }) => (typeSort) => {
      switch (typeSort) {
        case 0:
          const dataUp = [...dataConvert.sort(sortUp('title'))]
          setDataConvert(dataUp)
          break
        case 1:
          const dataDow = [...dataConvert.sort(sortDow())]
          setDataConvert(dataDow)
          break
        case 2:
          const dataTimeStart = [...dataConvert.sort(sortUp('timeStart'))]
          setDataConvert(dataTimeStart)
          break
        case 3:
          const dataTimeEnd = [...dataConvert.sort(sortUp('timeEnd'))]
          setDataConvert(dataTimeEnd)
          break
        default:
          break
      }
    },
  }),
  ListView,
)

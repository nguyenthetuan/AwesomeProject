import ListView from './ListView'
import { pipe, withHandlers, withState, lifecycle } from '@synvox/rehook'
import { data } from './data'

export default pipe(
  withState('textSearch', 'setTextSearch', ''),
  withState('dataConvert', 'setData', data),
  withHandlers({
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
    sortDataConvert: ({ dataConvert, setData, sortDow, sortUp }) => (typeSort) => {
      switch (typeSort) {
        case 0:
          const dataUp = [...dataConvert.sort(sortUp('title'))]
          setData(dataUp)
          break
        case 1:
          const dataDow = [...dataConvert.sort(sortDow())]
          setData(dataDow)
          break
        case 2:
          const dataTimeStart = [...dataConvert.sort(sortUp('timeStart'))]
          setData(dataTimeStart)
          break
        case 3:
          const dataTimeEnd = [...dataConvert.sort(sortUp('timeEnd'))]
          setData(dataTimeEnd)
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

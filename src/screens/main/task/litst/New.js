import ListView from './ListView'
import { pipe, withHandlers, withState } from '@synvox/rehook'
import { data } from './data'

export default pipe(
  withState('count', 'setcount', 0),
  withState('data', 'setData', data),
  withState('dataConvert', 'setDataConvert', ({ data }) => {
    let dataFilter = []
    data.forEach((Element) => {
      if (Element.type === 3) {
        dataFilter.push(Element)
      }
    })
    console.log('dataFilter', dataFilter)
    return dataFilter
  }),
  withHandlers({
    updateCount: ({ count, setcount }) => () => {
      const u = 0
      setcount(u)
    },
    FilterData: ({ data }) => () => {
      let dataFilter = []
      data.forEach((Element) => {
        if (Element.type === 3) {
          dataFilter.push(Element)
        }
      })
      return dataFilter
    },
  }),
  ListView,
)

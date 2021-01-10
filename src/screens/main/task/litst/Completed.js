import ListView from './ListView'
import { pipe, withHandlers, withState, lifecycle } from '@synvox/rehook'
import { data } from './data'

export default pipe(
  withState('count', 'setCount', 0),
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
    updateCount: ({ count, setCount }) => () => {
      const u = 0
      setCount(u)
    },
  }),
  lifecycle({
    componentDidMount() {
      const { count, setCount } = this.props
    },
  }),
  ListView,
)

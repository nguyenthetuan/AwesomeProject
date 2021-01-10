import ListView from './ListView'
import { pipe, withHandlers, withState, lifecycle } from '@synvox/rehook'
import { data } from './data'

export default pipe(
  withState('count', 'setCount', 0),
  withState('dataConvert', 'setDataConvert', data),
  lifecycle({
    componentDidMount() {
      const { count, setCount } = this.props
    },
  }),
  ListView,
)

import SortV from './SortV'
import { pipe, withHandlers, withState, lifecycle } from '@synvox/rehook'

export default pipe(
  withState('data', 'setData', [
    {
      title: 'Task Name (A-Z)',
      index: 1,
    },
    {
      title: 'Task Name (Z-A)',
      index: 2,
    },
    {
      title: 'Latest Start Date',
      index: 3,
    },
    {
      title: 'Latest Due Date',
      index: 4,
    },
  ]),
  withState('indexSelect', 'setIndexSelect', Number),
  withHandlers({
    onPressItem: ({ setIndexSelect }) => (index) => () => {
      setIndexSelect(index)
    },
  }),
  SortV,
)

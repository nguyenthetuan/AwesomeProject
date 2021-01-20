import { pipe, withHandlers } from '@synvox/rehook'
import listStepV from './listStepV'

export default pipe(
  withHandlers({
    btnPrevious: ({ changeInitPage, refPager }) => () => {
      refPager?.current?.setPage(0)
    },
  }),
  listStepV,
)

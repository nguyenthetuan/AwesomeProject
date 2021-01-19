import { pipe, withState, withHandlers, withProps } from '@synvox/rehook'
import generalInforV from './generalInforV'

export default pipe(
  withState('name', 'setName', ''),
  withState('description', 'setDescription', ''),
  withState('disabledBtnNext', 'setDisableBtnNext', false),
  withHandlers({
    onPress: ({ setName, setDescription, validate }) => ({ index, text }) => {
      switch (index) {
        case 1:
          setName(text)
          break
        case 2:
          setDescription(text)
          break
        default:
          break
      }
    },
  }),
  withProps(({ name, description }) => {
    const isValidate = name !== '' && description !== ''
    return { isValidate }
  }),
  withHandlers({
    btnNext: ({ changeInitPage, refPager }) => () => {
      console.log('refPager', refPager)
      refPager?.current?.setPage(1)
      // changeInitPage()
    },
  }),
  generalInforV,
)

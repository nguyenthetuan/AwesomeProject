import { pipe, withHandlers, withState } from '@synvox/rehook'
import listStepV from './listStepV'
import { withNavigationContext } from 'src/screens/hooks/withNavigation'

export default pipe(
  withNavigationContext,
  withState('steps', 'updateSteps', []),
  withState('statusSteps', 'updateStatusSteps', ({ steps }) => {
    const arrStatus = []
    steps.map((item) => arrStatus.push(false))
    return arrStatus
  }),
  withHandlers({
    btnPrevious: ({ refPager }) => () => {
      refPager?.current?.setPage(0)
    },
    onCreateNewStep: ({ navigation, updateSteps, steps }) => () => {
      navigation.navigate('CreatStepTaskTemplate', {
        currentStep: steps.length + 1,
        callbackAddStep: (step) => {
          const newSteps = [...steps]
          newSteps.push(step)
          updateSteps(newSteps)
        },
      })
    },
    onPressStep: ({ statusSteps, updateStatusSteps }) => (step) => () => {
      const newStatus = [...statusSteps]
      newStatus[step] = !newStatus[step]
      updateStatusSteps(newStatus)
    },
    onFinishCreateSteps: ({ navigation }) => () =>
      navigation.navigate('PopUpStack', {
        screen: 'PopupSuccess',
        params: { content: 'New assignment has been made. You can view it in the Task list.', callbackFunc: () => navigation.goBack() },
      }),
  }),
  listStepV,
)

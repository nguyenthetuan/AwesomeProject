const sortBy = ({ navigation, setTypeSort, sortDataConvert, typeSort }) => {
  navigation.navigate('SortTask', {
    sortdata: (index) => {
      setTypeSort(index)
      sortDataConvert(index)
    },
    typeSort,
  })
}

export default sortBy

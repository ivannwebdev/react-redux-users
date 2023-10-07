import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { allActions } from '../strore/allActions/allActions'

function useActions() {
  const dispatch = useDispatch()

  return bindActionCreators(allActions, dispatch)
}

export { useActions }

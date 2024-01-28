import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../strore'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

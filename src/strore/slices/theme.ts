import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Theme = 'dark' | 'light'

function getTheme(): Theme {
  const theme = `${window?.localStorage?.getItem('theme')}`

  if (['light', 'dark'].includes(theme)) return theme as Theme

  return 'light'
}

const initialState = getTheme()

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (_, action: PayloadAction<Theme>) => action.payload
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

function getTheme() {
	const theme = `${window?.localStorage?.getItem('theme')}`

	if (['light', 'dark'].includes(theme)) return theme

	return 'light'
}

const initialState = getTheme()

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (_, action) => action.payload
	}
})

export const themeActions = themeSlice.actions
export default themeSlice.reducer

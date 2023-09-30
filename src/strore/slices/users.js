import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk(
	'users/getUsers',
	async () => {
		const url = 'https://jsonplaceholder.typicode.com/users'
		const response = await fetch(url)
		const data = await response.json()

		return data
	}
)

const initialState = {
	usersList: [],
	isLoading: false,
	error: null
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	extraReducers: {
		[getUsers.pending]: (state) => {
			state.isLoading = true
			state.error = null
		},
		[getUsers.fulfilled]: (state, action) => {
			state.isLoading = false
			state.usersList = action.payload
		},
		[getUsers.rejected]: (state, action) => {
			state.error = action.error.message
			state.isLoading = false
		}
	}
})

export const usersActions = {
	...usersSlice.actions,
	getUsers
}
export default usersSlice.reducer

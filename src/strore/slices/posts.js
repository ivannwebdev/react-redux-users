import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async(id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const posts = await response.json()

    return posts
  }
)

const initialState = {}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state, action) => {
      const id = action.meta.arg

      state[id] = {
        userPosts: [],
        isLoading: true,
        error: null
      }
    })

    builder.addCase(getPosts.fulfilled, (state, action) => {
      const id = action.meta.arg
      const posts = action.payload

      state[id].isLoading = false
      state[id].userPosts = posts
    })

    builder.addCase(getPosts.rejected, (state, action) => {
      const id = action.meta.arg
      const error = action.error.message

      state[id].isLoading = false
      state[id].error = error
    })
  }
})

export const postsActions = {
  ...postsSlice.actions,
  getPosts
}
export default postsSlice.reducer

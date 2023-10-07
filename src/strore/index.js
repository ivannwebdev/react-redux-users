import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './slices/users'
import postsReducer from './slices/posts'
import themeReducer from './slices/theme'


export const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    theme: themeReducer
  }
})

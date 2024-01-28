import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from './slices/users.ts'
import { postsApi } from './slices/posts.ts'
import themeReducer from './slices/theme.ts'

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    theme: themeReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware).concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from '../../types'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/posts'
  }),
  endpoints: (builder) => ({
    getUserPosts: builder.query<Post[], number>({
      query: (id) => `?userId=${id}`
    })
  })
})

export const { useGetUserPostsQuery } = postsApi

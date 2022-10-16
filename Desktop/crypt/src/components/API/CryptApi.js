import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const CryptApi = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
    }),
 UpdatePosts: builder.mutation({
      query: ({id, ...rest}) => ({
        url:'/posts',
        method: 'PUT',
        body: rest
      })
    }),
    async onQueryStarted({ id, ...rest }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData('getPost', id, (draft) => {
            Object.assign(draft, rest)
          })
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }), 
  }),
export const 
{ useGetPostsQuery,useUpdatePostsQuery
} = CryptApi

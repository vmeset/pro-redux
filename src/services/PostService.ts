import { IPost } from './../models/IPost';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['POST'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit: number = 5) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: result => ['POST']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: '/posts',
                body: post,
                method: 'POST'
            }),
            invalidatesTags: ["POST"]
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `posts/${post.id}`,
                body: post,
                method: 'PUT'
            }),
            invalidatesTags: ['POST']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `posts/${post.id}`,
                method: 'DELETE',
                body: post
            }),
            invalidatesTags: ['POST']
        })
    })
})
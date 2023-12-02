import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {Post} from "../../types/post";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: build => ({
        getPosts: build.query<Post[], void>({
            query: () => "/posts",
        }),
        getPostById: build.query<Post, string>({
            query: (postId) => `/posts/${postId}`,
        })
    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const {useGetPostsQuery, useGetPostByIdQuery} = api;


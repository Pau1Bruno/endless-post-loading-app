import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {Post} from "../../types/post";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: build => ({
        getPosts: build.query<Post[], number>({
            query: (start) => `posts?_start=${start}&_limit=20`,
            // Only have one cache entry because the arg always maps to one string
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            // Always merge incoming data to the cache entry
            merge: (currentCache, newItems) => {
                if (currentCache.length === 100) return currentCache;
                return [...currentCache, ...newItems];
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            }
        }),
        getPostById: build.query<Post, string>({
            query: (postId) => `/posts/${postId}`,
        })
    }),
});

export const {useGetPostsQuery, useGetPostByIdQuery} = api;


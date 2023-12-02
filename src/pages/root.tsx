import React from 'react';
import PostsListComponent from "../widgets/PostsList/PostsListComonent";
import {useGetPostsQuery} from "../store/reducers/apiSlice";


const Root = () => {
    const {data: posts, isLoading} = useGetPostsQuery()


    return (
        <>
            {!isLoading && <PostsListComponent posts={posts}/>}
        </>
    );
};

export default Root;
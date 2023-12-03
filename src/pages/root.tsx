import React, {useEffect, useRef} from 'react';
import PostsListComponent from "../widgets/PostsList/PostList";
import {useGetJSONQuery, useGetPostsQuery} from "../store/reducers/apiSlice";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../features/useTypedSelector";
import {AppDispatch} from "../store";
import {setOffset} from "../store/reducers/postSlice";

const Root = () => {
    const {offset} = useTypedSelector(state => state.posts);
    const dispatch = useDispatch<AppDispatch>();

    const lastElement = useRef<any>(null);
    const observer = useRef<IntersectionObserver>();
    const {data, isFetching, isLoading} = useGetPostsQuery(offset);
    const {data: posts} = useGetJSONQuery();
    const postsCount = posts ? posts.length - 20 : 100000;
    console.log(postsCount)

    const allPosts = data ?? []

    useEffect(() => {
        if (isLoading || isFetching || offset >= postsCount) return;
        if (observer.current) observer.current.disconnect();
        let callback = function (entries: any) {
            if (entries[0].isIntersecting) {
                dispatch(setOffset(offset + 20));
                return;
            }
        }

        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [isFetching]);

    return (
        <>
            <PostsListComponent posts={allPosts}/>
            <div ref={lastElement} id={"observer"} style={{height: 20}}></div>
        </>
    );
};

export default Root;
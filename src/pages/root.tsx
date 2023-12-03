import React, {useEffect, useRef, useState} from 'react';
import PostsListComponent from "../widgets/PostsList/PostList";
import {useGetPostsQuery} from "../store/reducers/apiSlice";

const Root = () => {
    const [offset, setOffset] = useState<number>(0);
    const lastElement = useRef<any>(null);
    const observer = useRef<IntersectionObserver>();
    const {data, isFetching, isLoading} = useGetPostsQuery(offset);
    const allPosts = data ?? []

    useEffect(() => {
        if (isLoading || isFetching || allPosts.length === 100) return;
        if (observer.current) observer.current.disconnect();
        let callback = function (entries: any) {
            if (entries[0].isIntersecting && offset <= 80) {
                setOffset(offset + 20)
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
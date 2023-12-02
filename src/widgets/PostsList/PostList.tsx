import React from 'react';
import styles from "./PostList.module.scss"
import PostComponent from "../Post/Post";
import {Post} from "../../types/post";

interface PostsListComponentProps {
    posts: Post[] | undefined
}

const PostsListComponent = ({posts}: PostsListComponentProps) => {
    return (
        <div className={styles.list_container}>
            {posts?.map((post: Post) =>
                <PostComponent post={post} key={`post${post.id}`}/>
            )}
        </div>
    );
};

export default PostsListComponent;

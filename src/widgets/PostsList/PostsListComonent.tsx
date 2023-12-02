import React from 'react';
import styles from "./PostsListComponent.module.scss"
import PostComponent from "../Post/PostComponent";
import {Post} from "../../types/post";

interface PostsListComponentProps {
    posts: Post[] | undefined
}

const PostsListComponent = ({posts}: PostsListComponentProps) => {
    return (
        <div className={styles.list_container}>
            {posts?.map((post: any) =>
                <PostComponent post={post} key={`post${post.id}`}/>
            )}
        </div>
    );
};

export default PostsListComponent;

import React from 'react';
import styles from "./Post.module.scss"
import {Post} from "../../types/post";
import {Link} from "react-router-dom";

interface PostComponentsProps {
    post: Post;
}

const PostComponents = ({post}: PostComponentsProps) => {
    return (
        <div className={styles.post_container}>
            <div className={styles.head}>
                <p>Id: {post.id}</p>
                <p>Title: {post.title}</p>
            </div>
            <div className={styles.body}>
                <p>Body: {post.body}</p>
                <Link to={`/posts/${post.id}`}>Просмотр</Link>
            </div>
        </div>
    );
};

export default PostComponents;

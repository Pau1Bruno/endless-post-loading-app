import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useGetPostByIdQuery} from "../../store/reducers/apiSlice";
import styles from "./post-id.module.scss";
import {InfinitySpin} from 'react-loader-spinner'
import Error from "../error/error";


const PostId = () => {
    const {postId} = useParams();
    const {data: post, isLoading} = useGetPostByIdQuery(postId ? postId : "1");

    const numberId = Number(postId);
    if (!Boolean(numberId) || numberId < 1 || numberId > 100) {
        return <Error/>
    }

    if (isLoading) return (
        <div className={styles.loader}>
            <InfinitySpin
                width='200'
                color="#4fa94d"
            />
        </div>
    )

    return (
        <div className={styles.post_id_container}>
            <Link to={"picasso-test/"}>
                {"<-"} Вернуться к списку постов
            </Link>
            <div className={styles.id}>
                <p>Id: {post?.id}</p>
            </div>
            <div className={styles.title}>
                <p>Title: {post?.title}</p>
            </div>
            <div className={styles.body}>
                <p>Body: {post?.body}</p>
            </div>
        </div>
    );
};

export default PostId;

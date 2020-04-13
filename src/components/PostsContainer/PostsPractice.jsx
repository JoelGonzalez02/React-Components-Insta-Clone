import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = props => {
    const [likes, setLikes] = useState(props.post.likes);

    const addLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="post-border">
            <PostHeader
                username={props.post.username}
                thumbailUrl={props.post.thumbailUrl}
                />
        <div className="post-image-wrapper">
            <img
                alt="post thumbnail"
                className="post-image"
                src={props.post.imageUrl}
                />
        </div>
        <LikeSection likes={likes} addLike={addLike} />
        <CommentSection
            postId={props.post.imageUrl}
            comments={props.post.comments}
            />
        </div>
    );
};

export default Post;


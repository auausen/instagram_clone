import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import postimage from "../../images/post.jpg"

const Post = () => {
  return (
    <div className="post__container">
      {/* Header */}
      <div className="post__header">
        <Avatar className="post__image" src="" />
        <div className="post__username">Username</div>
      </div>

      {/* Image */}
      <div>
        <img src={postimage} />
      </div>

      {/* Analytics */}
      <div></div>

      {/* Comment Section */}
      <div></div>
    </div>
  );
};

export default Post;

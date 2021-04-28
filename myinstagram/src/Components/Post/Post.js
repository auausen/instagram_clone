import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import postimage from "../../images/post.jpg";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";

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
        <img src={postimage} width="615px" />
      </div>

      {/* Analytics */}
      <div>
        <div style={{ marginLeft: "10px" }}>
          <img src="{love}" className="post_reactimage" />
          <img src="{comment}" className="post_reactimage" />
          <img src="{share}" className="post_reactimage" />
        </div>
        <div style={{ boldWeight: "bold", marginLeft: "20px" }}>7749 likes</div>
      </div>

      {/* Comment Section */}
      <div>
        <div className="post__comment">Hello comment 1</div>
        <div className="post__comment">Hello comment 1</div>
        <div className="post__comment">Hello comment 1</div>
        <div className="post__comment">Hello comment 1</div>
        <input text="text" className="post__commentbox" placeholder="add a comment..." />
      </div>
    </div>
  );
};

export default Post;

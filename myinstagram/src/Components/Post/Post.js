import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import postimage from "../../images/post.jpg";
import love from "../../images/love.svg";
import comment from "../../images/comment.svg";
import share from "../../images/share.svg";
import { useState } from "react";
import { useEffect } from "react";

const Post = (props) => {
  const [commentList, setcommentList] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = () => { // API backend
    let data = [
      {
        username: "ASD",
        commentId: "1234",
        timeStamp: "123456",
        description: "comment 1",
      },{
        username: "anidanya",
        commentId: "1234",
        timeStamp: "123456",
        description: "comment 2",
      },{
        username: "guto",
        commentId: "1234",
        timeStamp: "123456",
        description: "comment 3",
      },
    ];
    setcommentList(data);
  };

  return (
    <div className="post__container">
      {/* Header */}
      <div className="post__header">
        <Avatar className="post__image" src={props.profileImage} />
        <div className="post__username">{props.userName}</div>
      </div>
 
      {/* Image */}
      <div>
        <img src={props.postImage} width="615px" />
      </div>

      {/* Analytics */}
      <div>
        <div style={{ marginLeft: "10px" }}>
          <img src="{love}" className="post_reactimage" />
          <img src="{comment}" className="post_reactimage" />
          <img src="{share}" className="post_reactimage" />
        </div>
        <div style={{ boldWeight: "bold", marginLeft: "20px" }}>
          {props.likes} likes
        </div>
      </div>

      {/* Comment Section */}
      <div>
        {commentList.map((item, index) => (
          <div className="post__comment">
            {item.username}:{item.description}
          </div>
        ))}
        <input
          text="text"
          className="post__commentbox"
          placeholder="add a comment..."
        />
      </div>
    </div>
  );
};

export default Post;

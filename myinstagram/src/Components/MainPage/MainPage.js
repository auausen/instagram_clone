import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";
import "./MainPage.css";
import uploadImage from "../../images/upload.png";

const MainPage = () => {
  const [postArray, setpostArray] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    let data = [
      {
        postId: "123456",
        userName: "anindya",
        postImageURL: "https://unsplash.com/photos/F5G-bsQO-Co",
        timeStamp: "12345",
        likes: "1234",
        profileImage: "",
      },
      {
        postId: "123456",
        userName: "anindya",
        postImageURL: "https://unsplash.com/photos/F5G-bsQO-Co",
        timeStamp: "12345",
        likes: "1234",
        profileImage: "",
      },
      {
        postId: "123456",
        userName: "anindya",
        postImageURL: "https://unsplash.com/photos/F5G-bsQO-Co",
        timeStamp: "12345",
        likes: "1234",
        profileImage: "",
      },
    ];
    setpostArray(data);
  };

  return (
    <div>
      <div style={{ textAlign: "center", margin: "10px" }}>
        <img className="mainpage__uploadicon" src={uploadImage} />
      </div>
      {postArray.map((item, index) => (
        <div>
          <Post
            id={item.postId}
            userName={item.userName}
            postImage={item.postImageURL}
            likes={item.likes}
            profileImage={item.profileImage}
          />
        </div>
      ))}
    </div>
  );
};

export default MainPage;

import React from 'react'
import Post from '../Post/Post'
import "./MainPage.css"

const MainPage = () => {
  return (
    <div>
      <Post id="1234" userName="asd" postImage="https://unsplash.com/photos/F5G-bsQO-Co" likes="1234" profileImage="" />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default MainPage

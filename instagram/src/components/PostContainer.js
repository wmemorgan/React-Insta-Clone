import React from 'react'

import CommentSection from './CommentSection'

const PostContainer = props => {
  console.log(props)
  const { username, thumbnailUrl, imageUrl, likes, comments } = props.post
  return (
    <div className="post-container">
      <header className="post-header">
        <div className="avatar-wrapper">
          <img src={thumbnailUrl} alt="user avatar" className="avatar" />
        </div>
        <div className="username">
          {username}
        </div>
      </header>
      <div className="post-pic-wrapper">
        <img src={imageUrl} alt="post" className="post-pic"/>
      </div>
      <footer className="post-footer">
        <div className="post-footer-icons">
          <i className="far fa-comment"></i>
          <i className="far fa-heart"></i>
        </div>
        <div className="likes-count">
          {likes} likes
        </div>
        <CommentSection comments={comments}/>
      </footer>
    </div>
  )
}

export default PostContainer
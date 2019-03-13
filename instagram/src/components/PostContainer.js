import React from 'react'

const PostContainer = props => {
  console.log(props)
  const { username, thumbnailUrl, imageUrl, likes } = props.post
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
      </footer>
    </div>
  )
}

export default PostContainer
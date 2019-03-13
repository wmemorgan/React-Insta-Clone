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
        {likes} likes
      </footer>
    </div>
  )
}

export default PostContainer
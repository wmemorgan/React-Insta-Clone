import React from 'react'
import PropTypes from 'prop-types'
import CommentSection from './CommentSection'

const Post = props => {
  const { post, inputValue, commentInput } = props
  const { username, thumbnailUrl, imageUrl, likes, timestamp, comments } = post
  return (
    <div className="post-container">
      {/* Post Header */}
      <header className="post-header">
        <div className="avatar-wrapper">
          <img src={thumbnailUrl} alt="user avatar" className="avatar" />
        </div>
        <div className="username">
          {username}
        </div>
      </header>

      {/* Main Content */}
      <div className="post-pic-wrapper">
        <img src={imageUrl} alt="post" className="post-pic"/>
      </div>

      {/* Post Footer */}
      <footer className="post-footer">
        <div className="post-footer-icons">
          <i className="far fa-comment"></i>
          <i className="far fa-heart"></i>
        </div>
        <div className="likes-count">
          {likes} likes
        </div>
        {/* Pass comment data to comment child component */}
        <CommentSection 
          comments={comments} 
          timestamp={timestamp}
          inputValue={inputValue}
          commentInput={commentInput}
        />
      </footer>
    </div>
  )
}

Post.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.array
}

export default Post
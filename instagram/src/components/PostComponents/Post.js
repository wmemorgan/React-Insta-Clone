import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Styled Components
import { PostContainer, PostHeader } from './PostStyleComponents'

import CommentSection from '../CommentComponents/CommentSection'

const Post = props => {
  const { id, post, likes, addLikes } = props
  const { username, thumbnailUrl, imageUrl, timestamp, comments, filtered } = post
  const postClassGroup = classNames({
    filtered: filtered
  });
  return (
    <PostContainer className={postClassGroup}>
      {/* Post Header */}
      <PostHeader>
        <div className="avatar-wrapper">
          <img src={thumbnailUrl} alt="user avatar" className="avatar" />
        </div>
        <div className="username">
          {username}
        </div>
      </PostHeader>

      {/* Main Content */}
      <div className="post-pic-wrapper">
        <img src={imageUrl} alt="post" className="post-pic"/>
      </div>

      {/* Post Footer */}
      <footer className="post-footer">
        <div className="post-footer-icons">
          <i className="far fa-comment"></i>
          <i onClick={addLikes} className="far fa-heart"></i>
        </div>
        <div className="likes-count">
          {likes} likes
        </div>
        {/* Pass comment data to comment child component */}
        <CommentSection
          id={id}
          username={username} 
          comments={comments} 
          timestamp={timestamp}
        />
      </footer>
    </PostContainer>
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
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Styled Components
import { PostContainer, PostHeader, UserThumbnail, PostPictureContainer, PostPicture, PostFooter, FooterIcons } from './PostStyleComponents'
import Username from '../StyleComponents/Username'

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
        <UserThumbnail>
          <img src={thumbnailUrl} alt="user thumbnail"/>
        </UserThumbnail>
    
        <Username primary>
          {username}
        </Username>
      </PostHeader>

      {/* Main Content */}
      <PostPictureContainer>
        <PostPicture src={imageUrl} alt="post" />
      </PostPictureContainer>

      {/* Post Footer */}
      <PostFooter>
        <FooterIcons>
          <i className="far fa-comment"></i>
          <i onClick={addLikes} className="far fa-heart"></i>
        </FooterIcons>
        {likes} likes
        {/* Pass comment data to comment child component */}
        <CommentSection
          id={id}
          username={username} 
          comments={comments} 
          timestamp={timestamp}
        />
      </PostFooter>
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
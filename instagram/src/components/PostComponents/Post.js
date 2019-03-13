import React from 'react'

import CommentSection from '../CommentComponents/CommentSection'


const Post = props => {
  console.log(props.post)
  const { username, thumbnailUrl, imageUrl, likes, comments } = props.post
  return (
    <div className="post-container">
      <img src={thumbnailUrl} alt="avatar"/>
      {username}
      <img src={imageUrl} alt="post"/>
      <p>{likes}</p>
      <CommentSection comments={comments} />
    </div>
  )
}

export default Post
import React from 'react'

// import CommentSection from '../CommentComponents/CommentSection'
// <CommentSection comments={comments} />

const Post = props => {
  console.log(props.post)
  const { username, thumbnailUrl, imageUrl, likes, comments } = props.post
  return (
    <div className="post-container">
      <img src={thumbnailUrl} alt="avatar"/>
      {username}
      <img src={imageUrl} alt="post"/>
      <p>{likes}</p>
      
    </div>
  )
}

export default Post
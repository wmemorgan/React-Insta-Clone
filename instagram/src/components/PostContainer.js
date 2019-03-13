import React from 'react'
// import PropTypes from 'prop-types'

// import CommentSection from './CommentSection'

const PostContainer = props => {
  console.log(`props: ${props}`)
  const { username, comments } = props.user
  return (
    <div className="post-contaier">
      <h2>{username}</h2>
      <p>{comments}</p>
    </div>
  )
  
}

export default PostContainer
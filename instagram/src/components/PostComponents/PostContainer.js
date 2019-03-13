import React from 'react'
// import PropTypes from 'prop-types'

import Post from './Post'

const PostContainer = props => {
  
  return (
    <div className="post-contaier">
      {props.posts.map(post => (
        <Post key={post.timestamp} post={post}/>
      ))}
    </div>
  )
  
}

export default PostContainer
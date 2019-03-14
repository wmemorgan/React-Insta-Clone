/* Display post data */
import React from 'react'

import Post from './Post'

const PostContainer = props => {
  return (
    <Post post={props.post}/>
  )
}

export default PostContainer
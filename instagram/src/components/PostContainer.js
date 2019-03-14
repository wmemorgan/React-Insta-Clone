/* Display post data */
import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostContainer = props => {
  const { post, inputValue, commentInput } = props
  return (
    <Post 
      post={post}
      inputValue={inputValue}
      commentInput={commentInput}
    />
  )
}

PostContainer.propTypes = {
  post: PropTypes.object
}

PostContainer.defaultProps = {
  post: {}
}

export default PostContainer
/* Display post data */
import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

const PostContainer = props => {
  return (
    <Post
      post={props.post}
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
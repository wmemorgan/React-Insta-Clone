/* Parse and pass through post comments */
import React from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'
import CommentForm from './CommentForm'
import ElapsedTime from './ElapsedTime';

const CommentSection = props => {
  const { comments, timestamp } = props
  return (
    /* Iterate and pass comment data to
       seperate comment child component */
    <div className="comment-section">
      {comments.map((comment, index) => (

        <Comment key={index} comment={comment} />
      ))}
      <ElapsedTime timestamp={timestamp}/>
      <CommentForm />
    </div>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection
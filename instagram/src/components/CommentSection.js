/* Parse and pass through post comments */
import React from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'
import CommentForm from './CommentForm'
import ElapsedTime from './ElapsedTime';

const CommentSection = props => {
  const { username, comments, timestamp, inputValue, commentInput, commentSubmit } = props
  return (
    /* Iterate and pass comment data to
       seperate comment child component */
    <div className="comment-section">
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
      <ElapsedTime timestamp={timestamp}/>
      <CommentForm 
        username={username} 
        inputValue={inputValue} 
        commentInput={commentInput} 
        commentSubmit={commentSubmit}
      />
    </div>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection
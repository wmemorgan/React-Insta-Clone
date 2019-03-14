/* Parse and pass through post comments */
import React from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'

const CommentSection = props => {
  return (
    /* Iterate and pass comment data to
       seperate comment child component */
    <div className="comment-section">
      {props.comments.map((comment, index) => (

        <Comment key={index} comment={comment} />
      ))}

      {/* Comment submission form */}
      <form className="comment-form">
        <textarea className="comment-input" placeholder="Add comment...">
        </textarea>
      </form>
    </div>
  )
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection
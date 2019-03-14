/* Comment submission form */
import React from 'react'

const CommentForm = props => {
  return (
    <form className="comment-form">
      <textarea className="comment-input" placeholder="Add comment...">
      </textarea>
    </form>
  )
}

export default CommentForm
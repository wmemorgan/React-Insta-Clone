/* Comment submission form */
import React from 'react'

const CommentForm = props => {
  const { inputValue, commentInput } = props
  return (
    <form className="comment-form">
      <textarea onChange={commentInput} value={inputValue} className="comment-input" placeholder="Add comment...">
      </textarea>
    </form>
  )
}

export default CommentForm
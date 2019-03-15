/* Comment submission form */
import React from 'react'

const CommentForm = props => {
  const { username, inputValue, commentInput, addNewComment } = props
  return (
    <form onSubmit={(e) => addNewComment(e, username)} className="comment-form">
      <input onChange={commentInput} value={inputValue} className="comment-input" placeholder="Add comment..." />
    </form>
  )
}

export default CommentForm
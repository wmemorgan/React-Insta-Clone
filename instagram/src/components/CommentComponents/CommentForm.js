/* Comment submission form */
import React from 'react'

const CommentForm = props => {
  const { inputValue, commentInput, addNewComment } = props
  return (
    <form onSubmit={(e) => addNewComment(e)} className="comment-form">
      <input onChange={commentInput} value={inputValue} className="comment-input" placeholder="Add comment..." />
    </form>
  )
}

export default CommentForm
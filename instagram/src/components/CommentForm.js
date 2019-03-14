/* Comment submission form */
import React from 'react'

const CommentForm = props => {
  const { username, inputValue, commentInput, commentSubmit } = props
  return (
    <>
    <form className="comment-form">
      <textarea onChange={commentInput} value={inputValue} className="comment-input" placeholder="Add comment...">
      </textarea>
    </form>
    <button onClick={() => commentSubmit(username)} className="btn btn-add" >Add Comment</button>
    </>
  )
}

export default CommentForm
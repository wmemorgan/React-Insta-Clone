/* Comment submission form */
import React from 'react'

// Styled component
import Form from '../StyleComponents/Form'

const CommentForm = props => {
  const { inputValue, commentInput, addNewComment } = props
  return (
    <Form onSubmit={(e) => addNewComment(e)}>
      <input onChange={commentInput} value={inputValue} placeholder="Add comment..." />
    </Form>
  )
}

export default CommentForm
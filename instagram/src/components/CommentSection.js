import React from 'react'
import Comment from './Comment'

const CommentSection = props => {
  console.log(props)
  return (
    <div className="comment-section">
      {props.comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </div>
  )
}

export default CommentSection
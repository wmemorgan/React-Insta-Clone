import React from 'react'
import Comment from './Comment'

const CommentSection = props => {
  console.log(props)
  return (
    <div className="comment-section">
      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}

      <form className="comment-form">
        <textarea className="comment-input" placeholder="Add comment...">
        </textarea>
      </form>
    </div>
  )
}

export default CommentSection
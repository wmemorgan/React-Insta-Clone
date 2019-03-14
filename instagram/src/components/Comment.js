/* Display individual comment */
import React from 'react'

const Comment = props => {
  console.log(`Comment props: `, props.comment)
  const { username, text } = props.comment
  return (
    <div className="comment-card">
      <div className="comment-username">
        {username}
      </div>
      <div className="comment-text">
        {text}
      </div>
    </div>
  )
}

export default Comment
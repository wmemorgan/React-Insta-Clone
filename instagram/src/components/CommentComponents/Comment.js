import React from 'react'

const Comment = props => {
  console.log(`Comment props: `, props.comment)
  return (
    <div className="comment-card">
      Hello
    </div>
  )
}

export default Comment
/* Display individual comment */
import React from 'react'
import PropTypes from 'prop-types'

const Comment = props => {
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

Comment.propType = {
  username: PropTypes.string,
  text: PropTypes.string
}

export default Comment
/* Display individual comment */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
      isPressed: false
    }
  }

  toggleDeleteBtn = () => {
    this.setState(prevState => { 
      return { isHidden: !prevState.isHidden }
    })
  }

  render () {
    console.log(`Comment component render`)
    const { id, comment, deleteComment } = this.props
    const { username, text } = comment
    const commentBtnGroup = classNames(
      'btn-delete'
    )
    console.log(commentBtnGroup)
 
    return (
      <div className="comment-card">
        <div className="comment-content-wrapper">
          <div className="comment-username">
            {username}
          </div>
          <div className="comment-text">
            {text}
          </div>
        </div>
        <div className="comment-delete-wrapper">
          <i onClick={this.toggleDeleteBtn} className="fas fa-ellipsis-v"></i>
          {
            this.state.isHidden ? '' :
              <button onClick={() => deleteComment(id)} className={commentBtnGroup}>Delete Comment</button>
          }
        </div>
      </div>
    )
  }
}

Comment.propType = {
  username: PropTypes.string,
  text: PropTypes.string
}

export default Comment
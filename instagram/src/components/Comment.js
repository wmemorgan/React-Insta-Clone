/* Display individual comment */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  // Show or hide delete button
  toggleDeleteBtn = () => {
    this.setState(prevState => { 
      return { isHidden: !prevState.isHidden }
    })
  }

  render () {
    console.log(`Comment component render`)
    const { id, comment, deleteComment } = this.props
    const { username, text } = comment
 
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
          {/* Toggle delete button when pressed */}
          <i onClick={this.toggleDeleteBtn} className="fas fa-ellipsis-v"></i>
          {
            this.state.isHidden ? '' :
              <button onClick={() => deleteComment(id)} className="btn-delete">Delete Comment</button>
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
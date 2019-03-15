/* Parse and pass through post comments */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Comment from './Comment'
import CommentForm from './CommentForm'
import ElapsedTime from './ElapsedTime';

class CommentSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: props.comments,
      inputValue: ''
    }
  }

  // Capture comment form input
  commentInput = e => {
    console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }

  // Add new comment
  addNewComment = (e, username) => {
    e.preventDefault()
    this.setState(prevState => {
      // Create a new comment object
      let newComment = {
        username,
        text: prevState.inputValue
      }

      return {
        // Add the new comment object to the comments array
        comments: [...prevState.comments, newComment],
        inputValue: ''
      }


    },
      () => {
        console.log(`updated state to:`, this.state)
      }
    )    
 
  }

  render() {
    const { username, timestamp } = this.props
    return (
      /* Iterate and pass comment data to
         seperate comment child component */
      <div className="comment-section">
        {this.state.comments.map((comment, index) => (
          <Comment key={index} comment={comment} />
        ))}
        <ElapsedTime timestamp={timestamp} />
        <CommentForm
          username={username}
          inputValue={this.state.inputValue}
          commentInput={this.commentInput}
          addNewComment={this.addNewComment}
        />
      </div>
    )
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentSection
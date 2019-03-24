/* Comment submission form */
import React, { Component } from 'react'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {inputValue: props.inputValue}
  }

  // Capture comment form input
  commentInput = e => {
    e.preventDefault()
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    const { username, commentSubmit } = this.props
    return (
      <>
        <form onSubmit={() => commentSubmit(username, this.state.inputValue)} className="comment-form">
          <textarea onChange={this.commentInput} value={this.state.inputValue} className="comment-input" placeholder="Add comment...">
          </textarea>
        </form>
        <button onClick={() => commentSubmit(username, this.state.inputValue)} className="btn btn-add" >Add Comment</button>
      </>
    )
  }

}

export default CommentForm
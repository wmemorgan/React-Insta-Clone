/* Comment submission form */
import React, { Component } from 'react'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {inputValue: props.inputValue}
  }

  // Capture comment form input
  // commentInput = e => {
  //   e.preventDefault()
  //   this.setState({
  //     inputValue: e.target.value
  //   })
  // }

  render() {
    const { key, username, inputValue, commentSubmit, commentInput, addComment } = this.props
    return (
      <>
        <form onSubmit={() => commentSubmit(username, this.state.inputValue)} className="comment-form">
          <textarea onChange={commentInput} value={inputValue} className="comment-input" placeholder="Add comment...">
          </textarea>
        </form>
        <button onClick={() => addComment(username, key)} className="btn btn-add" >Add Comment</button>
      </>
    )
  }

}

export default CommentForm